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

charitable_template(
	'campaign/donate-button.php',
	array(
		'campaign'      => charitable_get_campaign( $view_args['campaign'] ),
		'button_colour' => $view_args['highlightColour'],
		'button_text'   => $view_args['buttonText'],
	)
);
