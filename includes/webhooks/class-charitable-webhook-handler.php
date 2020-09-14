<?php
/**
 * Class responsible for listening to incoming webhooks and handling the response.
 *
 * @package   Charitable/Classes/Charitable_Webhook_Handler
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

if ( ! class_exists( 'Charitable_Webhook_Handler' ) ) :

	/**
	 * Charitable_Webhook_Handler
	 *
	 * @since 1.7.0
	 */
	class Charitable_Webhook_Handler {

		/**
		 * The source of the webhook.
		 *
		 * @since 1.7.0
		 *
		 * @var   string
		 */
		private $source;

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 *
		 * @param string $source The source of the webhook.
		 */
		public function __construct( $source ) {
			$this->source = $source;
		}

		/**
		 * Return the handler class for the source.
		 *
		 * @since  1.7.0
		 *
		 * @return string
		 */
		public function get_interpreter_class() {
			$class = 'Charitable_' . ucfirst( strtolower( $this->source ) ) . '_Webhook_Interpreter';

			/**
			 * Filter the webhook interpreter class name for a particular source.
			 *
			 * @since 1.7.0
			 *
			 * @param string $class The default class name.
			 */
			return apply_filters( 'charitable_webhook_interpreter_class_' . strtolower( $this->source ), $class );
		}

		/**
		 * Checks whether there is an interpreter for the given source.
		 *
		 * @since  1.7.0
		 *
		 * @return boolean
		 */
		public function has_interpreter() {
			$class = $this->get_interpreter_class();
			return class_exists( $class ) && $class instanceof Charitable_Webhook_Interpreter_Interface;
		}

		/**
		 * Handle the incoming webhook.
		 *
		 * @since  1.7.0
		 *
		 * @return false|void
		 */
		public function handle() {
			/**
			 * Allow extension to hook into the handle a gateway's IPN.
			 *
			 * @since 1.0.0
			 */
			do_action( 'charitable_process_ipn_' . $this->source );
			error_log( var_export( __METHOD__, true ) );
			if ( ! $this->has_interpreter() ) {
				return false;
			}

			$interpreter = new $this->get_interpreter_class();
			error_log( var_export( $interpreter, true ) );
			if ( ! $interpreter->is_valid_webhook() ) {
				status_header( 500 );
				die( __( 'Invalid webhook event.', 'charitable' ) );
			}

			/* If the source interpreter has its own processor, delegate to that. */
			if ( $interpreter->has_processor() ) {
				$processor = $interpreter->get_processor();
			} else {
				$event_subject = $interpreter->get_event_subject();

				switch ( $event_subject ) {
					case 'donation':
						$donations_interpreter = $interpreter->get_donations_interpreter();

						if ( $donations_interpreter ) {
							$processor = new Charitable_Webhook_Processor_Donations( $donations_interpreter );
						}

						break;

					default:
						/**
						 * Return a webhook processor for the given event subject.
						 *
						 * @since 1.7.0
						 *
						 * @param false|Charitable_Webhook_Processor       $processor   The processor object, or false if
						 *                                                              none exists for the event subject.
						 * @param Charitable_Webhook_Interpreter_Interface $interpreter The interpreter object.
						 */
						$processor = apply_filters( 'charitable_webhook_processor_' . $event_subject, false, $interpreter );
				}
			}

			if ( ! $processor ) {
				return false;
			}

			$processor->process();

			/* Set the status header. */
			status_header( $processor->response_status );

			/* Die with a response message. */
			die( $processor->response_message );
		}
	}

endif;
