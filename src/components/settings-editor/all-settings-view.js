/**
 * Block dependencies
 */

import { CampaignSelect } from './../../components/campaign-select/index.js';
import { Filter } from './../../components/filter/index.js';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	ToggleControl,
} = wp.components;


/**
 * All campaigns settings view.
 */
export class AllSettingsView extends Component {

	/**
	 * Render the view.
	 */
	render() {
		const { attributes, setAttributes, availableCampaigns, totalCampaignCount, updateIncludeInactiveCallback } = this.props;
		const { campaignsToExclude, includeInactive } = attributes;

		return (
			<div className="charitable-block-settings-view charitable-block-settings-view--all">
				<ToggleControl
					label={ __( 'Include inactive campaigns', 'charitable' ) }
					checked={ !! includeInactive }
					onChange={ updateIncludeInactiveCallback }
				/>
				<Filter title={ __( 'Exclude Campaigns', 'charitable' ) } enabled={ false }>
					<CampaignSelect
						attributes={ attributes }
						label={ __( 'Campaigns to exclude', 'charitable' ) }
						searchPlaceholder={ __( 'Search for campaigns to exclude', 'charitable' ) }
						selectedCampaigns={ campaignsToExclude }
						availableCampaigns = { availableCampaigns }
						totalCampaignCount = { totalCampaignCount }
						updateCampaignSettingCallback={ ( value ) => setAttributes( { campaignsToExclude: value } ) }
						multiple={ true }
						campaignActiveStatus=""
					/>
				</Filter>
			</div>
		);
	}
}
