/**
 * Block dependencies
 */
import { Inspector } from './inspector.js';

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
     * Update the campaign ID.
     */
    updateCampaignId( campaignId ) {
        this.props.setAttributes( { campaign: campaignId } );
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