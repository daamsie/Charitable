/**
 * Block dependencies
 */
import icon from './icon';
import { Inspector } from './inspector.js';

/**
 * Internal block libraries
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Set up some block parameters.
 */
const ALLOWED_BLOCKS = [
    'core/image',
    'core/paragraph',
    'charitable/campaign-progress-bar',
    'charitable/campaign-stats',
    'charitable/donate-button'
];

const TEMPLATE = [
    // [ 'core/paragraph', { placeholder: __( 'A short, catchy description of your campaign' ) } ],
    [ 'charitable/campaign-progress-bar' ],
    [ 'charitable/campaign-stats' ],
    [ 'charitable/donate-button' ]
];

/**
 * Register block
 */
registerBlockType( 'charitable/campaign-block-container', {
    title : __( 'Campaign Block' ),

    category : 'widgets',

    icon: icon,

    keywords: [
        __( 'Fundraisers' ),
        __( 'Charitable' ),
        __( 'Donation' )
    ],

    edit: (props) => {
        const {
            backgroundColour,
            blockPadding
        } = props.attributes;

        const wrapper_style = {
            backgroundColor: backgroundColour,
            padding: blockPadding + 'px'
        };

        return (
            <>
                <Inspector { ...props } />
                <div className="charitable-campaign-block-container" style={ wrapper_style }>
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                        template={ TEMPLATE }
                    />
                </div>
            </>
        );
    },

    save: () => {
        return (
            <div className="charitable-campaign-block-container">
                <InnerBlocks.Content />
            </div>
        )
    }
} );