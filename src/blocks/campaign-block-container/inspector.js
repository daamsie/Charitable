/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ColorPicker } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export const Inspector = (props) => {
	const {
		attributes,
		setAttributes,
		isSelected,
	} = props;

	const {
		backgroundColour,
		blockPadding,
	} = attributes;

	if ( ! isSelected ) {
		return null;
	}

	return (
		<InspectorControls
			key="campaign-progress-bar-inspector"
			description={ __( 'Configure', 'charitable' ) } >
			<PanelBody title={ __( 'Background Colour', 'charitable' ) }>
				<ColorPicker
					color={ backgroundColour }
					onChangeComplete={ ( value ) => {
						const rgba = 'rgba(' + value.rgb.r + ',' + value.rgb.g + ',' + value.rgb.b + ',' + value.rgb.a + ')';
						setAttributes( { backgroundColour: rgba } );
					} }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Padding', 'charitable' ) }>
				<RangeControl
					label={ __( 'Padding', 'charitable' ) }
					min={ 0 }
					onChange={ ( value ) => setAttributes( { blockPadding: value } ) }
					value={ blockPadding }
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default Inspector;
