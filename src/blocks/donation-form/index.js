import CharitableDonationFormBlock from './block';
import icon from './icon';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'charitable/donation-form', {
	/**
	 * The block title.
	 */
	title : __( 'Donation Form', 'charitable' ),

	/**
	 * Block description.
	 */
	description: __( 'Display a campaign\'s donation form.', 'charitable' ),

	/**
	 * Type of block. This controls where it will be found in the block UI.
	 */
	category : 'widgets',

	/**
	 * Block icon.
	 */
	icon: icon,

	/**
	 * Keywords used to find the block.
	 */
	keywords: [
		__( 'Donate', 'charitable' ),
		__( 'Charitable', 'charitable' ),
	],

	/**
	 * Transform between the block & a shortcode.
	 */
	transforms: {
		from: [
			{
				type: 'shortcode',
				tag: 'charitable_donation_form',
				attributes: {

					// An attribute can be source from the shortcode attributes
					campaign: {
						type: 'string',
						shortcode: ( { named: { campaign_id = '' } } ) => {
							if ( ! campaign_id ) {
								return '';
							}

							return parseInt( campaign_id, 10 );
						},
					},
				},
			},
		]
	},

	edit: props => {
		return <CharitableDonationFormBlock { ... props } />
	},

    save: props => {
        return null;
    }
});