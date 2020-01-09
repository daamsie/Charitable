/**
 * Block dependencies
 */
import CampaignSelect from './../../components/campaign-select/index.js';
import { SettingsEditor } from './settings-editor.js';
import { Inspector } from './inspector.js';
import { View } from './view.js';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { Toolbar, PanelBody, PanelRow, RangeControl, ColorPicker } from '@wordpress/components';
import { BlockControls } from '@wordpress/blockEditor';

class Block extends Component {
	constructor() {
        super( ...arguments );

        this.state = {
            edit_mode: false,
            amount_raised: null,
            ready: false
		};

        this.updateCampaignId      = this.updateCampaignId.bind( this );
        this.toggleInitialSettings = this.toggleInitialSettings.bind( this );
        this.updateEditMode        = this.updateEditMode.bind( this );
        this.getInspectorControls  = this.getInspectorControls.bind( this );
		this.getToolbarControls    = this.getToolbarControls.bind( this );
		this.getSettingsEditor     = this.getSettingsEditor.bind( this );
		this.getPreview            = this.getPreview.bind( this );
    }

    /**
	 * Fetch the first 100 campaigns into memory, for faster search.
	 *
	 * We also record how many campaigns there are, in case there are more than 100.
	 */
	componentDidMount() {
        const is_campaign = 'campaign' === wp.data.select( 'core/editor' ).getCurrentPostType();

        if ( is_campaign ) {
            this.updateCampaignId( wp.data.select( 'core/editor' ).getCurrentPostId() );
            this.toggleInitialSettings();
        } else {

        }

        this.setState({
            ready: true
        });
    }

    /**
     * Update the campaign ID.
     */
    updateCampaignId( campaignId ) {
        this.props.setAttributes( { campaign: campaignId } );
    }

    /**
     * Toggle initial settings based on the campaign.
     */
    toggleInitialSettings() {
        if ( ! wp.data.select( 'core/editor' ).getEditedPostAttribute( 'end_date' ) ) {
            this.props.setAttributes( { showTimeLeft: false } );
        }

        if ( ! wp.data.select( 'core/editor' ).getEditedPostAttribute( 'goal' ) ) {
            this.props.setAttributes( {
                showProgressBar: false,
                showPercentRaised: false
            } );
        }
    }

    /**
	 * Update edit mode in state.
	 */
	updateEditMode() {
		this.setState( {
			edit_mode: ! this.state.edit_mode
		} );
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
		const editButton = [
			{
				icon: 'edit',
				title: __( 'Edit Goal', 'charitable' ),
				onClick: this.updateEditMode,
                isActive: this.state.edit_mode
			},
		];

		return (
			<BlockControls>
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
		return (
			<SettingsEditor { ...this.props } />
		);
    }

    /**
     * Get the block preview.
     *
     * @return Component
     */
    getPreview() {
        return (
			<View { ...this.props } />
		);
    }

    render() {
        if ( ! this.state.ready ) {
            return null;
        }

        return (
            <>
                { this.getInspectorControls() }
                { this.getToolbarControls() }
                { this.state.edit_mode ? this.getSettingsEditor() : this.getPreview() }
            </>
        );
    }
}

export default Block;