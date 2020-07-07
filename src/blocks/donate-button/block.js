/**
 * Block dependencies
 */
import { Inspector } from './inspector.js';
import { CampaignSelect } from './../../components/campaign-select/index.js';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

class Block extends Component {
	constructor() {
        super( ...arguments );

        this.state = {
			edit_mode: ! this.props.attributes.campaign,
		};

        this.updateCampaignId = this.updateCampaignId.bind( this );
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
        } else {

        }

        this.setState({
            ready: true
        });
    }

    /**
	 * Get the components for the sidebar settings area that is rendered while focused on a Donate Button block.
	 *
	 * @return Component
	 */
	getInspectorControls() {
		return '';
	}

    /**
	 * Get the components for the toolbar area that appears on top of the block when focused.
	 *
	 * @return Component
	 */
	getToolbarControls() {
		const { edit_mode } = this.state;
		const { attributes } = this.props;
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
     * Update the campaign ID.
     */
    updateCampaignId( campaignId ) {
        this.props.setAttributes( { campaign: campaignId } );
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

    render() {
        if ( ! this.state.ready ) {
            return null;
		}

		const {
			highlightColour,
			buttonText
		} = this.props.attributes;

		const button_style = {
			backgroundColor: highlightColour
        };

        return (
			<>
				<Inspector { ...this.props } />
				<form className="campaign-donation" method="post" onSubmit={ (e) => { e.preventDefault(); } }>
					<button className={ CHARITABLE_BLOCK_VARS.donate_button_classes } style={ button_style }>{ buttonText }</button>
				</form>
			</>
		);
    }
}

export default Block;