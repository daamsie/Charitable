<?php
/**
 * Sets up the /donation-fields/ API route.
 *
 * @package   Charitable/Classes/Charitable_API_Route_Donation_Fields
 * @author    Eric Daams
 * @copyright Copyright (c) 2019, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.6.0
 * @version   1.6.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_API_Route_Donation_Fields' ) ) :

	/**
	 * Charitable_API_Route_Donation_Fields
	 *
	 * @since 1.6.0
	 */
	class Charitable_API_Route_Donation_Fields extends Charitable_API_Route {

		/**
		 * Route base.
		 *
		 * @since 1.6.0
		 *
		 * @var   string
		 */
		protected $base;

		/**
		 * Set up class instance.
		 *
		 * @since  1.6.0
		 *
		 * @return void
		 */
		public function __construct() {
			parent::__construct();

			$this->base = 'donation-fields';
		}

		/**
		 * Register the routes for this controller.
		 *
		 * @since 1.6.0
		 */
		public function register_routes() {
			register_rest_route(
				$this->namespace,
				'/' . $this->base,
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_donation_fields' ),
					'permission_callback' => '__return_true',
					'args'                => array(
						'campaign' => array(
							'default'           => '',
							'validate_callback' => array( $this, 'validate_campaign_arg' ),
						),
					),
				)
			);

			// register_rest_route(
			// 	$this->namespace,
			// 	'/' . $this->base . '/donations/',
			// 	array(
			// 		'methods'             => WP_REST_Server::READABLE,
			// 		'callback'            => array( $this, 'get_donations_report' ),
			// 		'permission_callback' => array( $this, 'user_can_get_charitable_reports' ),
			// 		'args'                => array(
			// 			'campaigns' => array(
			// 				'default'           => 'all',
			// 				'validate_callback' => array( $this, 'validate_campaigns_arg' ),
			// 				'sanitize_callback' => array( $this, 'sanitize_campaigns_arg' ),
			// 			),
			// 		),
			// 	)
			// );
		}

		/**
		 * Return a response with all registered donation form fields.
		 *
		 * @since  1.7.0
		 *
		 * @param  WP_REST_Request $request The API request object.
		 * @return WP_REST_Response|mixed If response generated an error, WP_Error, if response
		 *                                is already an instance, WP_HTTP_Response, otherwise
		 *                                returns a new WP_REST_Response instance.
		 */
		public function get_donation_fields( $request ) {
			$this->request = $request;

			$fields = charitable()->donation_fields()->get_donation_form_fields();

			return rest_ensure_response(
				array_map(
					array( $this, 'get_parsed_donation_field' ),
					$fields,
					array_keys( $fields )
				)
			);
		}

		/**
		 * Return the output for a donation form field.
		 *
		 * @since  1.7.0
		 *
		 * @return string|null
		 */
		public function get_donation_form_field_output( $field, $key ) {
			if ( ! isset( $this->form ) ) {
				$campaign_id = $this->request->get_param( 'campaign' );

				if ( '' == $campaign_id ) {
					return null;
				}

				$this->form = new Charitable_Donation_Form( charitable_get_campaign( $campaign_id ) );
			}

			ob_start();

			$this->form->view()->render_field( $field, $key );

			$t = ob_get_clean();
			error_log( var_export( $t, true ) );
			return $t;
		}

		/**
		 * Parse donation fields.
		 *
		 * @since  1.7.0
		 *
		 * @param  Charitable_Donation_Field $field Donation field.
		 * @return array
		 */
		protected function get_parsed_donation_field( $field, $key ) {
			$form_field = $field->donation_form;

			unset(
				$form_field['data_type']
			);

			$form_field['template'] = $this->get_donation_form_field_output( $form_field, $key );

			return $form_field;
		}

		/**
		 * Return a response with the donations report.
		 *
		 * @since  1.6.0
		 *
		 * @param  WP_REST_Request $request The API request object.
		 * @return WP_REST_Response|mixed If response generated an error, WP_Error, if response
		 *                                is already an instance, WP_HTTP_Response, otherwise
		 *                                returns a new WP_REST_Response instance.
		 */
		public function get_donations_report( $request ) {
			$report = new Charitable_Donation_Report( array(
				'campaigns' => $request->get_param( 'campaigns' ),
			) );

			return rest_ensure_response( $report->get_reports() );
		}

		/**
		 * Validate the 'campaign' argument.
		 *
		 * @since  1.7.0
		 *
		 * @param  mixed $param The parameter value.
		 * @return boolean
		 */
		public function validate_campaign_arg( $param ) {
			return '' == $param || is_numeric( $param );
		}
	}

endif;
