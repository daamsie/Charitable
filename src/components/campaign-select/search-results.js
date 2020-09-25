/**
 * Block dependencies.
 */
import { CampaignSearchResultsItem } from './search-results-item';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Display campaign search results.
 */
export class CampaignSearchResults extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			filtered: [],
		};

		this.updateFilteredResults = this.updateFilteredResults.bind( this );
		
	}

	/**
	 * Set the filtered results when mounting
	 */
	componentDidMount() {
		this.updateFilteredResults();
	}

	/**
	 * Update the filtered results when the component is updated.
	 */
	componentDidUpdate(prevProps ) {
		if ( this.props.searchText !== prevProps.searchText 
				 || this.props.availableCampaigns.length != prevProps.availableCampaigns.length) {
			this.updateFilteredResults();
		}
	}

	/**
	 * Filters all the results to only show the ones matching the search query.
	 */

	updateFilteredResults(  ) {
		const query          = this.props.searchText;
		const queryLowercase = query.toLowerCase();
		const filtered       = this.props.availableCampaigns.filter( ( campaign ) => {
			return campaign.title.rendered.toLowerCase().includes( queryLowercase );
		} );	

		this.setState( {
			filtered: filtered,
		} );
	}

	/**
	 * Render.
	 */
	render() {
		const { selectedCampaigns, addOrRemoveCampaignCallback } = this.props;

		if ( 0 === this.state.filtered.length ) {
			return <span className="charitable-campaign-list-card__search-no-results"> { __( 'No campaigns found' ) } </span>;
		}

		const campaignElements = [];

		for ( let campaign of this.state.filtered ) {
			campaignElements.push(
				<CampaignSearchResultsItem
					key={ "campaign-" + campaign.id }
					campaign={ campaign }
					addOrRemoveCampaignCallback={ addOrRemoveCampaignCallback }
					isSelected={ selectedCampaigns.includes( campaign.id ) }
				/>
			)
		}

		return (
			<div className="charitable-campaign-list-card__results">
				{ campaignElements }
			</div>
		)
	}
}