import { CampaignSelect } from './../../components/campaign-select/index.js';
import View from './view.js';
import Inspector from './inspector.js';

/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	Toolbar,
	RadioControl
} = wp.components;
const {
	BlockControls
} = wp.blockEditor;

/**
 * The main donation form block UI.
 */
export default class CharitableDonationFormBlock extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			edit_mode: ! this.props.attributes.campaign,
		};

		this.getInspectorControls = this.getInspectorControls.bind( this );
		this.getToolbarControls   = this.getToolbarControls.bind( this );
		this.getSettingsEditor    = this.getSettingsEditor.bind( this );
		this.getPreview           = this.getPreview.bind( this );
	}

	/**
	 * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
	 *
	 * @return Component
	 */
	getInspectorControls() {
		return <Inspector
            { ...this.props }
        />
	}

	/**
	 * Get the components for the toolbar area that appears on top of the block when focused.
	 *
	 * @return Component
	 */
	getToolbarControls() {
		const { edit_mode } = this.state;
		const { attributes, setAttributes } = this.props;
		const { campaign } = attributes;

		const editButton = [
			{
				icon: 'edit',
				title: __( 'Edit' ),
				onClick: ! campaign ? function(){} : () => this.setState( { edit_mode: ! edit_mode } ),
				isActive: this.state.edit_mode,
			},
		];

		return (
			<BlockControls key="controls">
				<Toolbar controls={ editButton } />
			</BlockControls>
		);
	}

	/**
	 * Get the block settings editor UI.
	 *
	 * @return Component
	 */
	getSettingsEditor() {
		const self = this;
		const { attributes, setAttributes } = this.props;
		const { campaign, displayMode } = attributes;

		let selected_campaigns = !! campaign ? [ campaign ] : [];

		return (
			<div className="charitable-block-donation-form charitable-block-settings">
				<CampaignSelect
					attributes={ attributes }
					selected_campaigns={ selected_campaigns }
					update_campaign_setting_callback={ ( campaign ) => {
						setAttributes( {
							campaign: campaign[0]
						} );

						self.setState( {
							edit_mode: ! campaign.length
						} );
					} }
					multiple={ false }
					campaign_active_status="active"
				/>
				<RadioControl
					key="displaymode-radio"
					label={ __( 'Display mode' ) }
					value={ displayMode }
					options={ [
						{
							label: __( 'Form' ),
							value: 'form',
						},
						{
							label: __( 'Button' ),
							value: 'button',
						},
					] }
					onChange={ ( value ) => setAttributes( { displayMode: value } ) }
				/>
			</div>
		);
	}

	/**
	 * Get the block preview.
	 *
	 * @return Component
	 */
	getPreview() {
		return <View { ...this.props } />;
	}

	/**
	 * Render the block UI.
	 */
	render() {
		return [
			this.getInspectorControls(),
			this.getToolbarControls(),
			this.state.edit_mode ? this.getSettingsEditor() : this.getPreview(),
		];
	}
}
