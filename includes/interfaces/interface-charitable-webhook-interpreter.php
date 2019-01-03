<?php
/**
 * Charitable Webhook Interpreter interface.
 *
 * @package   Charitable/Interfaces/Charitable_Webhook_Interpreter_Interface
 * @author    Eric Daams
 * @copyright Copyright (c) 2018, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! interface_exists( 'Charitable_Webhook_Interpreter_Interface' ) ) :

	/**
	 * Charitable_Webhook_Interpreter_Interface interface.
	 *
	 * @since 1.7.0
	 */
	interface Charitable_Webhook_Interpreter_Interface {
		/**
		 * Return the gateway's reference id for a particular donation or subscription.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_gateway_reference_id();

		/**
		 * Return the donation status according to the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_donation_status();

		/**
		 * Return the donation amount according to the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_donation_amount();

		/**
		 * Return the donation key passed by the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_donation_key();

		/**
		 * Return the donation ID passed by the gateway.
		 *
		 * @since  1.7.0
		 *
		 * @return ing
		 */
		public function get_donation_id();
	}

endif;
