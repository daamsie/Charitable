/**
 * Block dependencies
 */
import icon from './icon';
import Block from './block';

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

    edit: props => {
		return <Block { ... props } />
	},

    save: props => {
        return null;
    }
} );