<?php
/**
 * Displays the campaign stats block.
 *
 * Override this template by copying it to yourtheme/charitable/blocks/campaign-stats/index.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Blocks
 * @since   1.7.0
 * @version 1.7.0
 */

$show_stats = $view_args['showPercentRaised'] || $view_args['showDonorCount'] || $view_args['showDonationCount'] || $view_args['showTimeLeft'];

$wrapper_style = sprintf(
	'background-color:%1$s;padding:%2$s;',
	$view_args['backgroundColour'],
	$view_args['blockPadding'] . 'px'
);

?>
<div class="charitable-campaign-stats-block" style="<?php echo esc_attr( $wrapper_style ); ?>">
	<?php
	if ( $view_args['showProgressBar'] ) :
		charitable_template( 'blocks/campaign-stats/progress-bar.php', $view_args );
	endif;

	if ( $show_stats ) :
		charitable_template( 'blocks/campaign-stats/stats.php', $view_args );
	endif;

	charitable_template( 'blocks/campaign-stats/button.php', $view_args );
	?>
</div><!-- .charitable-campaign-stats-block -->
