/**
 * Block dependencies.
 */
import { CampaignSearchResultsDropdown } from './search-results-dropdown';
import { CAMPAIGN_DATA } from './campaign-data';

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
			campaign_count: null,
			campaigns: [],
			query: '',
			loaded: false,
			controllers: [],
		};

		this.getQuery      = this.getQuery.bind( this );
		this.updateResults = this.updateResults.bind( this );
	}

	/**
	 * Fetch the first 100 campaigns into memory, for faster search.
	 *
	 * We also record how many campaigns there are, in case there are more than 100.
	 */
	componentDidMount() {
		const self = this;

		apiFetch( {
			path: '/wp/v2/campaigns?_embed&per_page=100&active_status=' + this.props.campaign_active_status,
			parse: false
		} ).then( ( response ) => {
			response.json().then( ( campaigns ) => {

				self.setState( {
					campaigns: campaigns,
					loaded: true,
					campaign_count: response.headers.get( 'X-WP-Total' ),
				})

				self.updateResults();
			} )
		} );
	}

	/**
	 * Update the preview when component is updated.
	 */
	componentDidUpdate() {
		if ( this.props.search_string !== this.state.query ) {
			this.updateResults();
		}
	}

	/**
	 * Get the endpoint to run the query.
	 *
	 * @return string
	 */
	getQuery() {
		if ( ! this.props.search_string.length ) {
			return '';
		}

		return '/wp/v2/campaigns?_embed&per_page=10&search=' + this.props.search_string;
	}

	/**
	 * Update the search results.
	 */
	updateResults( retry = 0 ) {
		// Campaigns haven't loaded yet, so retry in 500ms.
		if ( ! this.state.loaded ) {

			// Avoid retrying forever.
			if ( retry < 25 ) {
				retry += 1;
				return window.setTimeout( this.updateResults, 500, retry );
			}

			this.setState( {
				loaded: true,
			} );
		}

		const query          = this.props.search_string;
		const queryLowercase = query.toLowerCase();
		const filtered       = this.state.campaigns.filter( ( campaign ) => {
			return campaign.title.rendered.toLowerCase().includes( queryLowercase );
		} );

		this.setState( {
			query: query,
			filtered: filtered,
		} );
	}

	/**
	 * Render.
	 */
	render() {
		if ( ! this.state.loaded || ! this.state.query.length ) {
			return null;
		}

		if ( 0 === this.state.filtered.length ) {
			return <span className="charitable-campaign-list-card__search-no-results"> { __( 'No campaigns found' ) } </span>;
		}

		// Populate the cache.
		for ( let campaign of this.state.filtered ) {
			CAMPAIGN_DATA[ campaign.id ] = campaign;
		}

		return (
			<CampaignSearchResultsDropdown
				campaigns={ this.state.filtered }
				add_or_remove_campaign_callback={ this.props.add_or_remove_campaign_callback }
				selected_campaigns={ this.props.selected_campaigns }
				is_dropdown_open_callback={ this.props.is_dropdown_open_callback }
			/>
		);
	}
}

export default CampaignSearchResults;