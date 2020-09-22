<?php
/**
 * Charitable Template Functions.
 *
 * Functions used with template hooks.
 *
 * @package   Charitable/Functions/Templates
 * @author    Eric Daams
 * @copyright Copyright (c) 2020, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.0.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// //////////////////////////////
// HEAD OUTPUT
// //////////////////////////////
if ( ! function_exists( 'charitable_template_custom_styles' ) ) :

	/**
	 * Add custom styles to the <head> section.
	 *
	 * This is used on the wp_head action.
	 *
	 * @since  1.2.0
	 *
	 * @return void
	 */
	function charitable_template_custom_styles() {
		if ( ! apply_filters( 'charitable_add_custom_styles', true ) ) {
			return;
		}

		$styles = get_transient( 'charitable_custom_styles' );

		if ( false === $styles ) {

			ob_start();

			charitable_template( 'custom-styles.css.php' );

			$styles = ob_get_clean();

			$styles = charitable_compress_css( $styles );

			set_transient( 'charitable_custom_styles', $styles, 0 );
		}

		echo $styles;
	}

endif;

if ( ! function_exists( 'charitable_hide_admin_bar' ) ) :

	/**
	 * Hides the admin bar from header.
	 *
	 * This is designed to be used when viewing the campaign widget.
	 *
	 * @since  1.3.0
	 *
	 * @return void
	 */
	function charitable_hide_admin_bar() {
		?>
<style type="text/css" media="screen">
html { margin-top: 0 !important; }
* html body { margin-top: 0 !important; }
</style>
		<?php
	}

endif;

// //////////////////////////////
// SINGLE CAMPAIGN CONTENT
// //////////////////////////////
if ( ! function_exists( 'charitable_template_campaign_description' ) ) :

	/**
	 * Display the campaign description before the summary and rest of content.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_description( $campaign ) {
		charitable_template( 'campaign/description.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_finished_notice' ) ) :

	/**
	 * Display the campaign finished notice.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_finished_notice( $campaign ) {
		if ( ! $campaign->has_ended() ) {
			return;
		}

		charitable_template( 'campaign/finished-notice.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_percentage_raised' ) ) :

	/**
	 * Display the percentage that the campaign has raised in summary block.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return boolean     True if the template was displayed. False otherwise.
	 */
	function charitable_template_campaign_percentage_raised( $campaign ) {
		if ( ! $campaign->has_goal() ) {
			return false;
		}

		charitable_template( 'campaign/summary-percentage-raised.php', array( 'campaign' => $campaign ) );

		return true;
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_donation_summary' ) ) :

	/**
	 * Display campaign goal in summary block.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return true
	 */
	function charitable_template_campaign_donation_summary( $campaign ) {
		charitable_template( 'campaign/summary-donations.php', array( 'campaign' => $campaign ) );
		return true;
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_donor_count' ) ) :

	/**
	 * Display number of campaign donors in summary block.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return true
	 */
	function charitable_template_campaign_donor_count( $campaign ) {
		charitable_template( 'campaign/summary-donors.php', array( 'campaign' => $campaign ) );
		return true;
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_time_left' ) ) :

	/**
	 * Display the amount of time left in the campaign in the summary block.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return boolean     True if the template was displayed. False otherwise.
	 */
	function charitable_template_campaign_time_left( $campaign ) {
		if ( $campaign->is_endless() ) {
			return false;
		}

		charitable_template( 'campaign/summary-time-left.php', array( 'campaign' => $campaign ) );
		return true;
	}

endif;

if ( ! function_exists( 'charitable_template_donate_button' ) ) :

	/**
	 * Display donate button or link in the campaign summary.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return boolean     True if the template was displayed. False otherwise.
	 */
	function charitable_template_donate_button( $campaign ) {
		if ( ! $campaign->can_receive_donations() ) {
			return false;
		}

		$campaign->donate_button_template();

		return true;
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_summary' ) ) :

	/**
	 * Display campaign summary before rest of campaign content.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_summary( $campaign ) {
		charitable_template( 'campaign/summary.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_progress_bar' ) ) :

	/**
	 * Output the campaign progress bar.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_progress_bar( $campaign, $args ) {
		charitable_template( 'campaign/progress-bar.php', array( 'campaign' => $campaign, 'style' => $args['progress_bar_style'] ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_donate_button' ) ) :

	/**
	 * Output the campaign donate button.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_donate_button( $campaign ) {
		charitable_template( 'campaign/donate-button.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_donate_link' ) ) :

	/**
	 * Output the campaign donate link.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_donate_link( $campaign ) {
		charitable_template( 'campaign/donate-link.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_status_tag' ) ) :

	/**
	 * Output the campaign status tag.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_status_tag( $campaign ) {
		charitable_template( 'campaign/status-tag.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_donation_form_in_page' ) ) :

	/**
	 * Add the donation form straight into the campaign page.
	 *
	 * @since  1.0.0
	 * @since  1.5.0 Function now returns true/false depending
	 *               on whether the template is rendered.
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return boolean
	 */
	function charitable_template_campaign_donation_form_in_page( Charitable_Campaign $campaign ) {
		if ( $campaign->can_receive_donations() && 'same_page' == charitable_get_option( 'donation_form_display', 'separate_page' ) ) {
			$donation_id = get_query_var( 'donation_id', false );

			/* If a donation ID is included, make sure it belongs to the current user. */
			if ( $donation_id && ! charitable_user_can_access_donation( $donation_id ) ) {
				return false;
			}

			charitable_get_current_donation_form()->render();
			return true;
		}

		return false;
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_modal_donation_window' ) ) :

	/**
	 * Adds the modal donation window to a campaign page.
	 *
	 * @since  1.0.0
	 * @since  1.5.0 Function now returns true/false depending
	 *               on whether the template is rendered.
	 *
	 * @global WP_Query $wp_query
	 * @return boolean
	 */
	function charitable_template_campaign_modal_donation_window() {
		global $wp_query;

		if ( Charitable::CAMPAIGN_POST_TYPE != get_post_type() ) {
			return false;
		}

		if ( isset( $wp_query->query_vars['donate'] ) ) {
			return false;
		}

		$campaign = charitable_get_current_campaign();

		if ( $campaign->can_receive_donations() && 'modal' == charitable_get_option( 'donation_form_display', 'separate_page' ) ) {
			charitable_template( 'campaign/donate-modal-window.php', array( 'campaign' => $campaign ) );
			return true;
		}

		return false;
	}

endif;

// //////////////////////////////
// CAMPAIGN LOOP
// //////////////////////////////
if ( ! function_exists( 'charitable_template_campaign_loop' ) ) :

	/**
	 * Display the campaign loop.
	 *
	 * This is used instead of the_content filter.
	 *
	 * @since  1.0.0
	 *
	 * @param  WP_Query $campaigns Query with campaigns.
	 * @param  int      $columns   Number of columns to use for loop.
	 * @return void
	 */
	function charitable_template_campaign_loop( $campaigns = false, $columns = 1 ) {
		if ( ! $campaigns ) {
			global $wp_query;
			$campaigns = $wp_query;
		}

		charitable_template(
			'campaign-loop.php',
			array(
				'campaigns' => $campaigns,
				'columns'   => $columns,
			)
		);
	}

endif;

if ( ! function_exists( 'charitable_template_responsive_styles' ) ) :

	/**
	 * Add responsive styles for the campaign loop.
	 *
	 * @since  1.4.0
	 *
	 * @param  WP_Query $campaigns The campaigns that will be displayed.
	 * @param  array    $args      The view arguments.
	 * @return void
	 */
	function charitable_template_responsive_styles( $campaigns, $args ) {
		if ( ! isset( $args['responsive'] ) || ! $args['responsive'] ) {
			return;
		}

		$breakpoint = '768px';

		if ( preg_match( '/[px|em]/', $args['responsive'] ) ) {
			$breakpoint = $args['responsive'];
		}

		$highlight_colour = charitable_get_highlight_colour();

		?>
<style type="text/css" media="screen">
	@media only screen and (max-width: <?php echo $breakpoint; ?>) {
		.campaign-loop.campaign-grid.masonry { -moz-column-count: 1; -webkit-column-count: 1; column-count: 1; }
		.campaign-loop.campaign-grid .campaign,.campaign-loop.campaign-grid .campaign.hentry { width: 100% !important; }
	}
	.campaign-progress-bar .bar,
	.campaign-donation .donate-button { background-color: <?php echo $highlight_colour; ?>; }
	.campaign-progress-circle .campaign-progress-half-circle { border-color: <?php echo $highlight_colour; ?>; }
</style>
		<?php
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_loop_thumbnail' ) ) :

	/**
	 * Output the campaign thumbnail on campaigns displayed within the loop.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_loop_thumbnail( $campaign ) {
		charitable_template( 'campaign-loop/thumbnail.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_loop_donation_stats' ) ) :

	/**
	 * Output the campaign donation status on campaigns displayed within the loop.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @return void
	 */
	function charitable_template_campaign_loop_donation_stats( $campaign ) {
		charitable_template( 'campaign-loop/donation-stats.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_loop_donate_link' ) ) :

	/**
	 * Output the campaign donation status on campaigns displayed within the loop.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @param  mixed[]             $args     Optional arguments.
	 * @return void
	 */
	function charitable_template_campaign_loop_donate_link( $campaign, $args = array() ) {
		if ( isset( $args['button'] ) && 'donate' != $args['button'] ) {
			return;
		}

		$campaign->donate_button_loop_template();
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_loop_more_link' ) ) :

	/**
	 * Output the read more link on campaigns displayed within the loop.
	 *
	 * @since  1.2.3
	 *
	 * @param  Charitable_Campaign $campaign The campaign object.
	 * @param  mixed[]             $args     Optional arguments.
	 * @return void
	 */
	function charitable_template_campaign_loop_more_link( $campaign, $args = array() ) {
		if ( ! isset( $args['button'] ) || 'details' != $args['button'] ) {
			return;
		}

		charitable_template( 'campaign-loop/more-link.php', array( 'campaign' => $campaign ) );
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_loop_add_modal' ) ) :

	/**
	 * Checks if the modal option is enabled and hooks the modal template up to wp_footer if it is.
	 *
	 * @since  1.2.3
	 *
	 * @return void
	 */
	function charitable_template_campaign_loop_add_modal() {
		if ( 'modal' == charitable_get_option( 'donation_form_display', 'separate_page' ) ) {
			add_action( 'wp_footer', 'charitable_template_campaign_loop_modal_donation_window' );
		}
	}

endif;

if ( ! function_exists( 'charitable_template_campaign_loop_modal_donation_window' ) ) :

	/**
	 * Adds the modal donation window to the campaign loop.
	 *
	 * @since  1.2.3
	 *
	 * @return void
	 */
	function charitable_template_campaign_loop_modal_donation_window() {
		charitable_template( 'campaign-loop/donate-modal-window.php' );
	}

endif;

/**********************************************/
/* DONATION FORM
/**********************************************/

if ( ! function_exists( 'charitable_template_donation_form' ) ) :

	/**
	 * Display a campaign's donation form.
	 *
	 * @since  1.5.9
	 *
	 * @param  int   $campaign_id The campaign ID.
	 * @param  array $args        Args to pass to the view.
	 * @return false|void
	 */
	function charitable_template_donation_form( $campaign_id, $args = array() ) {
		if ( Charitable::CAMPAIGN_POST_TYPE !== get_post_type( $campaign_id ) ) {
			return false;
		}

		if ( ! array_key_exists( 'campaign_id', $args ) ) {
			$args['campaign_id'] = $campaign_id;
		}

		if ( ! charitable_campaign_can_receive_donations( $args['campaign_id'] ) ) {
			return false;
		}

		$donation_id = get_query_var( 'donation_id', false );

		/* If a donation ID is included, make sure it belongs to the current user. */
		if ( $donation_id && ! charitable_user_can_access_donation( $donation_id ) ) {
			return false;
		}

		if ( ! wp_script_is( 'charitable-script', 'enqueued' ) ) {
			Charitable_Public::get_instance()->enqueue_donation_form_scripts();
		}

		$form = charitable_get_campaign( $campaign_id )->get_donation_form();

		/**
		 * Do something before rendering the donation form.
		 *
		 * @since 1.0.0
		 *
		 * @param Charitable_Donation_Form $form The donation form instance.
		 */
		do_action( 'charitable_donation_form_before', $form );

		$args['form']     = $form;
		$args['campaign'] = $form->get_campaign();

		charitable_template( 'donation-form/form-donation.php', $args );

		/**
		 * Do something after rendering the donation form.
		 *
		 * @since 1.0.0
		 *
		 * @param Charitable_Donation_Form $form The donation form instance.
		 */
		do_action( 'charitable_donation_form_after', $form );
	}

endif;

/**********************************************/
/* DONATION RECEIPT
/**********************************************/
if ( ! function_exists( 'charitable_template_donation_receipt_output' ) ) :

	/**
	 * Render the donation receipt. This can be used by the [donation_receipt] shortcode or through `the_content` filter.
	 *
	 * @since  1.0.0
	 * @since  1.5.0 Added $donation argument.
	 *
	 * @param  string                   $content  Page content.
	 * @param  Charitable_Donation|null $donation Optional. Useful when the donation is not the current donation.
	 * @return string
	 */
	function charitable_template_donation_receipt_output( $content, $donation = null ) {
		if ( is_null( $donation ) ) {
			$donation = charitable_get_current_donation();
		}

		if ( ! $donation || 'simple' != $donation->get_donation_type() ) {
			return $content;
		}

		ob_start();

		if ( ! $donation->is_from_current_user() ) {
			charitable_template_from_session(
				'donation-receipt/not-authorized.php',
				array( 'content' => $content ),
				'donation_receipt',
				array( 'donation_id' => $donation->ID )
			);

			return ob_get_clean();
		}

		do_action( 'charitable_donation_receipt_page', $donation );

		charitable_template(
			'content-donation-receipt.php',
			array(
				'content'  => $content,
				'donation' => $donation,
			)
		);

		$content = ob_get_clean();

		return $content;
	}

endif;

if ( ! function_exists( 'charitable_template_donation_receipt_summary' ) ) :

	/**
	 * Display the donation receipt summary.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation $donation The Donation object.
	 * @return void
	 */
	function charitable_template_donation_receipt_summary( Charitable_Donation $donation ) {
		charitable_template( 'donation-receipt/summary.php', array( 'donation' => $donation ) );
	}

endif;

if ( ! function_exists( 'charitable_template_donation_receipt_offline_payment_instructions' ) ) :

	/**
	 * Display the offline payment instructions, if applicable.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation $donation The Donation object.
	 * @return void
	 */
	function charitable_template_donation_receipt_offline_payment_instructions( Charitable_Donation $donation ) {
		if ( 'offline' != $donation->get_gateway() ) {
			return;
		}

		charitable_template( 'donation-receipt/offline-payment-instructions.php', array( 'donation' => $donation ) );
	}

endif;

if ( ! function_exists( 'charitable_template_donation_receipt_details' ) ) :

	/**
	 * Display the donation details.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation $donation The Donation object.
	 * @return void
	 */
	function charitable_template_donation_receipt_details( Charitable_Donation $donation ) {
		charitable_template( 'donation-receipt/details.php', array( 'donation' => $donation ) );
	}


endif;

// //////////////////////////////
// DONATION FORM
// //////////////////////////////
if ( ! function_exists( 'charitable_template_donation_form_login' ) ) :

	/**
	 * Display a prompt to login at the start of the user fields block.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation_Form_Interface $form The donation form object.
	 * @return void
	 */
	function charitable_template_donation_form_login( Charitable_Donation_Form_Interface $form ) {

		$user = $form->get_user();

		if ( $user ) {
			return;
		}

		charitable_template( 'donation-form/donor-fields/login-form.php' );
	}

endif;

if ( ! function_exists( 'charitable_template_donation_form_donor_details' ) ) :

	/**
	 * Display the donor's saved details if the user is logged in.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation_Form_Interface $form The donation form object.
	 * @return void
	 */
	function charitable_template_donation_form_donor_details( Charitable_Donation_Form_Interface $form ) {
		/* Verify that the user is logged in and has all required fields filled out */
		if ( ! $form->should_hide_user_fields() ) {
			return;
		}

		charitable_template( 'donation-form/donor-fields/donor-details.php', array( 'user' => $form->get_user() ) );
	}

endif;

if ( ! function_exists( 'charitable_template_donation_form_donor_fields_hidden_wrapper_start' ) ) :

	/**
	 * If the user is logged in, adds a wrapper around the donor fields that hide them.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation_Form_Interface $form The donation form object.
	 * @return void
	 */
	function charitable_template_donation_form_donor_fields_hidden_wrapper_start( Charitable_Donation_Form_Interface $form ) {
		/* Verify that the user is logged in and has all required fields filled out */
		if ( ! $form->should_hide_user_fields() ) {
			return;
		}

		charitable_template( 'donation-form/donor-fields/hidden-fields-wrapper-start.php' );
	}

endif;

if ( ! function_exists( 'charitable_template_donation_form_donor_fields_hidden_wrapper_end' ) ) :

	/**
	 * Closes the hidden donor fields wrapper div if the user is logged in.
	 *
	 * @since  1.0.0
	 *
	 * @param  Charitable_Donation_Form_Interface $form The donation form object.
	 * @return void
	 */
	function charitable_template_donation_form_donor_fields_hidden_wrapper_end( Charitable_Donation_Form_Interface $form ) {
		/* Verify that the user is logged in and has all required fields filled out */
		if ( ! $form->should_hide_user_fields() ) {
			return;
		}

		charitable_template( 'donation-form/donor-fields/hidden-fields-wrapper-end.php' );
	}

endif;

if ( ! function_exists( 'charitable_template_donation_form_current_amount_text' ) ) :

	/**
	 * Display the amount currently selected to donate.
	 *
	 * @since  1.5.0
	 *
	 * @param  int|float $amount      The current donation amount.
	 * @param  string    $form_id     The current form ID.
	 * @param  string    $campaign_id The current campaign ID.
	 * @return string
	 */
	function charitable_template_donation_form_current_amount_text( $amount, $form_id, $campaign_id ) {
		if ( ! $amount ) {
			return '';
		}

		/**
		 * Format the donation amount.
		 *
		 * @since 1.4.14
		 * @since 1.5.0 Third parameter has been changed from an instance of
		 *              `Charitable_Donation_Form` to a campaign ID.
		 *
		 * @param string    $amount_formatted The formatted amount.
		 * @param int|float $amount           The raw amount.
		 * @param int       $campaign_id      Campaign ID.
		 */
		$amount_formatted = apply_filters( 'charitable_session_donation_amount_formatted', charitable_format_money( $amount ), $amount, $campaign_id );

		$content = '<p>';
		/* translators: %s: donation amount */
		$content .= sprintf( __( 'Your Donation Amount: %s.', 'charitable' ), '<strong>' . $amount_formatted . '</strong>' );
		$content .= '&nbsp;<a href="#" class="change-donation" data-charitable-toggle="charitable-donation-options-' . esc_attr( $form_id ) . '">' . __( 'Change', 'charitable' ) . '</a>';
		$content .= '</p>';

		return $content;
	}

endif;

// //////////////////////////////
// ACCOUNT PAGES
// //////////////////////////////

if ( ! function_exists( 'charitable_template_form_login_link' ) ) :

	/**
	 * Display a link to the login form.
	 *
	 * @since  1.4.2
	 *
	 * @param  Charitable_Registration_Form|null $form Instance of `Charitable_Registration_Form`, or
	 *                                                 null in previous versions of Charitable.
	 * @return void
	 */
	function charitable_template_form_login_link( $form = null ) {
		/**
		 * For backwards compatibility, since previously the
		 * Form object was not passed to the hook.
		 */
		if ( is_null( $form ) ) {
			return;
		}

		if ( ! $form->get_login_link() ) {
			return;
		}

		printf( '<p>%s</p>', $form->get_login_link() );
	}

endif;

// //////////////////////////////
// NOTICES
// //////////////////////////////
if ( ! function_exists( 'charitable_template_notices' ) ) :

	/**
	 * Render any notices.
	 *
	 * @since  1.4.0
	 *
	 * @param  array $notices Optional. Notices to be rendered.
	 * @return void
	 */
	function charitable_template_notices( $notices = array() ) {
		if ( empty( $notices ) ) {
			$notices = charitable_get_notices()->get_notices();
		}

		charitable_template_from_session(
			'form-fields/notices.php',
			array(
				'notices' => $notices,
			),
			'notices'
		);
	}

endif;
