<?php
/**
 * Returns an array of all the campaign block editor fields.
 *
 * @package   Charitable/Campaign Block Editor Fields
 * @author    Eric Daams
 * @copyright Copyright (c) 2019, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Filter the set of default campaign fields.
 *
 * This filter is provided primarily for internal use by Charitable
 * extensions, as it allows us to add to the registered campaign fields
 * as soon as possible.
 *
 * @since 1.7.0
 *
 * @param array $fields The multi-dimensional array of keys in $key => $args format.
 */
return apply_filters(
	'charitable_default_campaign_block_editor_fields',
	array(
		'goal'         => array(
			'section' => 'campaign-goal',
			'label'   => null,
		),
		'end_date'     => array(
			'section'  => 'campaign-end-date',
			'priority' => 2,
		),
		'has_end_date' => array(
			'section'  => 'campaign-end-date',
			'priority' => 1,
			'type'     => 'radio',
		),
	)
);
