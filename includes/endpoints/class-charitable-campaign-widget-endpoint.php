<?php
/**
 * donate endpoint.
 *
 * @version     1.5.0
 * @package     Charitable/Classes/Charitable_Campaign_Widget_Endpoint
 * @author      Eric Daams
 * @copyright   Copyright (c) 2017, Studio 164a
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

if ( ! defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly

if ( ! class_exists( 'Charitable_Campaign_Widget_Endpoint' ) ) :

	/**
	 * Charitable_Campaign_Widget_Endpoint
	 *
	 * @abstract
	 * @since       1.5.0
	 */
	class Charitable_Campaign_Widget_Endpoint extends Charitable_Endpoint {

		/**
		 * @var     string
		 */
		const ID = 'campaign_widget';

		/**
		 * Return the endpoint ID.
		 *
		 * @return 	string
		 * @access 	public
		 * @static
		 * @since 	1.5.0
		 */
		public static function get_endpoint_id() {
			return self::ID;
		}

		/**
		 * Add rewrite rules for the endpoint.
		 *
		 * @access 	public
		 * @since 	1.5.0
		 */
		public function setup_rewrite_rules() {
			add_rewrite_endpoint( 'widget', EP_PERMALINK );
		}

		/**
		 * Return the endpoint URL.
		 *
		 * @global  WP_Rewrite $wp_rewrite
		 * @param 	array      $args
		 * @return  string
		 * @access  public
		 * @since   1.5.0
		 */
		public function get_page_url( $args = array() ) {

			global $wp_rewrite;

			$campaign_id = array_key_exists( 'campaign_id', $args ) ? $args['campaign_id'] : get_the_ID();

			if ( $wp_rewrite->using_permalinks() && ! isset( $_GET['preview'] ) ) {
				$url = trailingslashit( get_permalink( $campaign_id ) ) . 'widget/';
			} else {
				$url = esc_url_raw( add_query_arg( array( 'widget' => 1 ), get_permalink( $campaign_id ) ) );
			}

			return $url;

		}

		/**
		 * Return whether we are currently viewing the endpoint.
		 *
		 * @global  WP_Query $wp_query
		 * @return  boolean
		 * @access  public
		 * @since   1.5.0
		 */
		public function is_page() {

			global $wp_query;

			return $wp_query->is_main_query()
				&& array_key_exists( 'widget', $wp_query->query_vars )
				&& $wp_query->is_singular( Charitable::CAMPAIGN_POST_TYPE );

		}

		/**
		 * Return the template to display for this endpoint.
		 *
		 * @param 	string $template The default template.
		 * @return  string
		 * @access  public
		 * @since   1.5.0
		 */
		public function get_template( $template ) {

			do_action( 'charitable_is_widget' );

			add_filter( 'show_admin_bar', '__return_false' );
			add_action( 'wp_head', 'charitable_hide_admin_bar' );

			return apply_filters( 'charitable_widget_page_template', 'campaign-widget.php' );

		}
	}

endif;
