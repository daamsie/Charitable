<?php
/**
 * Payment Method abstract model
 *
 * @version     x.x.x
 * @package     Charitable/Classes/Charitable_Payment_Method
 * @author      Eric Daams
 * @copyright   Copyright (c) 2021, Studio 164a
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_Payment_Method' ) ) :

	/**
	 * Charitable_Payment_Method
	 *
	 * @abstract
	 * @since   x.x.x
	 */
	class Charitable_Payment_Method {

		/**
		 * @var     string The payment method's key
		 */
		protected $key = '';

		/**
		 * @var     string Label for the payment method
		 * @since   x.x.x
		 */
		protected $label;

		/**
		 * @var     array An icon for this payment method
		 * @since   x.x.x
		 */
		protected $icon;

		/**
		 * An array of supported currencies. Leave blank to support all currencies
		 *
		 * @var     string[]
		 * @since   x.x.x
		 */
		protected $currencies = array();


		/**
		 * Initialize the object
		 *
		 * @since x.x.x
		 */
		public function __construct( $key, $label, $icon, array $currencies = array() ) {
			$this->key         = $key;
			$this->label       = $label;
			$this->icon        = $icon;
			$this->$currencies = $currencies;
		}

		/**
		 * Return the payment method key.
		 *
		 * @since   x.x.x
		 *
		 * @return  string
		 */
		public function get_key() {
			return $this->key;
		}

		/**
		 * Return the payment method label.
		 *
		 * @since   x.x.x
		 *
		 * @return  string
		 */
		public function get_label() {
			return $this->label;
		}

		/**
		 * Return the payment method icon.
		 *
		 * @since   x.x.x
		 *
		 * @return  string
		 */
		public function get_icon() {
			return $this->icon;
		}

		/**
		 * Return the payment method currencies.
		 *
		 * @since   x.x.x
		 *
		 * @return  string
		 */
		public function get_currencies() {
			return $this->currencies;
		}


	}

endif;
