import { bind } from 'file-loader';
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
			selectedCampaigns: props.selectedCampaigns || [],
			filteredCampaigns: props.availableCampaigns,
		}

		this.addOrRemoveCampaign = this.addOrRemoveCampaign.bind( this );
		this.filterOutInactiveCampaigns = this.filterOutInactiveCampaigns.bind( this );
		this.showAllCampaigns = this.showAllCampaigns.bind( this );
	}

	/**
	 * Set the filtered results when mounting
	 */
	componentDidMount() {
		if (!this.props.attributes.includeInactive) {
			this.filterOutInactiveCampaigns();
		}
	}

	/**
	 * Update the filtered results when the component is updated.
	 */
	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			if (!this.props.attributes.includeInactive) {
				this.filterOutInactiveCampaigns();
			}
			else {
				this.showAllCampaigns();
			}
		}
	}

	/**
	 * Reset to show all campaigns if needed.
	 */

	showAllCampaigns() {
		this.setState( {
			filteredCampaigns: this.props.availableCampaigns,
		} );
	}

	/**
	 * Filter out inactive campaigns if needed.
	 */

	filterOutInactiveCampaigns() {
		const filtered = this.props.availableCampaigns.filter( ( campaign ) => campaign.active);
		this.setState( {
			filteredCampaigns: filtered,
		} );
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
					availableCampaigns = { this.state.filteredCampaigns }
					addOrRemoveCampaignCallback={ ( campaign ) => this.addOrRemoveCampaign( campaign ) }
					columns={ columns }
					campaignActiveStatus={ campaignActiveStatus }
				/>
				<CampaignSearchField
					label={ label }
					addOrRemoveCampaignCallback={ ( campaign ) => this.addOrRemoveCampaign( campaign ) }
					selectedCampaigns={ this.state.selectedCampaigns }
					campaignActiveStatus={ campaignActiveStatus }
					availableCampaigns = { this.state.filteredCampaigns }
					loadingAvailableCampaigns = { loadingAvailableCampaigns }
					totalCampaignCount = { totalCampaignCount }
				/>
			</div>
		)
	}
}

export default CampaignSelect;