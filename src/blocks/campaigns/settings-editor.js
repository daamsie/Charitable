/**
 * Block dependencies
 */
import icon from './icon';
import { CampaignSelect } from './../../components/campaign-select/index.js';
import { CampaignCategorySelect } from './../../components/category-select/index.js';
import { Filter } from './../../components/filter/index.js';
import { Placeholder } from '@wordpress/components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	SelectControl,
	HorizontalRule,
	ToggleControl,
	Button,	
} = wp.components;
const { apiFetch } = wp;


/**
 * The campaigns block settings area in Edit mode.
 */
export class SettingsEditor extends Component {

	/**
	 * Construtor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			display_option: 'all',
			available_campaigns: [],
			total_campaign_count: 0,
			loading_available_campaigns: false,
			loaded_available_campaigns: false,
			available_categories: [],
			loading_available_categories: false,
			loaded_available_categories: false,
		}

		this.toggleIncludeInactive      = this.toggleIncludeInactive.bind( this );
		this.updateDisplayOption        = this.updateDisplayOption.bind( this );
		this.getCurrentView             = this.getCurrentView.bind( this );
		this.loadAvailableCategories		= this.loadAvailableCategories.bind(this);
		this.loadAvailableCampaigns			= this.loadAvailableCampaigns.bind(this);
	}

	/**
	 * When the component is mounted, set the display_option.
	 */
	componentDidMount() {
		const { attributes } = this.props;
		const { campaigns, categories, creator } = attributes;

		let display_option = 'all';

		if ( campaigns.length ) {
			display_option = 'specific';
		} else if ( categories.length || creator.length ) {
			display_option = 'filter';
		}

		this.loadAvailableCampaigns();

		this.setState( {
			display_option: display_option,
		} );
	}

	/**
	 *  Fetch top campaigns to search through 
	 */

	loadAvailableCampaigns() {
		
		if ( this.state.loaded_available_campaigns ) {
			// No need to proceed here. 
			return;
		}

		const campaignCount = 100; // Basically trying to fetch them all here.
		this.setState( {
			loading_available_campaigns: true
		});

		let self = this;
		
		apiFetch( {
			path: `/wp/v2/campaigns?_embed&per_page=${campaignCount}`,
			parse: false
		} ).then( ( response ) => {
			response.json().then( ( campaigns ) => {
				self.setState( {
					available_campaigns: campaigns,	
					loading_available_campaigns: false,
					loaded_available_campaigns: true,
					total_campaign_count: response.headers.get( 'X-WP-Total' ),
				})
			} )
		} );
	}

	/**
	 * Fetch the categories that can be used for filtering
	 */

	loadAvailableCategories() {
		
		if ( this.state.loaded_available_categories ) {
			// No need to proceed here. 
			return;
		}

		this.setState( {
			loading_available_categories: true
		});
		
		let self = this;

		apiFetch( {
			path: `/wp/v2/campaignCategories`,
			parse: false
		} ).then( ( response ) => {
			response.json().then( ( categories ) => {
				self.setState( {
					available_categories: categories,
					loading_available_categories: false,
					loaded_available_categories: true
				})
			} )
		} );
	}

	
	/**
	 * Toggle the includeInactive setting.
	 */
	toggleIncludeInactive() {
		const { attributes, setAttributes } = this.props;
		const { includeInactive } = attributes;

		setAttributes( { includeInactive: ! includeInactive } );
	}

	/**
	 * Update the state of display_option.
	 */
	updateDisplayOption( option ) {
		const { attributes, setAttributes } = this.props;
		const options = [ 'all', 'filter', 'specific' ]

		if ( options.includes( option ) ) {
			this.setState( {
				display_option: option,
			} );

			switch ( option ) {
				case 'all' :
					setAttributes( {
						categories: [],
						campaigns: [],
						creator: '',
						includeInactive: false,
					} );
					break;

				case 'filter' :
					setAttributes( {
						campaigns: [],
					} );
					break;

				case 'specific' :
					setAttributes( {
						categories: [],
						campaignsToExclude: [],
						creator: '',
						includeInactive: true,
					} );
					break;
			}
		}
	}

	/**
	 * Return the appropriate view to display.
	 *
	 * @return Component
	 */
	getCurrentView() {
		const { attributes, setAttributes } = this.props;

		let settingsView = null;

		switch ( this.state.display_option ) {
			case 'all' :
				settingsView = <AllSettingsView
					setAttributes={ setAttributes }
					attributes={ attributes }
					update_include_inactive_callback={ this.toggleIncludeInactive }
				/>
				break;

			case 'filter' :
				settingsView = <FilterSettingsView
					setAttributes={ setAttributes }
					attributes={ attributes }
					loadAvailableCategories = {this.loadAvailableCategories}
					available_categories = { this.state.available_categories }
					loading_available_categories = { this.state.loading_available_categories }
					update_include_inactive_callback={ this.toggleIncludeInactive }
				/>
				break;

			case 'specific' :
				settingsView = <SpecificSettingsView
					setAttributes={ setAttributes }
					available_campaigns = {this.state.available_campaigns}
					attributes={ attributes }
				/>
				break;
		}

		return settingsView;

	}

	/**
	 * Render the settings.
	 */
	render() {
		const { attributes, setAttributes } = this.props;
		// const { categories, includeInactive, campaigns, campaignsToExclude, creator, columns, displayOption } = attributes;
		
		return (
			<Placeholder icon={ icon } label={ __( 'Campaigns', 'charitable' ) } instructions= { __('Choose which campaigns to show') }>
				<div className="charitable-block-settings charitable-block-settings-campaigns">
					<DisplayOptions
						attributes={ attributes }
						title={ __( 'Show', 'charitable' ) }
						selected_display_option={ ( this.state.display_option ) }
						update_display_option_callback={ this.updateDisplayOption }
					/>
					<HorizontalRule />
					
					{ this.getCurrentView() }
					
					<Button isPrimary="true" 
									onClick={this.props.update_edit_mode}>
						{ __( 'Done', 'charitable' ) }
					</Button>
				</div>
			</Placeholder>
		);
	}
}

/**
 * List all display options.
 */
class DisplayOptions extends Component {
	/**
	 * Render the display options.
	 */
	render() {
		const { title, selected_display_option, update_display_option_callback } = this.props;
		
		return (
			<SelectControl
				label = { title }
				hideLabelFromVision = "true"
				value = { selected_display_option }
				options={ [
					{ label:  __( 'All campaigns', 'charitable' ) , value: 'all' },
					{ label:  __( 'Filtered campaigns', 'charitable' ) , value: 'filter' },
					{ label:  __( 'Specific campaigns', 'charitable' ) , value: 'specific' },
			] }
			onChange={ update_display_option_callback } />
		);
	}
}

/**
 * Display a single display option row.
 */
// class DisplayOption extends Component {

// 	/**
// 	 * Render the display options.
// 	 */
// 	render() {
// 		const { option, label, selected_display_option, update_display_option_callback } = this.props;

// 		return (
// 			<li className={ option === selected_display_option ? 'active-option' : '' }  onClick={ () => update_display_option_callback( option ) }>
// 				{ option === selected_display_option ? <Dashicon icon="yes" /> : '' }
// 				{ label }
// 				<button onClick={ () => update_display_option_callback( option ) } className="charitable-block-settings-campaigns--display-options-button" type="button">
// 					<Dashicon icon="admin-generic" />
// 				</button>
// 			</li>
// 		);
// 	}
// }

/**
 * Specific campaign settings view.
 */
class SpecificSettingsView extends Component {

	/**
	 * Render the view.
	 */
	render() {
		const { attributes, setAttributes, available_campaigns, total_campaign_count } = this.props;
		const { campaigns, columns }        = attributes;

		return (
			<div className="charitable-block-settings-view charitable-block-settings-view--specific">
				<CampaignSelect
					attributes={ attributes }
					label={ __( 'Search for campaigns to display', 'charitable' ) }
					selected_campaigns={ campaigns }
					update_campaign_setting_callback={ ( value ) => setAttributes( { campaigns: value } ) }
					multiple={ true }
					columns={ columns }
					available_campaigns = { available_campaigns }
					total_campaign_count = { total_campaign_count }
					campaign_active_status=""
				/>
			</div>
		);
	}
}

/**
 * All campaigns settings view.
 */
class AllSettingsView extends Component {

	/**
	 * Render the view.
	 */
	render() {
		const { attributes, setAttributes, update_include_inactive_callback } = this.props;
		const { campaignsToExclude, includeInactive } = attributes;

		return (
			<div className="charitable-block-settings-view charitable-block-settings-view--all">
				<ToggleControl
					label={ __( 'Include inactive campaigns', 'charitable' ) }
					checked={ !! includeInactive }
					onChange={ update_include_inactive_callback }
				/>
				<Filter title={ __( 'Exclude Campaigns', 'charitable' ) } enabled={ false }>
					<CampaignSelect
						attributes={ attributes }
						label={ __( 'Campaigns to exclude', 'charitable' ) }
						search_placeholder={ __( 'Search for campaigns to exclude', 'charitable' ) }
						selected_campaigns={ campaignsToExclude }
						update_campaign_setting_callback={ ( value ) => setAttributes( { campaignsToExclude: value } ) }
						multiple={ true }
						campaign_active_status=""
					/>
				</Filter>
			</div>
		);
	}
}

/**
 * Filtered campaigns settings view.
 */
class FilterSettingsView extends Component {

	/**
	 * Render the view.
	 */
	render() {
		const { attributes, setAttributes, update_include_inactive_callback, loadAvailableCategories, available_categories, loading_available_categories } = this.props;
		const { categories, campaignsToExclude, includeInactive, columns } = attributes;

		return (
			<div className="charitable-block-settings-view charitable-block-settings-view--filter">
				<ToggleControl
					label={ __( 'Include inactive campaigns', 'charitable' ) }
					checked={ !! includeInactive }
					onChange={ update_include_inactive_callback }
				/>
				<CampaignCategorySelect
						attributes={ attributes }
						label={ __( 'Filter by category', 'charitable' ) }
						selected_categories={ categories }
						loadAvailableCategories = { loadAvailableCategories }
						available_categories = { available_categories }
						loading_available_categories = { loading_available_categories }
						update_category_setting_callback={ ( value ) => setAttributes( { categories: value } ) }
				/>
				<Filter title={ __( 'Exclude Campaigns', 'charitable' ) } enabled={ false }>
					<CampaignSelect
						attributes={ attributes }
						label={ __( 'Campaigns to exclude', 'charitable' ) }
						search_placeholder={ __( 'Search for campaigns to exclude', 'charitable' ) }
						selected_campaigns={ campaignsToExclude }
						update_campaign_setting_callback={ ( value ) => setAttributes( { campaignsToExclude: value } ) }
						multiple={ true }
						columns={ columns }
						campaign_active_status=""
					/>
				</Filter>
			</div>
		);
	}
}