<?php
/**
 * Webhook interpreter interface.
 *
 * @package   Charitable/Interfaces/Charitable_Webhook_Interpreter_Interface
 * @version   1.7.0
 * @author    Eric Daams
 * @copyright Copyright (c) 2020, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! interface_exists( 'Charitable_Webhook_Interpreter_Interface' ) ) :

	/**
	 * Charitable_Webhook_Interpreter_Interface
	 *
	 * @since 1.5.0
	 */
	interface Charitable_Webhook_Interpreter_Interface {
		/**
		 * Check whether this is a valid webhook.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function is_valid_webhook();

		/**
		 * Check whether there is a processor to use for the webhook source.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function has_processor();

		/**
		 * Get the processor to use for the webhook source.
		 *
		 * @since  1.7.0
		 *
		 * @return false|Charitable_Webhook_Processor
		 */
		public function get_processor();

		/**
		 * Get the subject of this webhook event. The only
		 * webhook event subject currently handled by Charitable
		 * core is a donations.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_event_subject();

		/**
		 * Return the interpreter object to use for donation webhooks.
		 *
		 * @since  1.7.0
		 *
		 * @return Charitable_Webhook_Interpreter_Donations|false
		 */
		public function get_donations_interpreter();
	}

endif;
