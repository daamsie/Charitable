/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
import { MenuItem, CheckboxControl } from '@wordpress/components';
import { getCampaignThumbnail, hasCampaignThumbnail } from './functions';


/**
 * An individual campaign to choose from
 */

export class CampaignItem extends Component {

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
		this.props.addOrRemoveCampaignCallback( this.props.campaign.id );
	}

	/**
	 * Respond to keyboard events on dropdown elements.
	 */
	handleKeyDown( evt ) {
		if ( 'Enter' === evt.key ) {
			this.props.addOrRemoveCampaignCallback( this.props.campaign.id );
		}
	}

	/**
	 * Render one result in the search results.
	 */
	render() {
		const { isChecked, campaign  } = this.props;

		// const getCardClass = ( campaign ) => {
		// 	let cardClass = 'charitable-campaigns-list-card__content';

		// 	if ( this.props.selected ) {
		// 		cardClass += ' charitable-campaigns-list-card__content--added';
		// 	}

		// 	if ( hasCampaignThumbnail( campaign ) ) {
		// 		cardClass += ' charitable-campaigns-list-card__content--has-thumbnail';
		// 	}
		// 	return cardClass;
		// }

		let isDefault = this.props.index === 0 ? isDefault : '';

		return (
			<MenuItem 
				key={ campaign.id } 
				onClick={ this.handleClick } 
				className="charitable-campaign-list-card__item"
				onKeyDown={ this.handleKeyDown } tabIndex={ this.props.index } >
				<CheckboxControl
						checked={ isChecked }
						id={ 'campaign-' + campaign.id }
						value={ campaign.id }
						label={ campaign.title.rendered }
						/>
					{ getCampaignThumbnail( campaign ) }

			</MenuItem>
		);
	}
}