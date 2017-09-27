<?php
/**
 * Class that models the Email Verification email.
 *
 * @version   1.5.0
 * @package   Charitable/Classes/Charitable_Email_Email_Verification
 * @author    Eric Daams
 * @copyright Copyright (c) 2017, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! class_exists( 'Charitable_Email_Email_Verification' ) ) :

	/**
	 * Password Reset Email
	 *
	 * @since   1.5.0
	 */
	class Charitable_Email_Email_Verification extends Charitable_Email {

		/* @var string */
		const ID = 'email_verification';

		/**
		 * Whether the email allows you to define the email recipients.
		 *
		 * @since 1.5.0
		 *
		 * @var   boolean
		 */
		protected $has_recipient_field = false;

		/**
		 * The Email Verification email is required.
		 *
		 * @since 1.5.0
		 *
		 * @var   boolean
		 */
		protected $required = true;

		/**
		 * The user data.
		 *
		 * @since 1.5.0
		 *
		 * @var   WP_User
		 */
		protected $user;

		/**
		 * Array of supported object types (campaigns, donations, donors, etc).
		 *		 
		 * @since 1.5.0
		 *
		 * @var   string[]
		 */
		protected $object_types = array( 'user' );

		/**
		 * The confirmation link.
		 *
		 * @since 1.5.0
		 *
		 * @var   string|WP_Error
		 */
		protected $confirmation_link;

		/**
		 * Instantiate the email class, defining its key values.
		 *
		 * @since 1.5.0
		 *
		 * @param mixed[] $objects Array containing a user object,
		 *                         or nothing if this is a preview.
		 */
		public function __construct( $objects = array() ) {
			parent::__construct( $objects );

			/**
			 * Filter the default email name.
			 *
			 * @since 1.5.0
			 *
			 * @param string $name The email name.
			 */
			$this->name = apply_filters( 'charitable_email_email_verification_name', __( 'User: Email Verification', 'charitable' ) );

			$this->user = array_key_exists( 'user', $objects ) ? $objects['user'] : false;
		}

		/**
		 * Returns the current email's ID.
		 *
		 * @since  1.5.0
		 *
		 * @return string
		 */
		public static function get_email_id() {
			return self::ID;
		}	

		/**
		* Return the recipient for the email.
		*
		* @since  1.5.0
		*
		* @return string
		*/
		public function get_recipient() {
			return $this->has_valid_user() ? $this->user->user_email : '';
		}

		/**
		 * Return the custom email fields for this email.
		 *
		 * @since  1.5.0
		 *
		 * @return array
		 */
		public function email_fields() {
			$fields = array(
				'confirmation_link' => array(
					'description' => __( 'The link the user needs to verify their email address.', 'charitable' ),
					'preview'     => add_query_arg( array(
						'key'   => '123123123',
						'login' => 'adam123',
					), charitable_get_permalink( 'email_verification' ) ),
				),
			);

			if ( $this->has_valid_user() ) {
				$fields = array_merge_recursive( $fields, array(
					'confirmation_link' => array( 'callback' => array( $this, 'get_confirmation_link' ) ),
				) );
			}

			return $fields;
		}

		/**
		 * Return the reset link.
		 *
		 * @since  1.5.0
		 *
		 * @return string|WP_Error If the reset key could not be generated, an error is returned.
		 */
		public function get_confirmation_link() {
			if ( ! isset( $this->confirmation_link ) ) {
				$key = get_password_reset_key( $this->user );

				if ( is_wp_error( $key ) ) {
					return $key;
				}

				$this->confirmation_link = esc_url_raw( add_query_arg( array(
					'key'   => $key,
					'login' => rawurlencode( $this->user->user_login ),
				), charitable_get_permalink( 'email_verification' ) ) );
			}

			return $this->confirmation_link;
		}

		/**
		 * Return the default subject line for the email.
		 *
		 * @since  1.5.0
		 *
		 * @return string
		 */
		protected function get_default_subject() {
			return __( 'Verify your email for [charitable_email show=site_name]', 'charitable' );
		}

		/**
		 * Return the default headline for the email.
		 *
		 * @since  1.5.0
		 *
		 * @return string
		 */
		protected function get_default_headline() {
			/**
			 * Filter the default email headline.
			 *
			 * @since 1.5.0
			 *
			 * @param string                              $headline The default headline.
			 * @param Charitable_Email_Email_Verification $email    This instance of `Charitable_Email_Email_Verification`.
			 */
			return apply_filters( 'charitable_email_email_verification_default_headline', __( 'Verify your email address', 'charitable' ), $this );
		}

		/**
		 * Return the default body for the email.
		 *
		 * @since  1.5.0
		 *
		 * @return string
		 */
		protected function get_default_body() {
			ob_start();
?>
<p><?php _e( 'Welcome to [charitable_email show=site_name]', 'charitable' ) ?></p>
<p><?php _e( 'To complete your registration, please confirm your email address by clicking the link below:', 'charitable' ) ?></p>
<p><a href="[charitable_email show=confirmation_link]">[charitable_email show=confirmation_link]</a></p>
<?php
			/**
			 * Filter the default email body.
			 *
			 * @since 1.5.0
			 *
			 * @param string                              $body  The default body.
			 * @param Charitable_Email_Email_Verification $email This instance of `Charitable_Email_Email_Verification`.
			 */
			return apply_filters( 'charitable_email_email_verification_default_body', ob_get_clean(), $this );
		}

		/**
		 * Check whether a user is set for the object instance.
		 *
		 * @since  1.5.0
		 *
		 * @return boolean
		 */
		protected function has_valid_user() {
			return isset( $this->user ) && is_a( $this->user, 'WP_User' );
		}
	}

endif;