/**
 * Block dependencies.
 */
import { CampaignSearchResults } from './search-results';
import { TextControl } from '@wordpress/components';
import { REFS } from './refs';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, findDOMNode, createRef  } = wp.element;
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
			dropdown_open: false,
		};

		this.handleKeyDown       = this.handleKeyDown.bind( this );
		// this.isDropdownOpen      = this.isDropdownOpen.bind( this );

		REFS.search_results = createRef();
	}

	/**
	 * Update state to reflect if dropdown is open.
	 */
	// isDropdownOpen( isOpen ) {
	// 	this.setState( {
	// 		dropdown_open: !! isOpen,
	// 	} );
	// }

	/**
	 * Handle key strokes.
	 *
	 * When a down arrow key is pressed, shift focus to first search result.
	 */
	handleKeyDown( evt ) {
		if ( 'ArrowDown' === evt.key ) {
			evt.stopPropagation();

			const results = findDOMNode( REFS.search_results.current );

			if ( results ) {
				results.firstElementChild.focus();
			}
		}
	}

	/**
	 * Render the campaign search UI.
	 */
	render() {
		const divClass = 'charitable-campaigns-list-card__search-wrapper';
		const { label, search_placeholder, add_or_remove_campaign_callback, campaign_active_status, available_campaigns, total_campaign_count, selected_campaigns } = this.props;

		return (
			<div className={ divClass + ( this.state.dropdown_open ? ' ' + divClass + '--with-results' : '' ) }>
				<div className="charitable-campaigns-list-card__input-wrapper">
					<Dashicon icon="search" />
					<TextControl
							label={ label }
							value={ this.state.search_text }
							onChange={ ( search_text ) => this.setState( { search_text } ) }
							onKeyDown={ this.handleKeyDown }
							placeholder={ search_placeholder }
					/>	
				</div>
				<CampaignSearchResults
					search_string={ this.state.search_text }
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