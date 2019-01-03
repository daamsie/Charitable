<?php
/**
 * Responsible for interpreting the data received in a PayPal IPN.
 *
 * @package   Charitable/Classes/Charitable_PayPal_Webhook_Interpreter
 * @author    Eric Daams
 * @copyright Copyright (c) 2018, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! class_exists( 'Charitable_PayPal_Webhook_Interpreter' ) ) :

	/**
	 * Charitable_PayPal_Webhook_Interpreter
	 *
	 * @since 1.7.0
	 */
	class Charitable_PayPal_Webhook_Interpreter implements Charitable_Webhook_Interpreter_Interface {

		/**
		 * The raw event data received from PayPal.
		 *
		 * @since 1.7.0
		 *
		 * @var   array
		 */
		protected $data;

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 */
		public function __construct( $data ) {
			$this->data = $this->parse_data( $data );
		}

		/**
		 * Return the gateway's reference id for a particular donation or subscription.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_gateway_reference_id() {
			return $data['txn_id'];
		}

		/**
		 * Returns the raw data received.
		 *
		 * @since  1.7.0
		 *
		 * @return array
		 */
		public function get_raw_data() {
			return $this->data;
		}

		/**
		 * Return a specific data point from the set.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $key The key of the data point to retrieve.
		 * @return mixed
		 */
		public function get_raw_data_point( $key ) {
			return array_key_exists( $key, $this->data ) ? $this->data[ $key ] : null;
		}

		/**
		 * Return the donation status according to the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string|false String if a valid status can be ascertained. Otherwise false.
		 */
		public function get_donation_status() {
			switch ( $this->data['payment_status'] ) {
				case 'refunded':
				case 'reversed':
					return 'charitable-refunded';

				case 'declined':
				case 'failed':
				case 'denied':
				case 'expired':
				case 'voided':
					return 'charitable-failed';

				case 'completed':
					return 'charitable-completed';

				case 'pending':
					return 'charitable-pending';

				default:
					return false;
			}
		}

		/**
		 * Return the donation amount according to the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_donation_amount() {
			return $this->data['mc_gross'];
		}

		/**
		 * Return the currency of the donation according to the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_currency() {
			return strtoupper( $this->data['mc_currency'] );
		}

		/**
		 * Return the business email.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_business_email() {
			$email = $this->get_raw_data_point( 'business' );

			if ( is_null( $email ) || ! is_email( $email ) ) {
				$email = (string) $this->get_raw_data_point( 'receiver_email' );
			}

			return trim( $email );
		}

		/**
		 * Return the donation key passed by the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string|false Should return a string, but will return false if no donation_key
		 *                      is found in webhook data.
		 */
		public function get_donation_key() {
			if ( array_key_exists( 'invoice', $this->data ) ) {
				return $this->data['invoice'];
			}

			$custom = json_decode( $this->data['custom'], true );

			if ( is_array( $custom ) && array_key_exists( 'donation_key', $custom ) ) {
				return $custom['donation_key'];
			}

			return false;
		}

		/**
		 * Return the donation ID passed by the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return int
		 */
		public function get_donation_id() {
			$custom = json_decode( $this->data['custom'], true );

			if ( is_array( $custom ) && array_key_exists( 'donation_id', $custom ) ) {
				return absint( $custom['donation_id'] );
			}

			return absint( $custom );
		}

		/**
		 * Returns an instance of Charitable_Donation for the current webhook's donation ID.
		 *
		 * @since  1.7.0
		 *
		 * @return Charitable_Donation
		 */
		public function get_donation() {
			return charitable_get_donation( $this->get_donation_id() );
		}

		/**
		 * Return the type of webhook we have received.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_event_type() {
			return strlen( $this->data['txn_type'] ) ? $this->data['txn_type'] : 'web_accept';
		}

		/**
		 * Returns whether the event is for a refund.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function is_refund() {
			return 'charitable-refunded' == $this->get_donation_status();
		}

		/**
		 * Returns whether the event is for a partial refund.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function is_partial_refund() {
			$is_partial_refund = $this->is_refund() && $this->get_donation_amount() < $this->get_donation()->get_total_donation_amount( true );

			/**
			 * Returns whether this is a partial refund.
			 *
			 * @since 1.7.0
			 *
			 * @param boolean                               $is_partial_refund Whether this is a partial refund.
			 * @param Charitable_PayPal_Webhook_Interpreter $interpreter       This instance of `Charitable_PayPal_Webhook_Interpreter`.
			 */
			return apply_filters( 'charitable_paypal_webhook_is_partial_refund', $is_partial_refund, $this );
		}

		/**
		 * Returns whether the event is for a payment failure.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function is_failure() {
			return 'charitable-failed' == $this->get_donation_status();
		}

		/**
		 * Returns whether the event is for a completed payment.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function is_complete() {
			return 'charitable-completed' == $this->get_donation_status();
		}

		/**
		 * Returns whether the event is for a pending payment.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function is_pending() {
			return 'charitable-pending' == $this->get_donation_status();
		}

		/**
		 * Parse data received from PayPal against a set of defaults.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $data The data received from PayPal.
		 * @return array
		 */
		private function parse_data( $data ) {
			$defaults = array(
				'payment_status' => '',
				'custom'         => 0,
				'txn_type'       => '',
			);

			return wp_parse_args( $data, $defaults );
		}
	}

endif;
