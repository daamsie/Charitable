<?php
/**
 * Class responsible for processing incoming webhooks related to donations.
 *
 * @package   Charitable/Classes/Charitable_Webhook_Processor_Donations
 * @author    Eric Daams
 * @copyright Copyright (c) 2020, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_Webhook_Processor_Donations' ) ) :

	/**
	 * Charitable_Webhook_Processor_Donations
	 *
	 * @since 1.7.0
	 */
	class Charitable_Webhook_Processor_Donations {

		/**
		 * The donation object.
		 *
		 * @since 1.7.0
		 *
		 * @var   Charitable_Donation|false
		 */
		protected $donation;

		/**
		 * Response message.
		 *
		 * @since 1.7.0
		 *
		 * @var   string
		 */
		private $response_message;

		/**
		 * HTTP status to use for response message.
		 *
		 * @since 1.7.0
		 *
		 * @var   int
		 */
		private $response_status;

		/**
		 * Get class properties.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $prop The property to retrieve.
		 * @return mixed
		 */
		public function __get( $prop ) {
			return $this->$prop;
		}

		/**
		 * Process the webhook event.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean|void
		 */
		public function process() {
			$this->donation = $this->interpreter->get_donation();

			/* Without a donation, there's nothing left to do. */
			if ( ! $this->donation ) {
				$this->set_response(
					__( 'Donation Webhook: Event could not be matched to a valid Charitable donation.', 'charitable' )
				);
				return false;
			}

			$event_type = $this->interpreter->get_event_type();

			if ( method_exists( $this, 'process_' . $event_type ) ) {
				return call_user_func( array( $this, 'process_' . $event_type ) );
			}

			/**
			 * Process a webhook event for which we don't have a built-in processor.
			 *
			 * @since 1.7.0
			 *
			 * @param boolean                        $processed   Whether the webhook event was processed.
			 * @param Charitable_Donation            $donation    The donation object.
			 * @param Charitable_Webhook_Interpreter $interpreter The source interpreter.
			 */
			return apply_filters( 'charitable_webhook_processor_donations_process_' . $event_type, false, $this->donation, $this->interpreter );
		}

		/**
		 * Process a refund.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function process_refund() {
			$this->donation->process_refund(
				$this->interpreter->get_refund_amount(),
				$this->interpreter->get_refund_log_message()
			);

			$this->update_meta();
			$this->update_logs();

			$this->set_response( __( 'Donation Webhook: Refund processed', 'charitable' ) );

			return true;
		}

		/**
		 * Process a failed payment for a donation.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function process_failed_payment() {
			$this->donation->update_status( 'charitable-failed' );

			$this->update_meta();
			$this->update_logs();

			$this->set_response( __( 'Donation Webhook: Donation marked as failed.', 'charitable' ) );

			return true;
		}

		/**
		 * Process a completed payment.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function process_completed_payment() {
			$this->donation->update_status( 'charitable-completed' );

			$transaction_id = $this->interpreter->get_gateway_transaction_id();

			/* Record the gateway transaction ID */
			if ( $transaction_id ) {
				$this->donation->set_gateway_transaction_id( $transaction_id );
			}

			$this->update_meta();
			$this->update_logs();

			$this->set_response( __( 'Donation Webhook: Completed payment processed.', 'charitable' ) );

			return true;
		}

		/**
		 * Process a cancelled donation.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function process_cancellation() {
			$this->donation->update_status( 'charitable-cancelled' );
			$this->update_meta();
			$this->update_logs();

			$this->set_response( __( 'Donation Webhook: Donation cancelled.', 'charitable' ) );

			return true;
		}

		/**
		 * Process a donation that has been updated in some way without
		 * the status necessarily changing.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function process_updated_donation() {
			$status = $this->interpreter->get_donation_status();

			/* Update the donation status if it's changed. */
			if ( $this->donation->get_status() !== $status ) {
				$this->donation->update_status( $status );
			}

			$this->update_meta();
			$this->update_logs();

			$this->set_response( __( 'Donation Webhook: Donation updated.', 'charitable' ) );

			return true;
		}

		/**
		 * Update logs for the donation.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public function update_logs() {
			$log = $this->donation->log();

			foreach ( $this->interpreter->get_logs() as $message ) {
				$log->add( $message );
			}
		}

		/**
		 * Update meta for the donation.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public function update_meta() {
			foreach ( $this->interpreter->get_meta() as $meta_key => $meta_value ) {
				update_post_meta( $this->donation->ID, $meta_key, $meta_value );
			}
		}

		/**
		 * Set the response to send.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $message     Response message.
		 * @param  int    $http_status HTTP status to send.
		 * @return void
		 */
		private function set_response( $message, $http_status = 200 ) {
			$this->response_message = $this->interpreter->get_response_message();

			if ( ! $this->response_message ) {
				$this->response_message = $message;
			}

			$this->response_status = $this->interpreter->get_response_status();

			if ( ! $this->response_status ) {
				$this->response_status = $http_status;
			}
		}
	}

endif;
