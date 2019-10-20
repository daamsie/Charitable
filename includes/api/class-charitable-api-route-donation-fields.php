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
						'section'  => array(
							'default'           => '',
							'validate_callback' => array( $this, 'validate_section_arg' ),
						),
						'orderby'  => array(
							'default'           => 'priority',
							'validate_callback' => array( $this, 'validate_orderby_arg' ),
						),
					),
				)
			);

			register_rest_route(
				$this->namespace,
				'/' . $this->base . '/sections',
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_donation_form_sections' ),
					'permission_callback' => '__return_true',
					'args'                => array(
						'campaign' => array(
							'default'           => '',
							'validate_callback' => array( $this, 'validate_campaign_arg' ),
						),
					),
				)
			);
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

			if ( 'priority' == $this->request->get_param( 'orderby' ) ) {
				uasort( $fields, 'charitable_priority_sort' );;
			}

			return rest_ensure_response(
				array_map(
					array( $this, 'get_parsed_donation_field' ),
					$fields,
					array_keys( $fields )
				)
			);
		}

		/**
		 * Return a response with all registered donation form sections.
		 *
		 * @since  1.7.0
		 *
		 * @param  WP_REST_Request $request The API request object.
		 * @return WP_REST_Response|mixed If response generated an error, WP_Error, if response
		 *                                is already an instance, WP_HTTP_Response, otherwise
		 *                                returns a new WP_REST_Response instance.
		 */
		public function get_donation_form_sections( $request ) {
			$this->request = $request;

			$sections = charitable()->donation_fields()->get_sections( 'public' );

			return rest_ensure_response(
				array_map(
					array( $this, 'get_parsed_sections' ),
					$sections,
					array_keys( $sections )
				)
			);
		}

		/**
		 * Return the output for a donation form field.
		 *
		 * @since  1.7.0
		 *
		 * @param  Charitable_Donation_Field $field Donation field.
		 * @param  string                    $key   The key of the field.
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

			return ob_get_clean();
		}

		/**
		 * Return the output for a donation form section.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $section Section label.
		 * @param  string $key     Section key.
		 * @return array
		 */
		public function get_parsed_sections( $section, $key ) {
			return array(
				'label' => $section,
				'key'   => $key,
			);
		}

		/**
		 * Parse donation fields.
		 *
		 * @since  1.7.0
		 *
		 * @param  Charitable_Donation_Field $field Donation field.
		 * @param  string                    $key   The key of the field.
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

		/**
		 * Validate the 'section' argument.
		 *
		 * @since  1.7.0
		 *
		 * @param  mixed $param The parameter value.
		 * @return boolean
		 */
		public function validate_section_arg( $param ) {
			return '' == $param || array_key_exists( $param, charitable()->donation_fields()->get_sections( 'public' ) );
		}

		/**
		 * Validate the 'orderby' argument.
		 *
		 * @since  1.7.0
		 *
		 * @param  mixed $param The parameter value.
		 * @return boolean
		 */
		public function validate_orderby_arg( $param ) {
			return in_array( $param, array( 'priority', 'registered' ) );
		}
	}

endif;
