/**
 * Block dependencies.
 */
import { CampaignSearchResults } from './search-results';
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
		this.updateSearchResults = this.updateSearchResults.bind( this );
		this.isDropdownOpen      = this.isDropdownOpen.bind( this );

		REFS.search_results = createRef();
	}

	/**
	 * Update state to reflect if dropdown is open.
	 */
	isDropdownOpen( isOpen ) {
		this.setState( {
			dropdown_open: !! isOpen,
		} );
	}

	/**
	 * Update search results.
	 */
	updateSearchResults( evt ) {
		this.setState( {
			search_text: evt.target.value
		} );
	}

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

		return (
			<div className={ divClass + ( this.state.dropdown_open ? ' ' + divClass + '--with-results' : '' ) }>
				<div className="charitable-campaigns-list-card__input-wrapper">
					<Dashicon icon="search" />
					<input type="search"
						className="charitable-campaigns-list-card__search"
						value={ this.state.search_text }
						placeholder={ this.props.search_placeholder }
						tabIndex="0"
						onKeyDown={ this.handleKeyDown }
						onChange={ this.updateSearchResults }
						ref={ REFS.search_field }
					/>
				</div>
				<CampaignSearchResults
					search_string={ this.state.search_text }
					add_or_remove_campaign_callback={ this.props.add_or_remove_campaign_callback }
					selected_campaigns={ this.props.selected_campaigns }
					is_dropdown_open_callback={ this.isDropdownOpen }
					campaign_active_status={ this.props.campaign_active_status }
				/>
			</div>
		);
	}
}

export default CampaignSearchField;