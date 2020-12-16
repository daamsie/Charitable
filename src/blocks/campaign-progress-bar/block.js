/**
 * Block dependencies
 */
// import CampaignSelect from './../../components/campaign-select/index.js';
import { Inspector } from './inspector.js';
import { View } from './view.js';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

class Block extends Component {
	constructor() {
        super( ...arguments );

        this.state = {
            edit_mode: false
		};

        this.updateCampaignId      = this.updateCampaignId.bind( this );
        this.toggleInitialSettings = this.toggleInitialSettings.bind( this );
        this.getInspectorControls  = this.getInspectorControls.bind( this );
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
				<Inspector { ...this.props } />
				<View { ...this.props } />
			</>
		);
    }
}

export default Block;