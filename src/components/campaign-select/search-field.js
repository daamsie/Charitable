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
			searchText: '',
		};
	}

	/**
	 * Render the campaign search UI.
	 */
	render() {
		const divClass = 'charitable-campaigns-list-card__search-wrapper';
		const { label, searchPlaceholder, addOrRemoveCampaignCallback, availableCampaigns, loadingAvailableCampaigns, selectedCampaigns } = this.props;
		let loadingState = loadingAvailableCampaigns ? <Spinner /> : '';

		return (
			<div>
				<div className="charitable-campaigns-list-card__input-wrapper">
					<TextControl
							label={ label }
							value={ this.state.searchText }
							onChange={ ( searchText ) => this.setState( { searchText } ) }
							placeholder={ searchPlaceholder }
					/>
					<Dashicon icon="search" />
				</div>
				
				{ loadingState }
				
				<CampaignSearchResults
					searchText={ this.state.searchText }
					addOrRemoveCampaignCallback={ addOrRemoveCampaignCallback }
					selectedCampaigns={ selectedCampaigns }
					availableCampaigns = { availableCampaigns }
				/>
			</div>
		);
	}
}

export default CampaignSearchField;