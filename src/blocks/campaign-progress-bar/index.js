/**
 * Block dependencies
 */
import icon from './icon';
import CharitableCampaignProgressBarBlock from './block';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType( 'charitable/campaign-progress-bar', {
    title : __( 'Campaign Progress Bar' ),

    category : 'widgets',

    icon: icon,

    keywords: [
        __( 'Fundraisers' ),
        __( 'Charitable' ),
        __( 'Donation' )
    ],

    attributes: {
        showProgressBar: {
            type: 'boolean',
            default: false
        },
        progressBarColour: {
            type: 'string',
            default: '#c001ff'
        },
        progressBarHeight: {
            type: 'number',
            default: 16
        },
        isCampaign: {
            type: 'boolean',
            default: false
        }
    },

    edit: props => {
		return <CharitableCampaignProgressBarBlock { ... props } />
	},

    save() {
        return null;
    }
} );