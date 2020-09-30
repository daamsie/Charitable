<?php
/**
 * Displays the campaign thumbnail.
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Campaign
 * @since   1.0.0
 * @version 1.7.0
 */

$campaign = $view_args['campaign'];
$size     = $view_args['size'];

if ( has_post_thumbnail( $campaign->ID ) ) :
	echo get_the_post_thumbnail( $campaign->ID, apply_filters( 'charitable_campaign_loop_thumbnail_size', $size ) );
endif;
