<?php
/**
 * Interface to be implemented by gateways.
 *
 * @package   Charitable/Classes/Charitable_Gateway_Payment_Request_Interface
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

if ( ! interface_exists( 'Charitable_Gateway_Payment_Request_Interface' ) ) :

	/**
	 * Charitable_Gateway_Payment_Request_Interface
	 *
	 * @since 1.7.0
	 */
	interface Charitable_Gateway_Payment_Request_Interface {
		/**
		 * Class instantiation.
		 *
		 * @since 1.7.0
		 *
		 * @param Charitable_Donation_Data_Mapper $data The data mapper object.
		 */
		public function __construct( Charitable_Donation_Data_Mapper $data );

		/**
		 * Prepare a request.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean Whether the request was successfully prepared.
		 */
		public function prepare_request();

		/**
		 * Make a request.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean Whether the request was successfully made.
		 */
		public function make_request();

		/**
		 * Return a response object.
		 *
		 * @since  1.7.0
		 *
		 * @return Charitable_Gateway_Donation_Response
		 */
		public function get_response();
	}

endif;
