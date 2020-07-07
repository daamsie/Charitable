/**
 * Block dependencies
 */
import { getCampaignThumbnail, hasCampaignThumbnail } from './functions';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { Dashicon } = wp.components;

/**
 * Display an individual campaign search result.
 */
export class CampaignSearchResultsDropdownElement extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.handleClick   = this.handleClick.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
	}

	/**
	 * Add campaign to main list and change UI to show it was added.
	 */
	handleClick() {
		this.props.add_or_remove_campaign_callback( this.props.campaign.id );
	}

	/**
	 * Respond to keyboard events on dropdown elements.
	 */
	handleKeyDown( evt ) {
		if ( 'Enter' === evt.key ) {
			this.props.add_or_remove_campaign_callback( this.props.campaign.id );
		}
	}

	/**
	 * Render one result in the search results.
	 */
	render() {
		const campaign = this.props.campaign;
		let icon = this.props.selected ? <Dashicon icon="yes" /> : null;

		const getCardClass = ( campaign ) => {
			let cardClass = 'charitable-campaigns-list-card__content';

			if ( this.props.selected ) {
				cardClass += ' charitable-campaigns-list-card__content--added';
			}

			if ( hasCampaignThumbnail( campaign ) ) {
				cardClass += ' charitable-campaigns-list-card__content--has-thumbnail';
			}
			return cardClass;
		}

		let isDefault = this.props.index === 0 ? isDefault : '';

		return (
			<div className={ getCardClass( campaign ) } onClick={ this.handleClick } onKeyDown={ this.handleKeyDown } tabIndex={ this.props.index } >
				{ getCampaignThumbnail( campaign ) }
				<span className="charitable-campaigns-list-card__content-item-name">{ campaign.title.rendered }</span>
				{ icon }
			</div>
		);
	}
}

export default CampaignSearchResultsDropdownElement;