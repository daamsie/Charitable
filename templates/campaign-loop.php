<?php
/**
 * Displays the campaign loop.
 *
 * Override this template by copying it to yourtheme/charitable/campaign-loop.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Campaign
 * @since   1.0.0
 * @version 1.5.7
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$campaigns = $view_args['campaigns'];

if ( ! $campaigns->have_posts() ) :
	return;
endif;

$loop_class = charitable_campaign_loop_class( $view_args );
$args       = charitable_campaign_loop_args( $view_args );


/**
 * Optionally filter out some of the content
 *
 */

if (!$args['show_image']) {
	remove_action( 'charitable_campaign_content_loop_before_title', 'charitable_template_campaign_loop_thumbnail', 10 );
}

if (!$args['show_description']) {
	remove_action( 'charitable_campaign_content_loop_after', 'charitable_template_campaign_description', 4 );
}

if (!$args['show_progress_bar']) {
 	remove_action( 'charitable_campaign_content_loop_after', 'charitable_template_campaign_progress_bar', 6 );
}

if (!$args['show_amount_donated']) {
	remove_action( 'charitable_campaign_content_loop_after', 'charitable_template_campaign_loop_donation_stats', 8 );
}


/**
 * Add something before the campaign loop.
 *
 * @since   1.5.0
 *
 * @param   WP_Query $campaigns The campaigns.
 * @param   array    $args      Loop args.
 */
do_action( 'charitable_campaign_loop_before', $campaigns, $args );

?>
<ol class="<?php echo esc_attr( $loop_class ); ?>">

<?php
while ( $campaigns->have_posts() ) :

	$campaigns->the_post();

	charitable_template( 'campaign-loop/campaign.php', $args );

endwhile;

wp_reset_postdata();
?>
</ol>
<?php

/**
 * Add something after the campaign loop.
 *
 * @since   1.5.0
 *
 * @param   WP_Query $campaigns The campaigns.
 * @param   array    $args      Loop args.
 */
do_action( 'charitable_campaign_loop_after', $campaigns, $args );
