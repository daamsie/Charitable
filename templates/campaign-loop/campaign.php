<?php
/**
 * The template for displaying campaign content within loops.
 *
 * Override this template by copying it to yourtheme/charitable/campaign-loop/campaign.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Campaign
 * @since   1.0.0
 * @version 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$campaign = charitable_get_current_campaign();

// Hide a few things if desired

if (!$view_args['show_progress_bar']) {
	remove_action( 'charitable_campaign_content_loop_after', 'charitable_template_campaign_progress_bar', 6 );
}
if (!$view_args['show_amount_donated']) {
	remove_action( 'charitable_campaign_content_loop_after', 'charitable_template_campaign_loop_donation_stats', 8 );
}
if (!$view_args['show_description']) {
	remove_action( 'charitable_campaign_content_loop_after', 'charitable_template_campaign_description', 4 );
}

?>

<li id="campaign-<?php echo get_the_ID() ?>" <?php post_class() ?>>
<?php
	/**
	 * @hook charitable_campaign_content_loop_before
	 */
	do_action( 'charitable_campaign_content_loop_before', $campaign, $view_args );

	?>
	<a href="<?php the_permalink() ?>">
		<?php
			/**
			 * @hook charitable_campaign_content_loop_before_title
			 */
			do_action( 'charitable_campaign_content_loop_before_title', $campaign, $view_args );
		?>

		<h3><?php the_title() ?></h3>

		<?php
			/**
			 * @hook charitable_campaign_content_loop_after_title
			 */
			do_action( 'charitable_campaign_content_loop_after_title', $campaign, $view_args );
		?>
	</a>
	<?php

	/**
	 * @hook charitable_campaign_content_loop_after
	 */
	do_action( 'charitable_campaign_content_loop_after', $campaign, $view_args );
?>
</li>
