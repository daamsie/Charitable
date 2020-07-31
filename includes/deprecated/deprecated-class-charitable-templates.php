<?php
/**
 * Sets up Charitable templates for specific views.
 *
 * @package   Charitable/Classes/Charitable_Templates
 * @author    Eric Daams
 * @copyright Copyright (c) 2020, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.0.0
 * @version   1.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'Charitable_Templates' ) ) :

	/**
	 * Charitable_Templates
	 *
	 * @since   1.0.0
	 */
	class Charitable_Templates {

		/**
		 * The single instance of this class.
		 *
		 * @var     Charitable_Templates|null
		 */
		private static $instance = null;

		/**
		 * Returns and/or create the single instance of this class.
		 *
		 * @since   1.2.0
		 *
		 * @return  Charitable_Templates
		 */
		public static function get_instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Set up the class.
		 *
		 * Note that the only way to instantiate an object is with the charitable_start method,
		 * which can only be called during the start phase. In other words, don't try
		 * to instantiate this object.
		 *
		 * @since   1.0.0
		 */
		private function __construct() {
			/* If you want to unhook any of the callbacks attached above, use this hook. */
			do_action( 'charitable_templates_start', $this );
		}

		/***********************************************/
		/* HERE BE DEPRECATED METHODS
		/***********************************************/

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Template to load.
		 * @return string
		 */
		public function template_loader( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Endpoints::template_loader()'
			);

			return charitable()->endpoints()->template_loader( $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_donation_receipt_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Donation_Receipt_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'donation_receipt', $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_donation_processing_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Donation_Processing_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'donation_processing', $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_donate_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Campaign_Donation_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'campaign_donation', $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_widget_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Campaign_Widget_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'campaign_widget', $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_email_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Email_Preview_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'email_preview', $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_forgot_password_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Forgot_Password_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'forgot_password', $template );
		}

		/**
		 * Deprecated method.
		 *
		 * @deprecated 2.0.0
		 *
		 * @since 1.5.0 Deprecated.
		 *
		 * @param  string $template Default template to load.
		 * @return string
		 */
		protected function get_reset_password_template( $template ) {
			charitable_get_deprecated()->deprecated_function(
				__METHOD__,
				'1.5.0',
				'Charitable_Reset_Password_Endpoint::get_template()'
			);

			return charitable()->endpoints()->get_endpoint_template( 'reset_password', $template );
		}
	}

endif;