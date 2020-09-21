<?php
/**
 * Displays the campaign progress bar. Defaults to a bar, can be set to html for a circle
 *
 * Override this template by copying it to yourtheme/charitable/campaign/progress-bar.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Campaign Page
 * @since   1.0.0
 * @version 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$campaign = $view_args['campaign'];
$style = $view_args['style'];

if ( ! $campaign->has_goal() ) :
	return;
endif;

$percent_donated = $campaign->get_percent_donated_raw();
$circle_class = '';

if ($percent_donated > 50) {
	$circle_class = 'campaign-past-halfway';
}

?>

<?php if ( $style == 'circle' ) : ?>
	<div class="campaign-progress-circle-wrapper">
		<div class="campaign-progress-circle <?php echo $circle_class; ?>" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="<?php echo $percent_donated; ?>">
			<div class="campaign-progress-half-circle campaign-progress-circle-left" style="--campaign-circle-rotation:rotate(<?php echo $percent_donated*3.6 ?>deg)"></div>	
			<div class="campaign-progress-half-circle campaign-progress-circle-right"></div>	
		</div>
	</div>
<?php else : ?>
	<div class="campaign-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="<?php echo $percent_donated; ?>"><span class="bar" style="width: <?php echo $percent_donated; ?>%;"></span></div>
<?php endif ?>
