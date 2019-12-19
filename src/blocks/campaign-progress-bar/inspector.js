/**
 * Block dependencies
 */
import CampaignSelect from './../../components/campaign-select/index.js';
import { SettingsEditor } from './settings-editor.js';
import { ProgressBar } from './progress-bar.js';
import { Panel, ToggleControl } from '@wordpress/components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Toolbar, PanelBody, PanelRow, RangeControl, ColorPicker } = wp.components;
const { InspectorControls, BlockControls } = wp.blockEditor;

export class Inspector extends Component {
	constructor() {
        super( ...arguments );
    }

    /**
	 * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
	 *
	 * @return Component
	 */
	render() {
		const {
			attributes,
			setAttributes,
			isSelected
		} = this.props;

        const {
			colour,
			height,
			showProgressBar
		} = attributes;

        if ( ! isSelected ) {
            return null;
        }

		return (
			<InspectorControls
                key="campaign-progress-bar-inspector"
				description={ __( 'Configure', 'charitable' ) } >
				<PanelBody title={ __( 'Progress Bar', 'charitable' ) }>
					<ToggleControl
						label={ __( 'Show progress bar', 'charitable' ) }
						checked={ showProgressBar }
						onChange={ (checked) => setAttributes( { showProgressBar: checked } ) }
					/>
					{ showProgressBar && (
						<>
							<ColorPicker
								label={ __( 'Tracker Colour', 'charitable' ) }
								color={ colour }
								onChangeComplete={ ( value ) => setAttributes( { colour: value.hex } ) }
								disableAlpha
							/>
							<RangeControl
								label={ __( 'Progress Bar Height', 'charitable' ) }
								onChange={ ( value ) => setAttributes( { height: value } ) }
								min={ 10 }
								max={ 200 }
								value={ height }
							/>
						</>
					) }
				</PanelBody>
			</InspectorControls>
		);
    }
}

export default Inspector;
