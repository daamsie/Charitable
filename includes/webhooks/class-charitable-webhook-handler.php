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
			return 'Charitable_' . ucfirst( strtolower( $this->source ) ) . '_Webhook_Interpreter';
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

			return class_exists( $class ) && in_array( 'Charitable_Webhook_Interpreter_Interface', class_implements( $class ) );
		}

		/**
		 * Return the interpreter object.
		 *
		 * @since  1.7.0
		 *
		 * @return Charitable_Webhook_Interpreter_Interface
		 */
		public function get_interpreter() {
			$class = $this->get_interpreter_class();

			return new $class;
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

			if ( ! $this->has_interpreter() ) {
				return false;
			}

			$interpreter = $this->get_interpreter();

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

			error_log( var_export( $processor, true ) );
			error_log( var_export( $processor->response_status, true ) );
			error_log( var_export( $processor->response_message, true ) );

			if ( ! $processor ) {
				status_header( 500 );
				die(
					sprintf(
						/* translators: %s: source of webhook */
						__( 'Missing webhook processor for %s.', 'charitable' ),
						$source
					)
				);
			}

			/* Process the webhook. */
			$processor->process();

			/* Set the status header. */
			status_header( $processor->response_status );

			/* Die with a response message. */
			die( $processor->response_message );
		}
	}

endif;
