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
		 * @var     bool Is this payment method enabled?
		 */
		protected $enabled = true;

		/**
		 * @var     string An SVG icon for this payment method
		 * @since   x.x.x
		 */
		protected $icon;

		/**
		 * An array of supported currencies. An empty array will support all currencies
		 *
		 * @var     string[]
		 * @since   x.x.x
		 */
		public $currencies = array();

		/**
		 * Initialize the object
		 *
		 * @since x.x.x
		 */
		public function __construct( $key, $label, $icon, array $currencies = array() ) {
			$this->key        = $key;
			$this->label      = $label;
			$this->icon       = $icon;
			$this->currencies = $currencies;
		}

		/**
		 * Enable the payment method.
		 *
		 * @since   x.x.x
		 *
		 * @return  void
		 */
		public function enable() {
			$this->enabled = true;
		}

		/**
		 * Disable the payment method.
		 *
		 * @since   x.x.x
		 *
		 * @return  void
		 */
		public function disable() {
			$this->enabled = false;
		}

		/**
		 * Is the payment method enabled?
		 *
		 * @since   x.x.x
		 *
		 * @return  bool
		 */
		public function is_enabled() {
			return $this->enabled;
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
