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
			selected_campaigns: props.selected_campaigns || []
		}

		this.addOrRemoveCampaign = this.addOrRemoveCampaign.bind( this );
	}

	/**
	 * Add or remove a campaign.
	 *
	 * @param id int Campaign ID.
	 */
	addOrRemoveCampaign( id ) {

		let selected_campaigns = this.state.selected_campaigns;

		// Add the campaign
		if ( ! selected_campaigns.includes( id ) ) {
			if ( !! this.props.multiple ) {
				selected_campaigns.push( id );
			} else {
				selected_campaigns = [ id ];
			}
		} else {
			selected_campaigns = selected_campaigns.filter( campaign => campaign !== id );
		}

		this.setState( {
			selected_campaigns: selected_campaigns
		} );

		this.props.update_campaign_setting_callback( selected_campaigns );
	}

	/**
	 * Render the list of campaigns and the search input.
	 */
	render() {
		const { label, columns, campaign_active_status, available_campaigns, loading_available_campaigns, total_campaign_count } = this.props;

		// let fieldLabel = label ? <label>{ label }</label> : null;

		return (
			<div className="charitable-campaigns-field">
				<CampaignSelectedResults
					selected_campaigns={ this.state.selected_campaigns }
					available_campaigns = { available_campaigns }
					add_or_remove_campaign_callback={ ( campaign ) => this.addOrRemoveCampaign( campaign ) }
					columns={ columns }
					campaign_active_status={ campaign_active_status }
				/>
				<CampaignSearchField
					label={ label }
					add_or_remove_campaign_callback={ ( campaign ) => this.addOrRemoveCampaign( campaign ) }
					selected_campaigns={ this.state.selected_campaigns }
					campaign_active_status={ campaign_active_status }
					available_campaigns = { available_campaigns }
					loading_available_campaigns = { loading_available_campaigns }
					total_campaign_count = { total_campaign_count }
				/>
			</div>
		)
	}
}

export default CampaignSelect;