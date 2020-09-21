/**
 * Block dependencies.
 */
import { CampaignSearchResults } from './search-results';
import { TextControl, Spinner } from '@wordpress/components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component  } = wp.element;
const { Dashicon } = wp.components;

/**
 * Search for specific campaigns.
 */
export class CampaignSearchField extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			search_text: '',
		};
	}

	/**
	 * Render the campaign search UI.
	 */
	render() {
		const divClass = 'charitable-campaigns-list-card__search-wrapper';
		const { label, search_placeholder, add_or_remove_campaign_callback, campaign_active_status, available_campaigns, loading_available_campaigns, total_campaign_count, selected_campaigns } = this.props;
		let loadingState = loading_available_campaigns ? <Spinner /> : '';

		return (
			<div>
				<div className="charitable-campaigns-list-card__input-wrapper">
					<Dashicon icon="search" />
					<TextControl
							label={ label }
							value={ this.state.search_text }
							onChange={ ( search_text ) => this.setState( { search_text } ) }
							placeholder={ search_placeholder }
					/>	
				</div>

				{ loadingState }
				
				<CampaignSearchResults
					search_text={ this.state.search_text }
					add_or_remove_campaign_callback={ add_or_remove_campaign_callback }
					selected_campaigns={ selected_campaigns }
					available_campaigns = { available_campaigns }
					total_campaign_count = { total_campaign_count }
					campaign_active_status={ campaign_active_status }
				/>
			</div>
		);
	}
}

export default CampaignSearchField;