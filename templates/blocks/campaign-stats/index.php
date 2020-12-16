<?php
/**
 * Displays the progress bar in the campaign stats block.
 *
 * Override this template by copying it to yourtheme/charitable/blocks/campaign-stats/index.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Blocks
 * @since   1.7.0
 * @version 1.7.0
 */

$campaign = charitable_get_campaign( $view_args['campaign'] );

?>
<div class="charitable-campaign-stats">
	<?php
	if ( $view_args['showAmountRaised'] ) :
		?>
		<div class="charitable-campaign-stat charitable-campaign-stat-amount-raised">
			<?php
			printf(
				/* translators: %s: amount */
				__( '%s Donated', 'charitable' ),
				'<span class="charitable-campaign-stat-figure">' . $campaign->get_donated_amount_formatted() . '</span>'
			);
			?>
		</div>
		<?php
	endif;

	if ( $view_args['showPercentRaised'] ) :
		?>
		<div class="charitable-campaign-stat charitable-campaign-stat-percent-raised">
			<?php
			printf(
				/* translators: %s: amount raised in span */
				__( '%s Raised', 'charitable' ),
				'<span class="charitable-campaign-stat-figure">' . $campaign->get_percent_donated() . '</span>'
			);
			?>
		</div>
		<?php
	endif;

	if ( $view_args['showDonorCount'] ) :
		?>
		<div class="charitable-campaign-stat charitable-campaign-stat-donor-count">
			<?php
			printf(
				/* translators: %s: number of donors in span */
				__( '%s Donors', 'charitable' ),
				'<span class="charitable-campaign-stat-figure">' . $campaign->get_donor_count() . '</span>'
			);
			?>
		</div>
		<?php
	endif;

	if ( $view_args['showDonationCount'] ) :
		?>
		<div class="charitable-campaign-stat charitable-campaign-stat-donation-count">
			<?php
			printf(
				/* translators: %s: number of donations in span */
				__( '%s Donations', 'charitable' ),
				'<span class="charitable-campaign-stat-figure">' . $campaign->get_donation_count() . '</span>'
			);
			?>
		</div>
		<?php
	endif;

	if ( $view_args['showTimeLeft'] ) :
		?>
		<div class="charitable-campaign-stat charitable-campaign-stat-time-left">
			<?php echo $campaign->get_time_left( 'charitable-campaign-stat-figure' ); ?>
		</div>
		<?php
	endif;
	?>
</div><!-- .charitable-campaign-stats -->
