/**
 * Block dependencies
 */
import icon from './icon';
import { Placeholder } from '@wordpress/components';
import { DisplayOptions } from './../../components/settings-editor/display-options.js';
import { SpecificSettingsView } from './../../components/settings-editor/specific-settings-view.js';
import { FilterSettingsView } from './../../components/settings-editor/filter-settings-view.js';
import { AllSettingsView } from './../../components/settings-editor/all-settings-view.js';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	HorizontalRule,
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
			displayOption: 'all',
			availableCampaigns: [],
			totalCampaignCount: 0,
			loadingAvailableCampaigns: false,
			loadedAvailableCampaigns: false,
			availableCategories: [],
			loadingAvailableCategories: false,
			loadedAvailableCategories: false,
		}

		this.toggleIncludeInactive      = this.toggleIncludeInactive.bind( this );
		this.updateDisplayOption        = this.updateDisplayOption.bind( this );
		this.getCurrentView             = this.getCurrentView.bind( this );
		this.loadAvailableCategories		= this.loadAvailableCategories.bind(this);
		this.loadAvailableCampaigns			= this.loadAvailableCampaigns.bind(this);
	}

	/**
	 * When the component is mounted, set the displayOption.
	 */
	componentDidMount() {
		const { attributes } = this.props;
		const { campaigns, categories, creator } = attributes;

		let displayOption = 'all';

		if ( campaigns.length ) {
			displayOption = 'specific';
		} else if ( categories.length || creator.length ) {
			displayOption = 'filter';
		}

		this.loadAvailableCampaigns();

		this.setState( {
			displayOption: displayOption,
		} );
	}

	/**
	 *  Fetch top campaigns to search through 
	 */

	loadAvailableCampaigns() {
		
		if ( this.state.loadedAvailableCampaigns ) {
			// No need to proceed here. 
			return;
		}

		const campaignCount = 100; // Basically trying to fetch them all here.
		const nowDateString = new Date().toString();
		this.setState( {
			loadingAvailableCampaigns: true
		});

		let self = this;
		
		apiFetch( {
			path: `/wp/v2/campaigns?_embed&per_page=${campaignCount}`,
			parse: false
		} ).then( ( response ) => {
			response.json().then( ( campaigns ) => {
				// Mark up any inactive ones for easy reference.
				campaigns = campaigns.map((campaign) => Object.assign(campaign, { active: nowDateString > campaign.end_date && campaign.end_date !== '' ? false : true }));

				self.setState( {
					availableCampaigns: campaigns,	
					loadingAvailableCampaigns: false,
					loadedAvailableCampaigns: true,
					totalCampaignCount: response.headers.get( 'X-WP-Total' ),
				})
			} )
		} );
	}

	/**
	 * Fetch the categories that can be used for filtering
	 */

	loadAvailableCategories() {
		
		if ( this.state.loadedAvailableCategories ) {
			// No need to proceed here. 
			return;
		}

		this.setState( {
			loadingAvailableCategories: true
		});
		
		let self = this;

		apiFetch( {
			path: `/wp/v2/campaignCategories`,
			parse: false
		} ).then( ( response ) => {
			response.json().then( ( categories ) => {
				self.setState( {
					availableCategories: categories,
					loadingAvailableCategories: false,
					loadedAvailableCategories: true
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
	 * Update the state of displayOption.
	 */
	updateDisplayOption( option ) {
		const { attributes, setAttributes } = this.props;
		const options = [ 'all', 'filter', 'specific' ]

		if ( options.includes( option ) ) {
			this.setState( {
				displayOption: option,
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

		switch ( this.state.displayOption ) {
			case 'all' :
				settingsView = <AllSettingsView
					setAttributes={ setAttributes }
					attributes={ attributes }
					availableCampaigns = {this.state.availableCampaigns}
					loadingAvailableCampaigns = { this.state.loadingAvailableCampaigns }
					updateIncludeInactiveCallback={ this.toggleIncludeInactive }
				/>
				break;

			case 'filter' :
				settingsView = <FilterSettingsView
					setAttributes={ setAttributes }
					attributes={ attributes }
					loadAvailableCategories = {this.loadAvailableCategories}
					availableCampaigns = {this.state.availableCampaigns}
					availableCategories = { this.state.availableCategories }
					loadingAvailableCampaigns = { this.state.loadingAvailableCampaigns }
					loadingAvailableCategories = { this.state.loadingAvailableCategories }
					updateIncludeInactiveCallback={ this.toggleIncludeInactive }
				/>
				break;

			case 'specific' :
				settingsView = <SpecificSettingsView
					setAttributes={ setAttributes }
					availableCampaigns = {this.state.availableCampaigns}
					loadingAvailableCampaigns = { this.state.loadingAvailableCampaigns }
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
						selectedDisplayOption={ ( this.state.displayOption ) }
						updateDisplayOptionCallback={ this.updateDisplayOption }
					/>
					<HorizontalRule />
					
					{ this.getCurrentView() }
					
					<Button isPrimary="true" 
									onClick={this.props.update_editMode}>
						{ __( 'Done', 'charitable' ) }
					</Button>
				</div>
			</Placeholder>
		);
	}
}