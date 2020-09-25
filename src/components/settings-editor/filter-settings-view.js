/**
 * Block dependencies
 */

import { CampaignSelect } from './../../components/campaign-select/index.js';
import { CampaignCategorySelect } from './../../components/category-select/index.js';
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
 * Filtered campaigns settings view.
 */
export class FilterSettingsView extends Component {

	/**
	 * Render the view.
	 */
	render() {
		const { attributes, setAttributes, updateIncludeInactiveCallback, loadAvailableCategories, availableCampaigns, totalCampaignCount, availableCategories, loadingAvailableCategories } = this.props;
		const { categories, campaignsToExclude, includeInactive, columns } = attributes;

		return (
			<div className="charitable-block-settings-view charitable-block-settings-view--filter">
				<ToggleControl
					label={ __( 'Include inactive campaigns', 'charitable' ) }
					checked={ !! includeInactive }
					onChange={ updateIncludeInactiveCallback }
				/>
				<CampaignCategorySelect
						attributes={ attributes }
						label={ __( 'Filter by category', 'charitable' ) }
						selectedCategories={ categories }
						loadAvailableCategories = { loadAvailableCategories }
						availableCategories = { availableCategories }
						loadingAvailableCategories = { loadingAvailableCategories }
						updateCategorySettingCallback={ ( value ) => setAttributes( { categories: value } ) }
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
						columns={ columns }
						campaignActiveStatus=""
					/>
				</Filter>
			</div>
		);
	}
}