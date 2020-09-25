/**
 * Block dependencies
 */
import { CampaignSearchField } from './search-field';
import { CampaignSelectedResults } from './selected-result';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Display a list of campaigns with checkboxes and a search filter.
 */
export class CampaignSelect extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			selectedCampaigns: props.selectedCampaigns || []
		}

		this.addOrRemoveCampaign = this.addOrRemoveCampaign.bind( this );
	}

	/**
	 * Add or remove a campaign.
	 *
	 * @param id int Campaign ID.
	 */
	addOrRemoveCampaign( id ) {

		let selectedCampaigns = this.state.selectedCampaigns;

		// Add the campaign
		if ( ! selectedCampaigns.includes( id ) ) {
			if ( !! this.props.multiple ) {
				selectedCampaigns.push( id );
			} else {
				selectedCampaigns = [ id ];
			}
		} else {
			selectedCampaigns = selectedCampaigns.filter( campaign => campaign !== id );
		}

		this.setState( {
			selectedCampaigns: selectedCampaigns
		} );

		this.props.updateCampaignSettingCallback( selectedCampaigns );
	}

	/**
	 * Render the list of campaigns and the search input.
	 */
	render() {
		const { label, columns, campaignActiveStatus, availableCampaigns, loadingAvailableCampaigns, totalCampaignCount } = this.props;

		// let fieldLabel = label ? <label>{ label }</label> : null;

		return (
			<div className="charitable-campaigns-field">
				<CampaignSelectedResults
					selectedCampaigns={ this.state.selectedCampaigns }
					availableCampaigns = { availableCampaigns }
					addOrRemoveCampaignCallback={ ( campaign ) => this.addOrRemoveCampaign( campaign ) }
					columns={ columns }
					campaignActiveStatus={ campaignActiveStatus }
				/>
				<CampaignSearchField
					label={ label }
					addOrRemoveCampaignCallback={ ( campaign ) => this.addOrRemoveCampaign( campaign ) }
					selectedCampaigns={ this.state.selectedCampaigns }
					campaignActiveStatus={ campaignActiveStatus }
					availableCampaigns = { availableCampaigns }
					loadingAvailableCampaigns = { loadingAvailableCampaigns }
					totalCampaignCount = { totalCampaignCount }
				/>
			</div>
		)
	}
}

export default CampaignSelect;