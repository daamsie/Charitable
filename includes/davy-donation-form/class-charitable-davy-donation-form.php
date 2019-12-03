<?php
/**
 * Integrate Charitable with the Davy donation form block.
 *
 * @package   Charitable/Classes/Charitable_Davy_Donation_Form
 * @author    Eric Daams
 * @copyright Copyright (c) 2019, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_Davy_Donation_Form' ) ) :

	/**
	 * Charitable_Davy_Donation_Form
	 *
	 * @since 1.7.0
	 */
	class Charitable_Davy_Donation_Form {

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 */
		public function __construct() {
			add_filter( 'davy_form_fields', array( $this, 'get_davy_form_fields' ) );
			add_filter( 'davy_form_sections', array( $this, 'get_davy_form_sections' ) );
		}

		/**
		 * Add Charitable's fields to the Davy donation form.
		 *
		 * @since  1.7.0
		 *
		 * @return array
		 */
		public function get_davy_form_fields() {
			$f= array_values(
				array_map( array( $this, 'get_davy_form_field' ), charitable()->donation_fields()->get_donation_form_fields() )
			);
			// echo '<pre>';
			// var_dump( $f );
			// echo '</pre>';
			// die;

			return $f;
		}

		/**
		 * Use Charitable's donation form sections in the Davy donation form.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $davy_sections The sections added by Davy.
		 * @return array
		 */
		public function get_davy_form_sections( $davy_sections ) {
			$sections = charitable()->donation_fields()->get_sections( 'public' );

			return array_values(
				array_merge(
					[ $davy_sections[0] ],
					array_map(
						array( $this, 'get_davy_form_section' ),
						array_keys( $sections ),
						$sections
					)
				)
			);
		}

		/**
		 * Return a Charitable form field, with the arguments accepted by Davy.
		 *
		 * @since  1.7.0
		 *
		 * @param  Charitable_Donation_Field $field The Charitable field.
		 * @return array
		 */
		public function get_davy_form_field( $field ) {
			$form_field        = $field->donation_form;
			$form_field['key'] = $field->field;

			if ( array_key_exists( 'options', $form_field ) ) {
				$options = [];

				foreach ( $form_field['options'] as $value => $label ) {
					$options[] = [
						'value' => $value,
						'label' => $label,
					];
				}

				$form_field['options'] = $options;
			}

			return $form_field;
		}

		/**
		 * Return a form section with the arguments accepted by Davy.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $key   The section key.
		 * @param  string $label The section label.
		 * @return array
		 */
		public function get_davy_form_section( $key, $label ) {
			$is_default = charitable()->donation_fields()->get_default_section( 'public' ) == $key;

			return [
				'key'             => $key,
				'label'           => $label,
				'default_section' => $is_default,
			];
		}
	}

endif;
