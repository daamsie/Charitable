/**
 * Block dependencies
 */

import { getCampaignThumbnail, getCampaignPositionsArray } from './functions';
import { HorizontalRule } from '@wordpress/components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
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
			campaignPositions: {},
		};

		this.updateCampaignPositions = this.updateCampaignPositions.bind( this );
	}

	/**
	 * Get the preview when component is first loaded.
	 */
	componentDidMount() {
		this.updateCampaignPositions();
	}

	/**
	 * Update the preview when component is updated.
	 */
	componentDidUpdate(prevProps) {
		if ( this.props.availableCampaigns !== prevProps.availableCampaigns  ) {
			this.updateCampaignPositions();
		}
	}

	/**
	 * Store the current campaign positions for referencing
	 */
	updateCampaignPositions() {
		const campaignPositions = getCampaignPositionsArray(this.props.availableCampaigns);
		this.setState( {
			campaignPositions: campaignPositions
		} );
	}

	/**
	 * Render.
	 */
	render() {
		const { selectedCampaigns, addOrRemoveCampaignCallback } = this.props;
		const campaignElements = [];

		for ( const campaignId of selectedCampaigns ) {

			// Skip products that aren't in the cache yet or failed to fetch.
			if ( ! this.state.campaignPositions.hasOwnProperty( campaignId ) ) {
				continue;
			}

			const campaignData = this.props.availableCampaigns[ this.state.campaignPositions[campaignId] ];

			campaignElements.push(
				<li className="charitable-campaigns-list-card__item campaign" key={ campaignData.id + '-specific-select-edit' } >
					<div className="charitable-campaigns-list-card__content">
						{ getCampaignThumbnail( campaignData ) }
						<span className="charitable-campaigns-list-card__content-item-name">{ campaignData.title.rendered }</span>
						<button
							type="button"
							id={ 'campaign-' + campaignData.id }
							onClick={ function() { addOrRemoveCampaignCallback( campaignData.id ) } } >
								<Dashicon icon="no-alt" />
						</button>
					</div>
				</li>
			);
		}

		let header    = null;
		let campaigns = null;

		if ( 0 < selectedCampaigns.length ) {
			campaigns = <ul className="charitable-campaigns-list-card__selected-results-list">{ campaignElements.length ? campaignElements : __( 'Loading...', 'charitable' ) }</ul>
		
			if ( 1 === selectedCampaigns.length ) {
				header = __( 'campaign selected', 'charitable' ) 
			} else {
				header = __( 'campaigns selected', 'charitable' ) 
			}

			return (
				<div className="charitable-campaigns-list-card__selected-results-wrapper">
					<div role="menu" className="charitable-campaigns-list-card__selected-results" aria-orientation="vertical" aria-label={ __( 'Selected campaigns', 'charitable' ) }>
						<strong>{ selectedCampaigns.length + ' ' + header }</strong>
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