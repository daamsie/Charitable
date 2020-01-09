/**
 * Block dependencies
 */
import icon from './icon';
import Block from './block';

/**
 * Internal block libraries
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Register block
 */
registerBlockType( 'charitable/donate-button', {
    title : __( 'Donate Button' ),

    category : 'widgets',

    icon: icon,

    keywords: [
        __( 'Fundraisers' ),
        __( 'Charitable' ),
        __( 'Donation' )
    ],

    edit: ( props ) => {
        return <Block { ... props } />
    },

    save: () => {
		return null
    }
} );
