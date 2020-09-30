/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

import { CheckboxControl } from '@wordpress/components';
import { getCampaignThumbnail } from './functions';

/**
 * Display campaign search results.
 */
export class CampaignSearchResultsItem extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.toggleChecked = this.toggleChecked.bind(this);
	}

	/** 
	*	toggleChecked 
	*
	* Triggers the callback to toggle whether this campaign is checked or not
	*/

	toggleChecked() {
		this.props.addOrRemoveCampaignCallback(this.props.campaign.id);
	}

	/**
	 * Render.
	 */
	render() {
		const { campaign, isSelected } = this.props;
		const label =  campaign.title.rendered;
		
		return (
			<label className="charitable-campaign-list-card__item">
					<CheckboxControl
							label={ label }
							checked={ isSelected }	
							onChange={ this.toggleChecked }
					/>
					{ !campaign.active && <span className='label inactive'>{__( 'Inactive' )}</span>}
					{ getCampaignThumbnail( campaign ) }
				</label>
		)
	}
}