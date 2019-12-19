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
        colour: {
            type: 'string',
            default: '#f8e9fd'
        },
        height: {
            type: 'number',
            default: 30
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