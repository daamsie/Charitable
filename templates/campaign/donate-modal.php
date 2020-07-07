<?php
/**
 * Displays the donate button to be displayed on campaign pages.
 *
 * Override this template by copying it to yourtheme/charitable/campaign/donate-modal.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Campaign Page
 * @since   1.0.0
 * @version 1.7.0
 */

$campaign = $view_args['campaign'];
$label    = sprintf(
	/* translators: %s: campaign title */
	esc_attr_x( 'Make a donation to %s', 'make a donation to campaign', 'charitable' ),
	get_the_title( $campaign->ID )
);
$button_style      = array_key_exists( 'button_colour', $view_args ) ? 'style="background-color:' . $view_args['button_colour'] . ';"' : '';
$button_text       = array_key_exists( 'button_text', $view_args ) ? $view_args['button_text'] : __( 'Donate', 'charitable' );
$show_amount_field = array_key_exists( 'show_amount_field', $view_args ) && $view_args['show_amount_field'];
?>
<div class="campaign-donation">
	<?php if ( $show_amount_field ) : ?>
		<input type="text" name="donation-amount" />
	<?php endif; ?>
	<a data-trigger-modal="charitable-donation-form-modal"
		class="<?php echo esc_attr( charitable_get_button_class( 'donate' ) ); ?>"
		href="<?php echo charitable_get_permalink( 'campaign_donation_page', array( 'campaign_id' => $campaign->ID ) ); ?>"
		aria-label="<?php echo $label; ?>"
		<?php echo $button_style; ?>
	><?php echo $button_text; ?></a>
</div>
