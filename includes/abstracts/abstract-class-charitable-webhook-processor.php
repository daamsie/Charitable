<?php
/**
 * Abstract class responsible for processing incoming webhooks.
 *
 * @package   Charitable/Classes/Charitable_Webhook_Processor
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

if ( ! class_exists( 'Charitable_Webhook_Processor' ) ) :

	/**
	 * Charitable_Webhook_Processor
	 *
	 * @since 1.7.0
	 */
	abstract class Charitable_Webhook_Processor {

		/**
		 * The interpreter object received from the source integration.
		 *
		 * @since 1.7.0
		 *
		 * @var   Charitable_Webhook_Interpreter
		 */
		protected $interpreter;

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 */
		public function __construct( $interpreter ) {
			$this->interpreter = $interpreter;
		}

		/**
		 * Process the webhook event.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		abstract public function process();
	}

endif;
