/**
 * Block dependencies
 */

import { CampaignSelect } from './../../components/campaign-select/index.js';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Specific campaign settings view.
 */
export class SpecificSettingsView extends Component {

	/**
	 * Render the view.
	 */
	render() {
		const { attributes, setAttributes, availableCampaigns, totalCampaignCount } = this.props;
		const { campaigns, columns }        = attributes;

		return (
			<div className="charitable-block-settings-view charitable-block-settings-view--specific">
				<CampaignSelect
					attributes={ attributes }
					label={ __( 'Search for campaigns to display', 'charitable' ) }
					selectedCampaigns={ campaigns }
					updateCampaignSettingCallback={ ( value ) => setAttributes( { campaigns: value } ) }
					multiple={ true }
					columns={ columns }
					availableCampaigns = { availableCampaigns }
					totalCampaignCount = { totalCampaignCount }
					campaignActiveStatus=""
				/>
			</div>
		);
	}
}