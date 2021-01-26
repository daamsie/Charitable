<?php
/**
 * Charitable Deprecated Functions.
 *
 * @package   Charitable/Functions/Deprecated
 * @author    Eric Daams
 * @copyright Copyright (c) 2021, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.0.1
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'charitable_template_campaign_content' ) ) :
	/**
	 * Display the campaign content. This is used with the_content filter.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.0.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string $content Page content.
	 * @return string
	 */
	function charitable_template_campaign_content( $content ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::get_content()'
		);

		return charitable()->endpoints()->get_content( $content, 'campaign' );
	}
endif;

if ( ! function_exists( 'charitable_template_donation_form_content' ) ) :
	/**
	 * Display the donation form. This is used with the_content filter.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.0.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string $content Page content.
	 * @return string
	 */
	function charitable_template_donation_form_content( $content ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::get_content()'
		);

		return charitable()->endpoints()->get_content( $content, 'campaign_donation' );
	}
endif;

if ( ! function_exists( 'charitable_template_donation_receipt_content' ) ) :
	/**
	 * Display the donation form. This is used with the_content filter.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.0.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string $content Page content.
	 * @return string
	 */
	function charitable_template_donation_receipt_content( $content ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::get_content()'
		);

		return charitable()->endpoints()->get_content( $content, 'donation_receipt' );
	}
endif;

if ( ! function_exists( 'charitable_template_donation_processing_content' ) ) :
	/**
	 * Render the content of the donation processing page.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.2.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string $content Default content to be rendered.
	 * @return string
	 */
	function charitable_template_donation_processing_content( $content ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::get_content()'
		);
		return charitable()->endpoints()->get_content( $content, 'donation_processing' );

	}
endif;

if ( ! function_exists( 'charitable_template_forgot_password_content' ) ) :
	/**
	 * Render the content of the forgot password page.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.4.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string $content Default content to be rendered.
	 * @return string
	 */
	function charitable_template_forgot_password_content( $content ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::get_content()'
		);

		return charitable()->endpoints()->get_content( $content, 'forgot_password' );
	}
endif;

if ( ! function_exists( 'charitable_template_reset_password_content' ) ) :
	/**
	 * Render the content of the reset password page.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.4.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string $content Default content to be rendered.
	 * @return string
	 */
	function charitable_template_reset_password_content( $content ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::get_content()'
		);

		return charitable()->endpoints()->get_content( $content, 'reset_password' );
	}
endif;

if ( ! function_exists( 'charitable_add_body_classes' ) ) :
	/**
	 * Adds custom body classes to certain templates.
	 *
	 * @deprecated 2.0.0
	 *
	 * @since  1.3.0
	 * @since  1.5.0 Deprecated.
	 *
	 * @param  string[] $classes Body classes.
	 * @return string[]
	 */
	function charitable_add_body_classes( $classes ) {
		charitable_get_deprecated()->deprecated_function(
			__FUNCTION__,
			'1.5.0',
			'Charitable_Endpoints::add_body_classes()'
		);

		return charitable()->endpoints()->add_body_classes( $classes );
	}
endif;

/**
 * Yoast attempts to executes shortcodes from the admin, so we
 * need to make sure these will work properly.
 *
 * @deprecated 2.0.0
 *
 * @since  1.5.4
 * @since  1.6.10 Deprecated.
 *
 * @return void
 */
function charitable_wpseo_compat_load_template_files() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.6.10',
		'charitable()->load_template_files()'
	);

	charitable()->load_template_files();
}

/**
 * Returns the URL for the profile page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'profile' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_profile_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'profile' )"
	);

	return charitable()->endpoints()->get_page_url( 'profile' );
}

/**
 * Checks whether the current request is for the profile page.
 *
 * This is functionally equivalent to using charitable_is_page( 'profile' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_profile_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'profile' )"
	);

	return charitable()->endpoints()->is_page( 'profile' );
}

/**
 * Checks whether the current request is for an email preview.
 *
 * This is functionally equivalent to using charitable_is_page( 'email_preview' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_email_preview() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'email_preview' )"
	);

	return charitable()->endpoints()->is_page( 'email_preview' );
}

/**
 * Returns the URL for the registration page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'registration' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_registration_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'registration' )"
	);

	return charitable()->endpoints()->get_page_url( 'registration' );
}

/**
 * Checks whether the current request is for the registration page.
 *
 * This is functionally equivalent to using charitable_is_page( 'registration' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_registration_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'registration' )"
	);

	return charitable()->endpoints()->is_page( 'registration' );
}

/**
 * Returns the URL for the login page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'login' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_login_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'login' )"
	);

	return charitable()->endpoints()->get_page_url( 'login', $args );
}

/**
 * Checks whether the current request is for the login page.
 *
 * This is functionally equivalent to using charitable_is_page( 'login' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_login_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'login' )"
	);

	return charitable()->endpoints()->is_page( 'login' );
}

/**
 * Returns the URL for the reset password page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'reset_password' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.4.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_reset_password_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'reset_password' )"
	);

	return charitable()->endpoints()->get_page_url( 'reset_password', $args );
}

/**
 * Checks whether the current request is for the reset password page.
 *
 * This is functionally equivalent to using charitable_is_page( 'reset_password' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.4.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_reset_password_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'reset_password' )"
	);

	return charitable()->endpoints()->is_page( 'reset_password' );
}

/**
 * Returns the URL for the forgot password page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'forgot_password' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.4.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_forgot_password_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'forgot_password' )"
	);

	return charitable()->endpoints()->get_page_url( 'forgot_password', $args );
}

/**
 * Checks whether the current request is for the forgot password page.
 *
 * This is functionally equivalent to using charitable_is_page( 'forgot_password' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.4.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_forgot_password_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'forgot_password' )"
	);

	return charitable()->endpoints()->is_page( 'forgot_password' );
}

/**
 * Returns the URL for the campaign donation page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'campaign_widget' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.2.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_campaign_widget_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'campaign_widget' )"
	);

	return charitable()->endpoints()->get_page_url( 'campaign_widget', $args );
}

/**
 * Checks whether the current request is for the donation receipt page.
 *
 * This is functionally equivalent to using charitable_is_page( 'campaign_widget' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.2.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_campaign_widget_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'campaign_widget' )"
	);

	return charitable()->endpoints()->is_page( 'campaign_widget' );
}

/**
 * Returns the URL for the donation cancellation page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'donation_cancellation' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.4.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_donation_cancel_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'donation_cancellation' )"
	);

	return charitable()->endpoints()->get_page_url( 'donation_cancellation', $args );
}

/**
 * Checks whether the current request is for the donation cancellation page.
 *
 * This is functionally equivalent to using charitable_is_page( 'donation_cancellation' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.4.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_donation_cancel_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'donation_cancellation' )"
	);

	return charitable()->endpoints()->is_page( 'donation_cancellation' );
}

/**
 * Returns the URL for the campaign donation page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'donation_processing' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.2.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_donation_processing_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'donation_processing' )"
	);

	return charitable()->endpoints()->get_page_url( 'donation_processing', $args );
}

/**
 * Checks whether the current request is for the donation receipt page.
 *
 * This is functionally equivalent to using charitable_is_page( 'donation_processing' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_donation_processing_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'donation_processing' )"
	);

	return charitable()->endpoints()->is_page( 'donation_processing' );
}

/**
 * Returns the URL for the campaign donation page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'donation_receipt' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_donation_receipt_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'donation_receipt' )"
	);

	return charitable()->endpoints()->get_page_url( 'donation_receipt', $args );
}

/**
 * Checks whether the current request is for the donation receipt page.
 *
 * This is used when you call charitable_is_page( 'donation_receipt_page' ).
 * In general, you should use charitable_is_page() instead since it will
 * take into account any filtering by plugins/themes.
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @return boolean
 */
function charitable_is_donation_receipt_page() {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'donation_receipt' )"
	);

	return charitable()->endpoints()->is_page( 'donation_receipt' );
}

/**
 * Returns the URL for the campaign donation page.
 *
 * This is functionally equivalent to using charitable_get_permalink( 'campaign_donation' ).
 * It will produce the same results.
 *
 * We keep both for backwards compatibility (pre 1.5).
 *
 * @uses   Charitable_Endpoints::get_page_url()
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @param  string $url  Deprecated argument.
 * @param  array  $args Mixed arguments.
 * @return string
 */
function charitable_get_campaign_donation_page_permalink( $url = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_get_permalink( 'campaign_donation' )"
	);

	return charitable()->endpoints()->get_page_url( 'campaign_donation', $args );
}

/**
 * Checks whether the current request is for a campaign donation page.
 *
 * This is functionally equivalent to using charitable_is_page( 'campaign_donation' ).
 * It will produce the same results. We keep both for backwards compatibility (pre 1.5).
 *
 * By default, this will return true when viewing a campaign with the `donate`
 * query var set, or when the donation form is shown on the campaign page or
 * in a modal.
 *
 * Pass `'strict' => true` in `$args` to only return true when the `donate`
 * query var is set.
 *
 * @uses   Charitable_Endpoints::is_page()
 *
 * @deprecated 2.2.0
 *
 * @since  1.0.0
 * @since  1.7.0 Deprecated.
 *
 * @param  boolean $ret  Unused argument.
 * @param  array   $args Mixed args.
 * @return boolean
 */
function charitable_is_campaign_donation_page( $ret = null, $args = array() ) {
	charitable_get_deprecated()->deprecated_function(
		__FUNCTION__,
		'1.7.0',
		"charitable_is_page( 'campaign_donation' )"
	);

	return charitable()->endpoints()->is_page( 'campaign_donation', $args );
}
