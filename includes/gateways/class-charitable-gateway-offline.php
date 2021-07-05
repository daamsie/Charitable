<?php
/**
 * Offline Payment Gateway
 *
 * @version     1.0.0
 * @package     Charitable/Classes/Charitable_Gateway_Offline
 * @author      Eric Daams
 * @copyright   Copyright (c) 2021, Studio 164a
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_Gateway_Offline' ) ) :

	/**
	 * Offline Payment Gateway
	 *
	 * @since   1.0.0
	 */
	class Charitable_Gateway_Offline extends Charitable_Gateway {

		/**
		 * Gateway ID.
		 */
		const ID = 'offline';

		/**
		 * Whether the gateway supports Charitable 1.3.0.
		 *
		 * @var     boolean
		 * @since   1.3.0
		 */
		protected $supports_130 = false;

		/**
		 * Instantiate the gateway class, defining its key values.
		 *
		 * @since   1.0.0
		 */
		public function __construct() {
			$this->name = apply_filters( 'charitable_gateway_offline_name', __( 'Offline', 'charitable' ) );

			$this->defaults = array(
				'label'        => __( 'Offline Donation', 'charitable' ),
				'instructions' => __( 'Thank you for your donation. We will contact you shortly for payment.', 'charitable' ),
			);

			$this->payment_methods = $this->create_payment_methods();

			$this->supports = array(
				'recurring',
				'1.3.0',
			);
		}

		/**
		 * Creates an array of payment methods to enable.
		 *
		 * @since x.x.x
		 */
		private function create_payment_methods() {
			$key   = 'offline';
			$label = __( 'Offline Donation', 'charitable' );
			$icon  = apply_filters(
				'charitable_gateway_offline_icon',
				'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			    <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 14.25H17C16.4033 14.25 15.831 14.0129 15.409 13.591C14.9871 13.169 14.75 12.5967 14.75 12C14.75 11.4033 14.9871 10.831 15.409 10.409C15.831 9.98705 16.4033 9.75 17 9.75H20V14.25ZM20 8H17C15.9391 8 14.9217 8.42143 14.1716 9.17157C13.4214 9.92172 13 10.9391 13 12C13 13.0609 13.4214 14.0783 14.1716 14.8284C14.9217 15.5786 15.9391 16 17 16H20V17C19.9997 17.2651 19.8943 17.5193 19.7068 17.7068C19.5193 17.8943 19.2651 17.9997 19 18H5C4.73487 17.9997 4.48069 17.8943 4.29321 17.7068C4.10574 17.5193 4.00029 17.2651 4 17V7C4.00029 6.73487 4.10574 6.48069 4.29321 6.29321C4.48069 6.10574 4.73487 6.00029 5 6H19C19.2651 6.00029 19.5193 6.10574 19.7068 6.29321C19.8943 6.48069 19.9997 6.73487 20 7V8ZM16 12C16 12.1978 16.0586 12.3911 16.1685 12.5556C16.2784 12.72 16.4346 12.8482 16.6173 12.9239C16.8 12.9996 17.0011 13.0194 17.1951 12.9808C17.3891 12.9422 17.5673 12.847 17.7071 12.7071C17.847 12.5673 17.9422 12.3891 17.9808 12.1951C18.0194 12.0011 17.9996 11.8 17.9239 11.6173C17.8482 11.4346 17.72 11.2784 17.5556 11.1685C17.3911 11.0586 17.1978 11 17 11C16.7348 11 16.4804 11.1054 16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12Z" fill="black"/>
		    </svg>'
			);
			return array( new Charitable_Payment_Method( 'offline', $key, $label, $icon ) );
		}

		/**
		 * Register gateway settings.
		 *
		 * @since   1.0.0
		 *
		 * @param   array $settings
		 * @return  array
		 */
		public function gateway_settings( $settings ) {
			$settings['instructions'] = array(
				'type'     => 'textarea',
				'title'    => __( 'Instructions', 'charitable' ),
				'help'     => __( 'These are the instructions you provide to donors after they make a donation.', 'charitable' ),
				'priority' => 6,
				'default'  => $this->defaults['instructions'],
			);

			return $settings;
		}

		/**
		 * Returns the current gateway's ID.
		 *
		 * @since   1.0.3
		 *
		 * @return  string
		 */
		public static function get_gateway_id() {
			return self::ID;
		}

	}

endif;
