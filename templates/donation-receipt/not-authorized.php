<?php
/**
 * Displays the notice to say that the user cannot access the donation receipt.
 *
 * Override this template by copying it to yourtheme/charitable/donation-receipt/not-authorized.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Donation Receipt
 * @since   1.1.2
 * @version 1.6.26
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$content = $view_args['content'];

if ( is_user_logged_in() ) : ?>
	<div class="charitable-notice">
		<?php _e( 'You do not have access to this donation receipt.', 'charitable' ); ?>
	</div>
<?php else : ?>
	<div class="charitable-notice">
		<?php _e( 'You must be logged in to access your donation receipt.', 'charitable' ); ?>
	</div>
	<?php echo Charitable_Login_Shortcode::display( array( 'redirect' => charitable_get_current_url() ) ); ?>
<?php endif ?>
