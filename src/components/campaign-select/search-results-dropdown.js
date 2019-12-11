/**
 * Block dependencies.
 */
import { CampaignSearchResultsDropdownElement } from './search-results-dropdown-element';
import { REFS } from './refs';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { NavigableMenu } = wp.components;

/**
 * Render the dropdown with campaign search results.
 */
export class CampaignSearchResultsDropdown extends Component {

	/**
	 * Set the state of the dropdown to open.
	 */
	componentDidMount() {
		this.props.is_dropdown_open_callback( true );
	}

	/**
	 * Set the state of the dropdown to closed.
	 */
	componentDidUnmount() {
		this.props.is_dropdown_open_callback( false );
	}

	/**
	 * Render dropdown.
	 */
	render() {
		const { campaigns, add_or_remove_campaign_callback, selected_campaigns } = this.props;

		let campaignElements = [];
		let index = 0;

		for ( let campaign of campaigns ) {
			campaignElements.push(
				<CampaignSearchResultsDropdownElement
					index= { index }
					campaign={ campaign }
					add_or_remove_campaign_callback={ add_or_remove_campaign_callback }
					selected={ selected_campaigns.includes( campaign.id ) }
				/>
			);

			index += 1;
		}

		return (
			<NavigableMenu
				className="charitable-campaigns-list-card__search-results"
				aria-label={ __( 'Campaign list', 'charitable' ) }
				ref={ REFS.search_results }
			>
				{ campaignElements }
			</NavigableMenu>
		);
	}
}

export default CampaignSearchResultsDropdown;