<?php
/**
 * Charitable Endpoint Functions.
 *
 * @package   Charitable/Functions/Endpoints
 * @author    Eric Daams
 * @copyright Copyright (c) 2021, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.5.0
 * @version   1.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register a new endpoint.
 *
 * @since  1.5.0
 *
 * @param  Charitable_Endpoint $endpoint The endpoint object to be registered.
 * @return boolean True if the endpoint was registered. False if it was already registered.
 */
function charitable_register_endpoint( Charitable_Endpoint $endpoint ) {
	return charitable()->endpoints()->register( $endpoint );
}

/**
 * Return the URL for a given page.
 *
 * Example usage:
 *
 * - charitable_get_permalink( 'campaign_donation_page' );
 * - charitable_get_permalink( 'login_page' );
 * - charitable_get_permalink( 'registration_page' );
 * - charitable_get_permalink( 'profile_page' );
 * - charitable_get_permalink( 'donation_receipt_page' );
 * - charitable_get_permalink( 'donation_cancellation_page' );
 *
 * @since  1.0.0
 *
 * @param  string $page The endpoint id.
 * @param  array  $args Optional array of arguments.
 * @return string|false String if page is found. False if none found.
 */
function charitable_get_permalink( $page, $args = array() ) {
	return charitable()->endpoints()->get_page_url( $page, $args );
}

/**
 * Checks whether we are currently looking at the given page.
 *
 * Example usage:
 *
 * - charitable_is_page( 'campaign_donation_page' );
 * - charitable_is_page( 'login_page' );
 * - charitable_is_page( 'registration_page' );
 * - charitable_is_page( 'profile_page' );
 * - charitable_is_page( 'donation_receipt_page' );
 * - charitable_is_page( 'donation_cancellation_page' );
 *
 * @since  1.0.0
 *
 * @param  string $page The endpoint id.
 * @param  array  $args Optional array of arguments.
 * @return boolean
 */
function charitable_is_page( $page, $args = array() ) {
	return charitable()->endpoints()->is_page( $page, $args );
}

/**
 * Checks whether the current request is for a single campaign.
 *
 * @since  1.0.0
 *
 * @return boolean
 */
function charitable_is_campaign_page() {
	return is_singular() && Charitable::CAMPAIGN_POST_TYPE == get_post_type();
}
