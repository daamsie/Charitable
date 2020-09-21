/**
 * Block dependencies.
 */
import { CampaignSearchResultsDropdown } from './search-results-dropdown';
import { CAMPAIGN_DATA } from './campaign-data';
import { CampaignItem } from './campaign-item';
import { MenuGroup } from '@wordpress/components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { apiFetch } = wp;

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
			// campaign_count: null,
			// campaigns: [],
			// query: '',
			// loaded: false,
			// controllers: [],
		};

		// this.getQuery      = this.getQuery.bind( this );
		//this.updateResults = this.updateResults.bind( this );
	}

	/**
	 * Fetch the first 100 campaigns into memory, for faster search.
	 *
	 * We also record how many campaigns there are, in case there are more than 100.
	 */
	componentDidMount() {
		const self = this;
		
		self.setFilteredResults();

		// apiFetch( {
		// 	path: '/wp/v2/campaigns?_embed&per_page=100&active_status=' + this.props.campaign_active_status,
		// 	parse: false
		// } ).then( ( response ) => {
		// 	response.json().then( ( campaigns ) => {

		// 		self.setState( {
		// 			campaigns: campaigns,
		// 			loaded: true,
		// 			campaign_count: response.headers.get( 'X-WP-Total' ),
		// 		})

		// 		
		// 	} )
		// } );
	}

	/**
	 * Update the preview when component is updated.
	 */
	componentDidUpdate(prevProps) {
		/** 
		 * If either the search string, or the campaigns available to filter over change, 
		 * we need to update the filtered results.
		 */

		if ( this.props.search_string !== prevProps.search_string 
					|| this.props.available_campaigns !== prevProps.available_campaigns ) {
			this.setFilteredResults();
		}
	}

	/**
	 * Filters all the results to only show the ones matching the search query.
	 */

	setFilteredResults() 
	{
		const query          = this.props.search_string;
		const queryLowercase = query.toLowerCase();
		
		if (typeof this.props.available_campaigns === 'undefined') {
			return;
		}

		const filtered       = this.props.available_campaigns.filter( ( campaign ) => {
			if (queryLowercase.length) {
				return campaign.title.rendered.toLowerCase().includes( queryLowercase );
			}
			else {
				return campaign;
			}
		} );

		this.setState( {			
			filtered: filtered,
		} );
	}

	/**
	 * Get the endpoint to run the query.
	 *
	 * @return string
	 */
	// getQuery() {
	// 	if ( ! this.props.search_string.length ) {
	// 		return '';
	// 	}

	// 	return '/wp/v2/campaigns?_embed&per_page=10&search=' + this.props.search_string;
	// }

	/**
	 * Update the search results.
	 */
	// updateResults( retry = 0 ) {
	// 	// Campaigns haven't loaded yet, so retry in 500ms.
	// 	if ( ! this.state.loaded ) {

	// 		// Avoid retrying forever.
	// 		if ( retry < 25 ) {
	// 			retry += 1;
	// 			return window.setTimeout( this.updateResults, 500, retry );
	// 		}
	// 		this.setState( {
	// 			loaded: true,
	// 		} );
	// 	}

		
	// }

	/**
	 * Render.
	 */
	render() {
		const maxResults = 15;
		const { add_or_remove_campaign_callback, selected_campaigns } = this.props;

		if ( 0 === this.state.filtered.length ) {
			return <span className="charitable-campaign-list-card__search-no-results"> { __( 'No campaigns found' ) } </span>;
		}

		// Populate the cache.
		// for ( let campaign of this.state.filtered ) {
		// 	CAMPAIGN_DATA[ campaign.id ] = campaign;
		// }

		return ( this.state.filtered.length > 0 ) && (
			<div className="charitable-campaign-list-card__results">
			<MenuGroup>
				{ this.state.filtered.slice(0, maxResults).map( ( campaign ) => (
					<CampaignItem 
						key = {'campaign-' + campaign.id}
						campaign={campaign}
						isChecked={ selected_campaigns.includes( campaign.id ) }
						add_or_remove_campaign_callback = { add_or_remove_campaign_callback }
						 />
				))}
			</MenuGroup>
			</div>
		)
	}
}

export default CampaignSearchResults;