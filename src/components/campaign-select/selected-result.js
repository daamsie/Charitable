/**
 * Block dependencies
 */
import { getCampaignThumbnail } from './functions';
import { CAMPAIGN_DATA } from './campaign-data';
import { HorizontalRule } from '@wordpress/components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { apiFetch } = wp;
const { Dashicon } = wp.components;

/**
 * Display selected campaigns.
 */
export class CampaignSelectedResults extends Component {

	/**
	 * Constructor
	 */
	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			loaded: false,
		};

		this.getQuery            = this.getQuery.bind( this );
		this.updateCampaignCache = this.updateCampaignCache.bind( this );
	}

	/**
	 * Get the preview when component is first loaded.
	 */
	componentDidMount() {
		this.updateCampaignCache();
	}

	/**
	 * Update the preview when component is updated.
	 */
	componentDidUpdate() {
		if ( this.state.loaded && this.getQuery() !== this.state.query ) {
			this.updateCampaignCache();
		}
	}

	/**
	 * Get the endpoint for the current state of the component.
	 */
	getQuery() {
		if ( ! this.props.selected_campaigns.length ) {
			return '';
		}

		// Determine which campaigns are not already in the cache and only fetch uncached campaigns.
		let uncachedCampaigns = [];
		for( const campaignId of this.props.selected_campaigns ) {
			if ( ! CAMPAIGN_DATA.hasOwnProperty( campaignId ) ) {
				uncachedCampaigns.push( campaignId );
			}
		}

		return uncachedCampaigns.length ? '/wp/v2/campaigns?_embed&include=' + uncachedCampaigns.join( ',' ) : '';
	}

	/**
	 * Add newly fetched campaigns to the cache.
	 */
	updateCampaignCache() {
		const self = this;
		const query = this.getQuery();

		self.setState( {
			query: query,
			loaded: false,
		} );

		// Add new campaigns to cache.
		if ( query.length ) {
			apiFetch( { path: query } ).then( campaigns => {
				if ( campaigns.length ) {
					for ( const campaign of campaigns ) {
						CAMPAIGN_DATA[ campaign.id ] = campaign;
					}
				}

				console.log( campaigns );

				self.setState( {
					loaded: true,
				} );
			} );
		}
	}

	/**
	 * Render.
	 */
	render() {
		const { selected_campaigns, add_or_remove_campaign_callback } = this.props;
		const campaignElements = [];

		for ( const campaignId of selected_campaigns ) {

			// Skip products that aren't in the cache yet or failed to fetch.
			if ( ! CAMPAIGN_DATA.hasOwnProperty( campaignId ) ) {
				continue;
			}

			const campaignData = CAMPAIGN_DATA[ campaignId ];

			campaignElements.push(
				<li className="charitable-campaigns-list-card__item campaign" key={ campaignData.id + '-specific-select-edit' } >
					<div className="charitable-campaigns-list-card__content">
						{ getCampaignThumbnail( campaignData ) }
						<span className="charitable-campaigns-list-card__content-item-name">{ campaignData.title.rendered }</span>
						<button
							type="button"
							id={ 'campaign-' + campaignData.id }
							onClick={ function() { add_or_remove_campaign_callback( campaignData.id ) } } >
								<Dashicon icon="no-alt" />
						</button>
					</div>
				</li>
			);
		}

		let header    = null;
		let campaigns = null;

		if ( selected_campaigns.length > 0 ) {
			campaigns = <ul className="charitable-campaigns-list-card__selected-results-list">{ campaignElements.length ? campaignElements : __( 'Loading...', 'charitable' ) }</ul>
		
			if ( 1 === selected_campaigns.length ) {
				header = __( 'campaign selected', 'charitable' ) 
			} else {
				header = __( 'campaigns selected', 'charitable' ) 
			}

			return (
				<div className="charitable-campaigns-list-card__selected-results-wrapper">
					<div role="menu" className="charitable-campaigns-list-card__selected-results" aria-orientation="vertical" aria-label={ __( 'Selected campaigns', 'charitable' ) }>
						<strong>{ selected_campaigns.length + ' ' + header }</strong>
						{ campaigns }
					</div>
					<HorizontalRule />
				</div>
			);
		}
		else {
			return ("");
		}
	}
}

export default CampaignSelectedResults;