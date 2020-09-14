<?php
/**
 * Interface to be implemented by gateways.
 *
 * @package   Charitable/Classes/Charitable_Gateway_Payment_Response_Interface
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

if ( ! interface_exists( 'Charitable_Gateway_Payment_Response_Interface' ) ) :

	/**
	 * Charitable_Gateway_Payment_Response_Interface
	 *
	 * @since 1.7.0
	 */
	interface Charitable_Gateway_Payment_Response_Interface {
		/**
		 * Return the gateway transaction id.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_gateway_transaction_id();

		/**
		 * Returns whether the payment requires some further action.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function payment_requires_action();

		/**
		 * Whether the payment requires a redirect to a payment page.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function payment_requires_redirect();

		/**
		 * Returns whether the payment failed.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function payment_failed();

		/**
		 * Returns whether the payment was completed.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function payment_completed();

		/**
		 * Returns whether the payment was cancelled.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function payment_cancelled();

		/**
		 * The URL to redirect the donor to, or null if not required.
		 *
		 * @since  1.7.0
		 *
		 * @return string|null
		 */
		public function get_redirect();

		/**
		 * Returns any log messages to be added for the payment.
		 *
		 * @since  1.7.0
		 *
		 * @return array
		 */
		public function get_logs();

		/**
		 * Returns any meta data to be recorded for the payment, beyond
		 * the gateway transaction id.
		 *
		 * @since  1.7.0
		 *
		 * @return array
		 */
		public function get_meta();
	}

endif;
