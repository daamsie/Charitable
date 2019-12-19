/**
 * Block dependencies
 */
import CampaignSelect from './../../components/campaign-select/index.js';
import { SettingsEditor } from './settings-editor.js';
import { ProgressBar } from './progress-bar.js';
import { Inspector } from './inspector.js';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { Toolbar, PanelBody, PanelRow, RangeControl, ColorPicker } from '@wordpress/components';
import { BlockControls } from '@wordpress/blockEditor';

class CharitableCampaignProgressBarBlock extends Component {
	constructor() {
        super( ...arguments );

        this.state = {
            edit_mode: false,
            amount_raised: null,
            ready: false
		};

        this.updateGoal           = this.updateGoal.bind( this );
        this.updateCampaignId     = this.updateCampaignId.bind( this );
        this.updateEditMode       = this.updateEditMode.bind( this );
        this.getInspectorControls = this.getInspectorControls.bind( this );
		this.getToolbarControls   = this.getToolbarControls.bind( this );
		this.getSettingsEditor    = this.getSettingsEditor.bind( this );
		this.getPreview           = this.getPreview.bind( this );
    }

    /**
	 * Fetch the first 100 campaigns into memory, for faster search.
	 *
	 * We also record how many campaigns there are, in case there are more than 100.
	 */
	componentDidMount() {
        const is_campaign = 'campaign' === wp.data.select( 'core/editor' ).getCurrentPostType();

        if ( is_campaign ) {
            this.updateGoal( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'goal' ) );
            this.updateCampaignId( wp.data.select( 'core/editor' ).getCurrentPostId() );
            this.updateAmountRaised( wp.data.select( 'core/editor' ).getCurrentPost().donated_amount );
        } else {

        }

        this.setState({
            ready: true
        });
    }

    /**
     * Update basic attributes.
     */
    updateGoal( goal ) {
        this.props.setAttributes( { goal: goal } )
    }

    /**
     * Update basic attributes.
     */
    updateCampaignId( campaignId ) {
        this.props.setAttributes( { campaignId: campaignId } );
    }

    /**
     * Update the amount raised.
     */
    updateAmountRaised( amount ) {
        this.setState( {
            amount_raised: amount
        } );
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
        return <Inspector { ...this.props } />
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
        const {
            showProgressBar
        } = this.props.attributes;

        return (
            <>
                { showProgressBar && <ProgressBar { ...this.props } /> }
                <a href="#" className="button">Donate</a>
            </>
        );


    }

    render() {
        if ( ! this.state.ready ) {
            return null;
        }

        return (
            <Fragment>
                { this.getInspectorControls() }
                { this.getToolbarControls() }
                { this.getPreview() }
            </Fragment>
        );
    }
}

export default CharitableCampaignProgressBarBlock;