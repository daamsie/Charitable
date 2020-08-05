
/**
 * Check whether a campaign has a thumbnail.
 *
 * @return boolean
 */
export const hasCampaignThumbnail = ( campaign ) => {
	return campaign.hasOwnProperty( '_embedded' ) 
					&& campaign._embedded.hasOwnProperty( 'wp:featuredmedia' )
					&& campaign._embedded['wp:featuredmedia'][0].media_details.sizes.hasOwnProperty('thumbnail');
}

/**
 * Get the thumbnail for a given campaign.
 *
 * @return string
 */
export const getCampaignThumbnail = ( campaign, size = 'thumbnail', width = 30, height = 30 ) => {
	if ( hasCampaignThumbnail( campaign ) ) {
		return (
			<img src={ campaign._embedded['wp:featuredmedia'][0].media_details.sizes[size].source_url } width={ width } height={ height } />
		)
	} else {
		return '';
	}
}