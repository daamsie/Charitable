/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ColorPicker } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export const Inspector = (props) => {
	const {
		attributes,
		setAttributes,
		isSelected,
	} = props;

	const {
		highlightColour,
		buttonText,
	} = attributes;

	if ( ! isSelected ) {
		return null;
	}

	return (
		<InspectorControls
			key="campaign-progress-bar-inspector"
			description={ __( 'Configure', 'charitable' ) } >
			<PanelBody title={ __( 'General Settings', 'charitable' ) }>
				<TextControl
					label={ __( 'Button Text', 'charitable' ) }
					value={ buttonText }
					onChange={ (text) => setAttributes( { buttonText: text } ) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Colour', 'charitable' ) }>
				<ColorPicker
					color={ highlightColour }
					onChangeComplete={ ( value ) => setAttributes( { highlightColour: value.hex } ) }
					disableAlpha
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default Inspector;
