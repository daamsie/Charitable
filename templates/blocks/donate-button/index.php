<?php
/**
 * Displays the button in the campaign stats block.
 *
 * Override this template by copying it to yourtheme/charitable/blocks/donate-button/index.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Blocks
 * @since   1.7.0
 * @version 1.7.0
 */

$campaign = charitable_get_campaign( $view_args['campaign'] );

if ( $view_args['buttonOpensModal'] ) {
	$template = 'campaign/donate-modal.php';

	charitable_template( 'campaign/donate-modal-window.php', array( 'campaign' => $campaign ) );
} else {
	$template = 'campaign/donate-button.php';
}

charitable_template(
	$template,
	array(
		'campaign'          => $campaign,
		'button_colour'     => $view_args['highlightColour'],
		'button_text'       => $view_args['buttonText'],
		'button_size'       => $view_args['buttonSize'],
		'show_amount_field' => $view_args['buttonHasAmount'],
	)
);
