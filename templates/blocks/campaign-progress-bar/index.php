<?php
/**
 * Displays the progress bar block.
 *
 * Override this template by copying it to yourtheme/charitable/blocks/campaign-progress-bar/index.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Blocks
 * @since   1.7.0
 * @version 1.7.0
 */

$campaign = charitable_get_campaign( $view_args['campaign'] );

$bar_style = sprintf(
	'height:%1$dpx;border-radius:%2$dpx;',
	$view_args['progressBarHeight'],
	$view_args['progressBarHeight'] / 2
);

$tracker_style = sprintf(
	'background-color:%1$s;border-radius:%2$dpx;width:%3$s',
	$view_args['highlightColour'],
	$view_args['progressBarHeight'] / 2,
	$campaign->get_percent_donated_raw() . '%'
);

?>
<div class="charitable-campaign-progress-bar">
	<div class="charitable-campaign-progress-bar-percent-raised">
		<?php
		printf(
			/* translators: %s: amount raised in span */
			__( '%s Raised', 'charitable' ),
			'<span class="charitable-campaign-stat-figure">' . $campaign->get_percent_donated() . '</span>'
		);
		?>
	</div>
	<div class="charitable-campaign-progress-bar-goal">
		<?php
		printf(
			/* translators: %s: goal amount */
			__( '%s Goal', 'charitable' ),
			'<span class="charitable-campaign-stat-figure">' . $campaign->get_monetary_goal() . '</span>'
		);
		?>
	</div>
	<div class="campaign-progress-bar"
		role="progressbar"
		aria-valuemin="0"
		aria-valuemax="100"
		aria-valuenow="<?php echo $campaign->get_percent_donated_raw(); ?>"
		style="<?php echo esc_attr( $bar_style ); ?>"
	>
		<div class="campaign-progress-bar-tracker" style="<?php echo esc_attr( $tracker_style ); ?>"></div>
	</div>
</div><!-- .charitable-campaign-progress-bar -->
