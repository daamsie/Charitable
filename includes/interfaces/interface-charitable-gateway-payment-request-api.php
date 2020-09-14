<?php
/**
 * Interface to be implemented by gateways.
 *
 * @package   Charitable/Classes/Charitable_Gateway_Payment_Request_API_Interface
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

if ( ! interface_exists( 'Charitable_Gateway_Payment_Request_API_Interface' ) ) :
	/**
	 * Charitable_Gateway_Payment_Request_Interface
	 *
	 * @since 1.7.0
	 */
	interface Charitable_Gateway_Payment_Request_API_Interface {
		/**
		 * Get the payment request object.
		 *
		 * @since  1.7.0
		 *
		 * @param  Charitable_Donation $donation The donation to make a payment request for.
		 * @return Charitable_Gateway_Payment_Request_Interface
		 */
		public function get_payment_request( Charitable_Donation $donation );
	}

endif;
