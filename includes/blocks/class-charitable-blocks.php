<?php
/**
 * Integrate Charitable into the Gutenberg post editor experience.
 *
 * @package   Charitable/Classes/Charitable_Blocks
 * @author    Eric Daams
 * @copyright Copyright (c) 2018, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_Blocks' ) ) :

	/**
	 * Charitable_Blocks
	 *
	 * @since 1.7.0
	 */
	class Charitable_Blocks {

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 */
		public function __construct() {
			add_filter( 'charitable_default_campaign_fields', array( $this, 'change_campaign_fields_settings' ) );
			add_filter( 'charitable_default_campaign_sections', array( $this, 'add_extra_campaign_settings_sections' ) );

			$this->register_blocks();
		}

		/**
		 * Register Gutenberg blocks.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public function register_blocks() {
			$highlight_colour = charitable_get_highlight_colour();

			// register_block_type(
			// 	'charitable/donation-form',
			// 	array(
			// 		'editor_script'   => 'charitable-blocks',
			// 		'attributes'      => array(
			// 			'campaign'         => array(
			// 				'type'    => 'number',
			// 				'default' => 0,
			// 			),
			// 			'displayMode'      => array(
			// 				'type'    => 'string',
			// 				'default' => 'form',
			// 			),
			// 			'buttonOpensModal' => array(
			// 				'type'    => 'boolean',
			// 				'default' => true,
			// 			),
			// 			'buttonHasAmount'  => array(
			// 				'type'    => 'boolean',
			// 				'default' => false,
			// 			),
			// 			'buttonSize'       => array(
			// 				'type'    => 'string',
			// 				'default' => 'small',
			// 			),
			// 			'highlightColour'  => array(
			// 				'type'    => 'string',
			// 				'default' => charitable_get_highlight_colour(),
			// 			),
			// 			'buttonText'       => array(
			// 				'type'    => 'string',
			// 				'default' => __( 'Donate', 'charitable' ),
			// 			),
			// 		),
			// 		'render_callback' => array( $this, 'render_donation_form' ),
			// 	)
			// );

			// register_block_type( 'charitable/donors', array(
			// 	'editor_script' => 'charitable-blocks',
			// 	'attributes' => array(
			// 		'number' => array(
			// 			'type'    => 'number',
			// 			'default' => 10,
			// 		),
			// 		'campaign' => array(
			// 			'type' => 'string',
			// 		),
			// 		'orderBy' => array(
			// 			'type'    => 'string',
			// 			'default' => 'recent',
			// 		),
			// 		'distinctDonors' => array(
			// 			'type'    => 'boolean',
			// 			'default' => false,
			// 		),
			// 		'orientation' => array(
			// 			'type'    => 'string',
			// 			'default' => 'horizontal',
			// 		),
			// 		'displayDonorAmount' => array(
			// 			'type'    => 'boolean',
			// 			'default' => true,
			// 		),
			// 		'displayDonorAvatar' => array(
			// 			'type'    => 'boolean',
			// 			'default' => true,
			// 		),
			// 		'displayDonorName' => array(
			// 			'type'    => 'boolean',
			// 			'default' => true,
			// 		),
			// 		'displayDonorLocation' => array(
			// 			'type'    => 'boolean',
			// 			'default' => false,
			// 		),
			// 	),
			// 	'render_callback' => array( $this, 'render_donors' ),
			// ) );

			register_block_type(
				'charitable/campaigns',
				array(
					'editor_script'   => 'charitable-blocks',
					'attributes'      => array(
						'categories'         => array(
							'type'    => 'array',
							'default' => array(),
							'items'   => array(
								'type' => 'string',
							),
						),
						'includeInactive'    => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'campaigns'          => array(
							'type'    => 'array',
							'default' => array(),
							'items'   => array(
								'type' => 'integer',
							),
						),
						'campaignsToExclude' => array(
							'type'    => 'array',
							'default' => array(),
							'items'   => array(
								'type' => 'integer',
							),
						),
						'creator'            => array(
							'type'    => 'string',
							'default' => '',
						),
						'order'              => array(
							'type'    => 'string',
							'default' => 'DESC',
						),
						'orderBy'            => array(
							'type'    => 'string',
							'default' => 'post_date',
						),
						'number'             => array(
							'type'    => 'number',
							'default' => 10,
						),
						'columns'            => array(
							'type'    => 'number',
							'default' => 2,
						),
						'masonryLayout'      => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'responsiveLayout'   => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showDescription'    => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showProgressBar'    => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showAmountDonated'  => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showImage'      		 => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'progressBarStyle'   => array(
							'type'		=> 'string',
							'default'	=> 'bar',
						),
						'imageSize'      		 => array(
							'type'    => 'string',
							'default' => 'medium',
						),
						'editMode'           => array(
							'type'    => 'boolean',
							'default' => false,
						),
					),
					'render_callback' => array( $this, 'render_campaigns' ),
				)
			);

			register_block_type(
				'charitable/campaign-block-container',
				array(
					'editor_script' => 'charitable-blocks',
					'attributes'    => array(
						'backgroundColour' => array(
							'type'    => 'string',
							'default' => 'rgba(255, 255, 255, 0.01)',
						),
						'blockPadding'     => array(
							'type'    => 'number',
							'default' => 10,
						),
					),
				)
			);

			register_block_type(
				'charitable/campaign-stats',
				array(
					'editor_script'   => 'charitable-blocks',
					'render_callback' => array( $this, 'render_campaign_stats' ),
					'attributes'      => array(
						'campaign'          => array(
							'type' => 'int',
						),
						'showAmountRaised'  => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showDonorCount'    => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showDonationCount' => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showTimeLeft'      => array(
							'type'    => 'boolean',
							'default' => true,
						),
					),
				)
			);

			register_block_type(
				'charitable/campaign-progress-bar',
				array(
					'editor_script'   => 'charitable-blocks',
					'render_callback' => array( $this, 'render_campaign_progress_bar' ),
					'attributes'      => array(
						'campaign'          => array(
							'type' => 'int',
						),
						'highlightColour'   => array(
							'type'    => 'string',
							'default' => charitable_get_highlight_colour(),
						),
						'progressBarHeight' => array(
							'type'    => 'number',
							'default' => 16,
						),
					),
				)
			);

			// register_block_type(
			// 	'charitable/donate-button',
			// 	array(
			// 		'editor_script'   => 'charitable-blocks',
			// 		'render_callback' => array( $this, 'render_donate_button' ),
			// 		'attributes'      => array(
			// 			'campaign'        => array(
			// 				'type' => 'int',
			// 			),
			// 			'highlightColour' => array(
			// 				'type'    => 'string',
			// 				'default' => charitable_get_highlight_colour(),
			// 			),
			// 			'buttonText'      => array(
			// 				'type'    => 'string',
			// 				'default' => __( 'Donate', 'charitable' ),
			// 			),
			// 		),
			// 	)
			// );
		}

		/**
		 * Render the donation form.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $attributes The block attributes.
		 *
		 * @return string Returns the donation form content.
		 */
		public function render_donation_form( $attributes ) {
			ob_start();

			if ( 'form' === $attributes['displayMode'] ) {
				charitable_template_donation_form( $attributes['campaign'] );
			} else {
				// charitable_template( 'blocks/donate-button/index.php', $attributes );
			}

			return ob_get_clean();
		}

		/**
		 * Render the donors block.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $attributes The block attributes.
		 *
		 * @return string Returns the donors block content.
		 */
		public function render_donors( $attributes ) {
			return Charitable_Donors_Shortcode::display(
				array(
					'number'          => $attributes['number'],
					'campaign'        => $attributes['campaign'],
					'orderby'         => $attributes['orderBy'],
					'distinct_donors' => $attributes['distinctDonors'],
					'orientation'     => $attributes['orientation'],
					'show_amount'     => $attributes['displayDonorAmount'],
					'show_avatar'     => $attributes['displayDonorAvatar'],
					'show_name'       => $attributes['displayDonorName'],
					'show_location'   => $attributes['displayDonorLocation'],
				)
			);
		}

		/**
		 * Display the campaigns block.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $attributes The block attributes.
		 *
		 * @return string Returns the campaigns block content.
		 */
		public function render_campaigns( $attributes ) {

			return Charitable_Campaigns_Shortcode::display(
				array(
					'category'            => implode( ',', $attributes['categories'] ),
					'id'                  => implode( ',', $attributes['campaigns'] ),
					'exclude'             => implode( ',', $attributes['campaignsToExclude'] ),
					'creator'             => $attributes['creator'],
					'include_inactive'    => $attributes['includeInactive'],
					'number'              => $attributes['number'],
					'orderby'             => $attributes['orderBy'],
					'order'               => $attributes['order'],
					'columns'             => $attributes['columns'],
					'masonry'             => $attributes['masonryLayout'],
					'responsive'          => $attributes['responsiveLayout'],
					'show_description'    => $attributes['showDescription'],
					'show_amount_donated' => $attributes['showAmountDonated'],
					'show_progress_bar'   => $attributes['showProgressBar'],
					'show_image'          => $attributes['showImage'],
					'progress_bar_style'	=> $attributes['progressBarStyle'],
					'image_size'					=> $attributes['imageSize'],
				)
			);
		}

		/**
		 * Render the campaign summary block.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $attributes The block attributes.
		 *
		 * @return string Returns the campaigns block content.
		 */
		public function render_campaign_stats( $attributes ) {
			ob_start();

			charitable_template( 'blocks/campaign-stats/stats.php', $attributes );

			return ob_get_clean();
		}

		/**
		 * Render the campaign progress bar block.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $attributes The block attributes.
		 *
		 * @return string Returns the campaigns block content.
		 */
		public function render_campaign_progress_bar( $attributes ) {
			ob_start();

			charitable_template( 'blocks/campaign-progress-bar/index.php', $attributes );

			return ob_get_clean();
		}

		/**
		 * Render the donate button block.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $attributes The block attributes.
		 *
		 * @return string Returns the campaigns block content.
		 */
		public function render_donate_button( $attributes ) {
			ob_start();

			charitable_template( 'blocks/donate-button/index.php', $attributes );

			return ob_get_clean();
		}


		/**
		 * Add additional sections for the Campaign Settings meta box in the Gutenberg editor.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $sections The full array of sections for all forms, including defaults.
		 * @return array
		 */
		public function add_extra_campaign_settings_sections( $sections ) {
			$sections['admin'] = array_merge(
				array(
					'campaign-general-settings' => __( 'General', 'charitable' ),
				),
				$sections['admin']
			);

			return $sections;
		}

		/**
		 * Change the settings of the Goal & End Date fields to place them inside the 'campaign-general-settings' block.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $fields The multi-dimensional array of keys in $key => $args format.
		 * @return array
		 */
		public function change_campaign_fields_settings( $fields ) {
			foreach ( $fields as $key => $field ) {
				$admin_form = array_key_exists( 'admin_form', $field ) ? $field['admin_form'] : false;
				$rest_api   = array_key_exists( 'rest_api', $field ) ? $field['rest_api'] : false;
				$data_type  = array_key_exists( 'data_type', $field ) ? $field['data_type'] : 'meta';

				/* It's not an editable field anyway. */
				if ( false === $admin_form ) {
					continue;
				}

				/* It's a core field, so this will be edited elsewhere. */
				if ( 'core' === $data_type ) {
					$field['admin_form'] = false;
				} elseif ( is_array( $rest_api ) ) {
					$editor = array_key_exists( 'editor', $rest_api ) ? $rest_api['editor'] : array();

					if ( ! array_key_exists( 'update_callback', $rest_api ) || false !== $rest_api['update_callback'] ) {
						$editor          = array_merge( $admin_form, $editor );
						$editor['field'] = $key;
						$editor['label'] = array_key_exists( 'label', $editor ) ? $editor['label'] : $field['label'];

						$field['rest_api']['editor'] = $editor;
					}

					$field['admin_form'] = false;
				}

				$fields[ $key ] = $field;
			}

			return $fields;
		}

		/**
		 * Set up the campaign meta boxes in the block editor.
		 *
		 * @since  1.7.0
		 *
		 * @param  array $meta_boxes The meta boxes.
		 * @return array
		 */
		public function setup_block_editor_meta_boxes( $meta_boxes ) {
			$side_boxes = array(
				'campaign-goal',
				'campaign-end-date',
			);

			foreach ( $meta_boxes as $key => $box ) {
				if ( in_array( $box['id'], $side_boxes ) ) {
					$meta_boxes[ $key ]['section'] = 'side';
				}

				if ( 'campaign-advanced' == $box['context'] ) {
					$settings_box['meta_boxes'][] = $box;
				}
			}

			return $meta_boxes;
		}
	}

endif;
