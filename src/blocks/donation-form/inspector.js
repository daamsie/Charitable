/**
 * Block dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { PanelBody, ToggleControl, TextControl, ColorPicker, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default class Inspector extends Component {

	/**
	 * Get the block view.
	 *
	 * @return Component
	 */
	render() {
		const { attributes, setAttributes } = this.props;
		const { highlightColour, buttonOpensModal, buttonHasAmount, buttonText, buttonSize } = attributes;

		return (
			<InspectorControls
				key="donate-block-inspector"
				description={ __( 'Configure', 'charitable' ) } >
				<PanelBody title={ __( 'Button Settings', 'charitable' ) }>
					<ToggleControl
						label={ __( 'Open form in modal', 'charitable' ) }
						checked={ buttonOpensModal }
						onChange={ (checked) => setAttributes( { buttonOpensModal: checked } ) }
					/>
					<ToggleControl
						label={ __( 'Show amount field', 'charitable' ) }
						checked={ buttonHasAmount }
						onChange={ (checked) => setAttributes( { buttonHasAmount: checked } ) }
					/>
					<SelectControl
						label={ __( 'Button size', 'charitable' ) }
						value={ buttonSize }
						options={
							[
								{
									label: __( 'Small' ),
									value: 'small',
								},
								{
									label: __( 'Medium' ),
									value: 'medium',
								},
								{
									label: __( 'Large' ),
									value: 'large',
								},
							]
						}
						onChange={ (size) => setAttributes( { buttonSize: size } ) }
					/>
					<TextControl
						label={ __( 'Button text', 'charitable' ) }
						value={ buttonText }
						onChange={ (text) => setAttributes( { buttonText: text } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Design Settings', 'charitable' ) }>
					<ColorPicker
						label={ __( 'Highlight Colour', 'charitable' ) }
						color={ highlightColour }
						onChangeComplete={ ( value ) => setAttributes( { highlightColour: value.hex } ) }
						disableAlpha
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
