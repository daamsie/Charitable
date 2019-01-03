<?php
/**
 * Class that is responsible for receiving and responding to PayPal IPNs.
 *
 * @package   Charitable/Classes/Charitable_PayPal_Webhook_Processor
 * @author    Eric Daams
 * @copyright Copyright (c) 2018, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! class_exists( 'Charitable_PayPal_Webhook_Processor' ) ) :

	/**
	 * Charitable_PayPal_Webhook_Processor
	 *
	 * @since 1.7.0
	 */
	class Charitable_PayPal_Webhook_Processor {

		/**
		 * Event object.
		 *
		 * @since 1.7.0
		 *
		 * @var   Charitable_Webhook_Interpreter_Interface
		 */
		protected $interpreter;

		/**
		 * Gateway helper instance.
		 *
		 * @since 1.7.0
		 *
		 * @var   Charitable_Gateway_Paypal
		 */
		protected $gateway;

		/**
		 * The ID of the donation we are processing.
		 *
		 * @since 1.7.0
		 *
		 * @var   int
		 */
		protected $donation_id;

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 *
		 * @param Charitable_PayPal_Webhook_Interpreter $interpreter An interpreter instance.
		 */
		public function __construct( Charitable_PayPal_Webhook_Interpreter $interpreter ) {
			$this->interpreter = $interpreter;
			$this->gateway     = new Charitable_Gateway_Paypal;
		}

		/**
		 * Process an incoming PayPal IPN.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public static function process() {
			/* Retrieve and validate the request's body. */
			$data = self::parse_incoming_data();

			if ( empty( $data ) ) {
				status_header( 500 );
				die( __( 'Missing PayPal data.', 'charitable' ) );
			}

			$interpreter = new Charitable_PayPal_Webhook_Interpreter( $data );
			$processor   = new Charitable_PayPal_Webhook_Processor( $interpreter );
			$processor->run();
		}

		/**
		 * Parse incoming PayPal IPN data.
		 *
		 * @since  1.7.0
		 *
		 * @return array
		 */
		public static function parse_incoming_data() {
			$post_data = '';

			/* Fallback just in case post_max_size is lower than needed. */
			if ( ini_get( 'allow_url_fopen' ) ) {
				$post_data = file_get_contents( 'php://input' );
			} else {
				ini_set( 'post_max_size', '12M' );
			}

			if ( strlen( $post_data ) ) {
				$arg_separator = ini_get( 'arg_separator.output' );
				$data_string   = 'cmd=_notify-validate' . $arg_separator . $post_data;

				/* Convert collected post data to an array */
				parse_str( $data_string, $data );

				return $data;
			}

			/* Return an empty array if there are no POST variables. */
			if ( empty( $_POST ) ) {
				return array();
			}

			$data = array(
				'cmd' => '_notify-validate',
			);

			return array_merge( $data, $_POST );
		}

		/**
		 * Run the webhook processor.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public function run() {
			if ( ! $this->verify_ipn() ) {
				$this->kill( __( 'IPN Verification Failure', 'charitable' ), 500 );
			}

			$this->donation_id = $this->interpreter->get_donation_id();

			if ( ! $this->donation_id ) {
				$this->kill( __( 'Missing Donation ID', 'charitable' ), 500 );
			}
		}

		/**
		 * Sets up any default event processors.
		 *
		 * @since  1.3.0
		 *
		 * @return void
		 */
		public function run_event_processors() {
			/**
			 * Default event processors.
			 *
			 * @since 1.3.0
			 *
			 * @param array $processors Array of Stripe event types and associated callback functions.
			 */
			$default_processors = apply_filters( 'charitable_paypal_default_event_processors', array(
				'web_accept' => array( $this, 'process_web_accept' ),
			) );

			$event_type = $this->interpreter->get_event_type();

			if ( array_key_exists( $event_type, $default_processors ) ) {
				call_user_func( $default_processors[ $event_type ] );
			} elseif ( has_action( 'charitable_paypal_' . $event_type ) ) {
				/**
				 * Fire an action hook to process the event.
				 *
				 * @since 1.0.0
				 *
				 * @param array $data        The raw data received in the webhook.
				 * @param int   $donation_id The donation ID we are processing.
				 */
				do_action( 'charitable_paypal_' . $event_type, $this->intepreter->get_raw_data(), $this->interpreter->get_donation_id() );
				return;
			}

			return $this->process_web_accept();
		}

		/**
		 * Receives verified IPN data from PayPal and processes the donation.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public function process_web_accept() {
			$donation = $this->interpreter->get_donation();

			if ( 'paypal' != $donation->get_gateway() ) {
				$this->kill( __( 'Incorrect Gateway', 'charitable' ), 500 );
			}

			$donation_key = $this->interpreter->get_donation_key();

			if ( ! $donation_key ) {
				$this->kill( __( 'Missing Donation Key', 'charitable' ), 500 );
			}

			$amount          = $this->interpreter->get_donation_amount();
			$donation_status = $this->interpreter->get_donation_status();
			$currency_code   = $this->interpreter->get_currency();
			$reference_id    = $this->interpreter->get_gateway_reference_id();

			/* Verify that the business email matches the PayPal email in the settings */
			if ( ! $this->verify_business_email() ) {
				$donation->log()->add( sprintf(
					/* translators: %s: JSON array */
					__( 'Invalid Business email in the IPN response. IPN data: %s', 'charitable' ),
					json_encode( $this->data )
				) );

				$donation->update_status( $donation_status );

				$this->kill( __( 'Incorrect Business Email', 'charitable' ), 500 );
			}

			/* Verify that the currency matches. */
			if ( charitable_get_currency() != $this->interpreter->get_currency() ) {
				$donation->log()->add( sprintf(
					/* translators: %s: JSON array */
					__( 'The currency in the IPN response does not match the site currency. IPN data: %s', 'charitable' ),
					json_encode( $this->data )
				) );

				$donation->update_status( 'charitable-failed' );

				$this->kill( __( 'Incorrect Currency', 'charitable' ), 500 );
			}

			/* Process a refunded donation. */
			if ( $this->interpreter->is_refund() ) {
				$parent_txn_id = (string) $this->interpreter->get_raw_data_point( 'parent_txn_id' );

				/* It's a partial refund. */
				if ( $this->interpreter->is_partial_refund() ) {
					$message = sprintf( '%s: #%s',
						__( 'Partial PayPal refund processed', 'charitable' ),
						$parent_txn_id
					);
				} else {
					$reason  = (string) $this->interpreter->get_raw_data_point( 'reason_code' );
					$message = sprintf( '%s #%s %s: %s',
						__( 'PayPal Payment', 'charitable' ),
						$parent_txn_id,
						__( 'refunded with reason', 'charitable' ),
						$reason
					);
				}

				$donation->process_refund( $amount, $message );

				$this->kill( __( 'Refund Processed', 'charitable' ) );
			}

			/* Mark a payment as failed. */
			if ( $this->interpreter->is_failure() ) {

				$message = sprintf(
					/* translators: %s: PayPal payment status. */
					__( 'The donation has failed with the following status: %s', 'charitable' ),
					$this->interpreter->get_raw_data_point( 'payment_status' )
				);
				$donation->log()->add( $message );
				$donation->update_status( 'charitable-failed' );

				$this->kill( __( 'Payment Failed', 'charitable' ) );

			}

			/* If we have already processed this donation, stop here. */
			if ( 'charitable-completed' == get_post_status( $donation_id ) ) {
				$this->kill( __( 'Donation Processed Already', 'charitable' ), 200 );
			}

			/* Verify that the donation key matches the one stored for the donation. */
			if ( $donation_key != $donation->get_donation_key() ) {

				$message = sprintf( '%s %s', __( 'Donation key in the IPN response does not match the donation. IPN data:', 'charitable' ), json_encode( $data ) );
				$donation->log()->add( $message );
				$donation->update_status( 'charitable-failed' );

				die( __( 'Invalid Donation Key', 'charitable' ) );

			}

			/* Verify that the amount in the IPN matches the amount we expected. */
			if ( $this->verify_amount() ) {

				$message = sprintf( '%s %s', __( 'The amount in the IPN response does not match the expected donation amount. IPN data:', 'charitable' ), json_encode( $data ) );
				$donation->log()->add( $message );
				$donation->update_status( 'charitable-failed' );

				die( __( 'Incorrect Amount', 'charitable' ) );

			}

			/* Save the transation ID */
			$donation->set_gateway_transaction_id( $reference_id );

			/* Process a completed donation. */
			if ( 'completed' == $payment_status ) {

				$message = sprintf( '%s: %s', __( 'PayPal Transaction ID', 'charitable' ), $reference_id );
				$donation->log()->add( $message );
				$donation->update_status( 'charitable-completed' );

				die( __( 'Donation Completed', 'charitable' ) );

			}

			/* If the donation is set to pending but has a pending_reason provided, save that to the log. */
			if ( 'pending' == $payment_status ) {

				if ( array_key_exists( 'pending_reason', $data ) ) {

					$message = $gateway->get_pending_reason_note( strtolower( $data['pending_reason'] ) );
					$donation->log()->add( $message );

				}

				$donation->update_status( 'charitable-pending' );

				die( __( 'Donation Pending', 'charitable' ) );

			}

			die( __( 'Unknown Response', 'charitable' ) );
		}

		/**
		 * Kill processing, returning the appropriate header status and a message.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $message A message to display.
		 * @param  int    $status  The header status to return.
		 * @return void
		 */
		public function kill( $message, $status = 200 ) {
			status( $status );

			wp_die( $message );
		}

		/**
		 * Validates an IPN request.
		 *
		 * @since  1.7.0
		 *
		 * @param  mixed[] $data Data received from PayPal.
		 * @return boolean
		 */
		public function verify_ipn() {
			if ( $this->gateway->get_value( 'disable_ipn_verification' ) ) {
				return true;
			}

			$remote_post_vars = array(
				'method'      => 'POST',
				'timeout'     => 45,
				'redirection' => 5,
				'httpversion' => '1.1',
				'blocking'    => true,
				'headers'     => array(
					'host'         => 'www.paypal.com',
					'connection'   => 'close',
					'content-type' => 'application/x-www-form-urlencoded',
					'post'         => '/cgi-bin/webscr HTTP/1.1',

				),
				'sslverify'   => false,
				'body'        => $this->interpreter->get_raw_data(),
			);

			/* Get response */
			$api_response = wp_remote_post(
				$this->gateway->get_redirect_url( true, true ),
				$remote_post_vars
			);

			/**
			 * Filter whether the PayPal IPN was verified.
			 *
			 * @since 1.0.0
			 *
			 * @param boolean        $valid        Whether it has been verified.
			 * @param array|WP_Error $api_response Array in case of successful request. WP_Error otherwise.
			 */
			return apply_filters( 'charitable_paypal_ipn_verification', $this->is_valid_api_response( $api_response ), $api_response );
		}

		/**
		 * Verify the donation amount.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function verify_amount( Charitable_Donation $donation ) {
			$amount = $this->interpreter->get_amount();

			if ( 'charitable-refunded' == $this->interpreter->get_donation_status() ) {
				$verified = $amount <= $donation->get_total_donation_amount( true );
			} else {
				$verified = abs( $amount - $donation->get_total_donation_amount( true ) ) < 0.01;
			}

			/**
			 * Filter whether the donation amount received from the gateway matches the donation.
			 *
			 * @since 1.7.0
			 *
			 * @param boolean                             $verified    Whether the amount is verified.
			 * @param float                               $amount      The amount reported by the gateway.
			 * @param Charitable_Donation                 $donation    The donation instance.
			 * @param Charitable_PayPal_Webhook_Processor $interpreter The interpreter instance.
			 */
			return apply_filters( 'charitable_paypal_webhook_verify_amount', $verified, $amount, $donation, $this );
		}

		/**
		 * Verify that the business email received from the gateway matches the donation.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function verify_business_email() {
			$verified = strcasecmp( $this->interpreter->get_business_email(), trim( $this->gateway->get_paypal_email() ) ) != 0;

			/**
			 * Filter whether the business email received from the gateway is correct.
			 *
			 * @since 1.7.0
			 *
			 * @param boolean                             $verified    Whether the amount is verified.
			 * @param Charitable_PayPal_Webhook_Processor $interpreter The interpreter instance.
			 */
			return apply_filters( 'charitable_paypal_webhook_verify_business_email', $verified, $this );
		}

		/**
		 * Returns whether the API response we received is valid.
		 *
		 * @since  1.7.0
		 *
		 * @param  array|WP_Error $api_response Array in case of successful request. WP_Error otherwise.
		 * @return boolean
		 */
		private function is_valid_api_response( $api_response ) {
			return ! is_wp_error( $api_response ) && 'VERIFIED' == $api_response['body'];
		}
	}

endif;
