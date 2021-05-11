<?php
/**
 * The main Charitable SpamBlocker class.
 *
 * The responsibility of this class is to load all the plugin's functionality.
 *
 * @package   Charitable SpamBlocker
 * @copyright Copyright (c) 2020, Eric Daams
 * @license   http://opensource.org/licenses/gpl-1.0.0.php GNU Public License
 * @version   1.0.0
 * @since     1.0.4
 */

namespace Charitable\Packages\SpamBlocker\Modules\Captcha;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\Charitable\Packages\SpamBlocker\Modules\Captcha\GoogleReCAPTCHA' ) ) :

	/**
	 * HCaptcha module.
	 *
	 * @since 1.0.0
	 */
	class GoogleReCAPTCHA implements \Charitable\Packages\SpamBlocker\Modules\ModuleInterface {

		/**
		 * Class constructor.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			if ( $this->is_active() ) {
				$this->setup();
			}
		}

		/**
		 * Return whether the module is active.
		 *
		 * @since  1.0.0
		 *
		 * @return boolean
		 */
		public function is_active() {
			return 'google-recaptcha' === charitable_get_option( 'captcha_provider' )
				&& ! empty( $this->get_site_key() )
				&& ! empty( $this->get_secret_key() );
		}

		/**
		 * Get the module settings.
		 *
		 * @since  1.0.0
		 *
		 * @return array
		 */
		public function get_settings() {
			return array(
				'section_recaptcha'    => array(
					'title'    => __( 'Google reCAPTCHA Settings', 'charitable-spamblocker' ),
					'type'     => 'heading',
					'priority' => 120,
					'attrs'    => array(
						'data-trigger-key'   => 'charitable_settings[security][captcha_provider]',
						'data-trigger-value' => 'google-recaptcha',
					),
				),
				'recaptcha_site_key'   => array(
					'title'    => __( 'Google reCAPTCHA Site Key', 'charitable-spamblocker' ),
					'type'     => 'text',
					'class'    => 'wide',
					'help'     => __( 'Your reCAPTCHA "Site key" setting. Find this at <a href="https://www.google.com/recaptcha/admin" target="_blank">www.google.com/recaptcha/admin</a>.', 'charitable-spamblocker' ),
					'priority' => 124,
					'attrs'    => array(
						'data-trigger-key'   => 'charitable_settings[security][captcha_provider]',
						'data-trigger-value' => 'google-recaptcha',
					),
				),
				'recaptcha_secret_key' => array(
					'title'    => __( 'Google reCAPTCHA Secret Key', 'charitable-spamblocker' ),
					'type'     => 'text',
					'class'    => 'wide',
					'help'     => __( 'Your reCAPTCHA "Secret key" setting. Find this at <a href="https://www.google.com/recaptcha/admin" target="_blank">www.google.com/recaptcha/admin</a>.', 'charitable-spamblocker' ),
					'priority' => 128,
					'attrs'    => array(
						'data-trigger-key'   => 'charitable_settings[security][captcha_provider]',
						'data-trigger-value' => 'google-recaptcha',
					),
				),
			);
		}

		/**
		 * Get the sitekey.
		 *
		 * @since  1.0.0
		 *
		 * @return string
		 */
		public function get_site_key() {
			return charitable_get_option( 'recaptcha_site_key' );
		}

		/**
		 * Get the secret key.
		 *
		 * @since  1.0.0
		 *
		 * @return string
		 */
		public function get_secret_key() {
			return charitable_get_option( 'recaptcha_secret_key' );
		}

		/**
		 * Set up module hooks.
		 *
		 * @since  1.0.0
		 *
		 * @return void
		 */
		public function setup() {
			add_action( 'wp_enqueue_scripts', array( $this, 'add_scripts' ), 15 );
			add_action( 'charitable_form_after_fields', array( $this, 'add_invisible_div' ) );

			/**
			 * For the password retrieval, password reset, profile and registration
			 * forms, we check recaptcha before the regular form processor occurs.
			 *
			 * If the recaptcha check fails, we prevent further processing.
			 */
			add_action( 'charitable_retrieve_password', array( $this, 'check_recaptcha_before_form_processing' ), 1 );
			add_action( 'charitable_reset_password', array( $this, 'check_recaptcha_before_form_processing' ), 1 );
			add_action( 'charitable_update_profile', array( $this, 'check_recaptcha_before_form_processing' ), 1 );
			add_action( 'charitable_save_registration', array( $this, 'check_recaptcha_before_form_processing' ), 1 );

			/**
			 * For the donation form, validate recaptcha as part of the security check.
			 */
			add_filter( 'charitable_validate_donation_form_submission_security_check', array( $this, 'validate_recaptcha' ), 10, 2 );
		}


		/**
		 * Add reCAPTCHA script and our form submission handler.
		 *
		 * @since  1.0.0
		 *
		 * @return void
		 */
		public function add_scripts() {
			wp_register_script( 'charitable-recaptcha', \charitable_spamblocker()->get_path( 'assets', false ) . 'js/charitable-recaptcha.js', array( 'jquery' ) );
			wp_enqueue_script( 'charitable-recaptcha' );
			wp_localize_script(
				'charitable-recaptcha',
				'CHARITABLE_RECAPTCHA',
				array(
					'site_key'      => $this->get_site_key(),
					'error_message' => __( 'Your form submission failed because the captcha failed to be validated.', 'charitable-spamblocker' ),
				)
			);
		}

		/**
		 * Returns an array of forms that reCAPTCHA can be enabled for.
		 *
		 * @since  1.0.0
		 *
		 * @return array
		 */
		public function get_form_settings() {
			/**
			 * Returns an array of forms along with whether recaptcha
			 * is enabled for them. By default, all forms are enabled.
			 *
			 * @since 1.0.0
			 *
			 * @param array $forms All the supported forms in a key=>value array, where the value is either
			 *                     true (reCAPTCHA is enabled) or false (reCAPTCHA is disabled).
			 */
			return apply_filters(
				'charitable_recaptcha_forms',
				array(
					'donation_form'           => true,
					'donation_amount_form'    => false,
					'registration_form'       => true,
					'password_reset_form'     => true,
					'password_retrieval_form' => true,
					'profile_form'            => false,
					'campaign_form'           => true,
				)
			);
		}

		/**
		 * Return the current form key based on the class name.
		 *
		 * @since  1.0.0
		 *
		 * @param  Charitable_Form $form A form object.
		 * @return string|null Form key if it's a supported form. Null otherwise.
		 */
		public function get_current_form_from_class( \Charitable_Form $form ) {
			switch ( get_class( $form ) ) {
				case 'Charitable_Registration_Form':
					$form_key = 'registration_form';
					break;

				case 'Charitable_Profile_Form':
					$form_key = 'profile_form';
					break;

				case 'Charitable_Forgot_Password_Form':
					$form_key = 'password_retrieval_form';
					break;

				case 'Charitable_Reset_Password_Form':
					$form_key = 'password_reset_form';
					break;

				case 'Charitable_Donation_Form':
					$form_key = 'donation_form';
					break;

				case 'Charitable_Donation_Amount_Form':
					$form_key = 'donation_amount_form';
					break;

				case 'Charitable_Ambassadors_Campaign_Form':
					$form_key = 'campaign_form';
					break;

				default:
					$form_key = null;
			}

			return $form_key;
		}

		/**
		 * Return the form key based on the hook.
		 *
		 * @since  1.0.0
		 *
		 * @return string
		 */
		public function get_current_form_from_hook() {
			switch ( current_filter() ) {
				case 'charitable_save_registration':
					$form_key = 'registration_form';
					break;

				case 'charitable_update_profile':
					$form_key = 'profile_form';
					break;

				case 'charitable_retrieve_password':
					$form_key = 'password_retrieval_form';
					break;

				case 'charitable_reset_password':
					$form_key = 'password_reset_form';
					break;

				case 'charitable_save_campaign':
					$form_key = 'campaign_form';
					break;

				default:
					$form_key = null;
			}

			return $form_key;
		}

		/**
		 * Returns whether reCAPTCHA is enabled for the given form.
		 *
		 * @since  1.0.0
		 *
		 * @param  string|null $form_key The key of the form, or NULL if it's not a supported one.
		 * @return boolean
		 */
		public function is_enabled_for_form( $form_key ) {
			if ( is_null( $form_key ) ) {
				return false;
			}

			$forms = $this->get_form_settings();

			return $forms[ $form_key ];
		}

		/**
		 * Add script before the end of the form.
		 *
		 * @since  1.0.0
		 *
		 * @param  Charitable_Form $form Form object.
		 * @return void
		 */
		public function add_invisible_div( \Charitable_Form $form ) {
			/* Don't show captcha for logged in users. */
			if ( is_user_logged_in() && 'no' === charitable_get_option( 'captcha_logged_in', 'no' ) ) {
				return;
			}

			if ( $this->is_enabled_for_form( $this->get_current_form_from_class( $form ) ) ) {
				ob_start();
				?>
				<div class="charitable-recaptcha"></div><input type="hidden" name="charitable_grecaptcha_token" value="" />
				<script src="https://www.google.com/recaptcha/api.js?onload=charitable_reCAPTCHA_onload&render=explicit" async defer></script>
				<?php
				echo ob_get_clean();
			}
		}

		/**
		 * Check reCAPTCHA token validity before processing a form submission.
		 *
		 * If the reCAPTCHA check fails, form processing is blocked.
		 *
		 * @since  1.0.0
		 *
		 * @return void
		 */
		public function check_recaptcha_before_form_processing() {
			/* Don't show captcha for logged in users. */
			if ( is_user_logged_in() && 'no' === charitable_get_option( 'captcha_logged_in', 'no' ) ) {
				return;
			}

			$form_key = $this->get_current_form_from_hook();

			if ( $this->is_enabled_for_form( $form_key ) && ! $this->is_captcha_valid() ) {
				switch ( $form_key ) {
					case 'registration_form':
						remove_action( 'charitable_save_registration', array( 'Charitable_Registration_Form', 'save_registration' ) );
						break;

					case 'profile_form':
						remove_action( 'charitable_update_profile', array( 'Charitable_Profile_Form', 'update_profile' ) );
						break;

					case 'password_retrieval_form':
						remove_action( 'charitable_retrieve_password', array( 'Charitable_Forgot_Password_Form', 'retrieve_password' ) );
						break;

					case 'password_reset_form':
						remove_action( 'charitable_reset_password', array( 'Charitable_Reset_Password_Form', 'reset_password' ) );
						break;

					case 'campaign_form':
						remove_action( 'charitable_save_campaign', array( 'Charitable_Ambassadors_Campaign_Form', 'save_campaign' ) );
						break;
				}
			}
		}

		/**
		 * Validate the reCAPTCHA token.
		 *
		 * @since  1.0.0
		 *
		 * @param  boolean                  $ret  The result to be returned. True or False.
		 * @param  Charitable_Donation_Form $form The donation form object.
		 * @return boolean
		 */
		public function validate_recaptcha( $ret, \Charitable_Donation_Form $form ) {
			if ( ! $ret ) {
				return $ret;
			}

			/* Don't show captcha for logged in users. */
			if ( is_user_logged_in() && 'no' === charitable_get_option( 'captcha_logged_in', 'no' ) ) {
				return $ret;
			}

			if ( ! $this->is_enabled_for_form( $this->get_current_form_from_class( $form ) ) ) {
				return $ret;
			}

			return $this->is_captcha_valid();
		}

		/**
		 * Returns whether the captcha is valid.
		 *
		 * @since  1.0.0
		 *
		 * @return boolean
		 */
		public function is_captcha_valid() {
			if ( ! array_key_exists( 'charitable_grecaptcha_token', $_POST ) ) {
				charitable_get_notices()->add_error( __( 'Missing captcha token.', 'charitable-spamblocker' ) );
				return false;
			}

			$response = wp_remote_post(
				'https://www.google.com/recaptcha/api/siteverify',
				array(
					'body' => array(
						'secret'   => charitable_get_option( 'recaptcha_secret_key' ),
						'response' => $_POST['charitable_grecaptcha_token'],
						'remoteip' => $_SERVER['REMOTE_ADDR'],
					),
				)
			);

			if ( is_wp_error( $response ) ) {
				charitable_get_notices()->add_error( __( 'Failed to verify captcha.', 'charitable-spamblocker' ) );
				return false;
			}

			$result = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( ! $result['success'] ) {
				charitable_get_notices()->add_error( __( 'Captcha validation failed.', 'charitable-spamblocker' ) );
			}

			return $result['success'];
		}
	}

endif;
