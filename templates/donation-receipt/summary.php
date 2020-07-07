<?php
/**
 * Displays the donation summary.
 *
 * Override this template by copying it to yourtheme/charitable/donation-receipt/summary.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Donation Receipt
 * @since   1.0.0
 * @version 1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/* @var Charitable_Donation */
$donation = $view_args['donation'];
$amount   = $donation->get_total_donation_amount();

?>
<table class="charitable-donation-summary charitable-table">
	<tbody>
		<tr>
			<th><?php _e( 'Donation Number', 'charitable' ); ?></th>
			<td><?php echo $donation->get_number(); ?></td>
		</tr>
		<tr>
			<th><?php _e( 'Date', 'charitable' ); ?></th>
			<td><?php echo $donation->get_date(); ?></td>
		</tr>
		<tr>
			<th><?php _e( 'Total', 'charitable' ); ?></th>
			<td>
				<?php
					/**
					 * Filter the total donation amount.
					 *
					 * @since  1.5.0
					 *
					 * @param  string              $amount   The default amount to display.
					 * @param  float               $total    The total, unformatted.
					 * @param  Charitable_Donation $donation The Donation object.
					 * @param  string              $context  The context in which this is being shown.
					 * @return string
					 */
					echo apply_filters( 'charitable_donation_receipt_donation_amount', charitable_format_money( $amount ), $amount, $donation, 'summary' )
				?>
			</td>
		</tr>
		<tr>
			<th><?php _e( 'Payment Method', 'charitable' ); ?></th>
			<td><?php echo $donation->get_gateway_label(); ?></td>
		</tr>
	</tbody>
<table>
