/**
 * Block dependencies
 */
import CampaignSelect from './../../components/campaign-select/index.js';
import { SettingsEditor } from './settings-editor.js';
import { ProgressBar } from './progress-bar.js';
import { Panel, ToggleControl } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
// import {
//     DimensionControl
// } from '@wordpress/block-editor';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Toolbar, PanelBody, PanelRow, RangeControl, ColorPicker } = wp.components;
const { InspectorControls, BlockControls } = wp.blockEditor;

const InspectorBase = (props) => {
	const {
		attributes,
		setAttributes,
		isSelected
	} = props;

	const {
		showProgressBar,
		progressBarHeight,
		progressBarColour
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
							color={ progressBarColour }
							onChangeComplete={ ( value ) => setAttributes( { progressBarColour: value.hex } ) }
							disableAlpha
						/>
						<RangeControl
							label={ __( 'Progress Bar Height', 'charitable' ) }
							onChange={ ( value ) => setAttributes( { progressBarHeight: value } ) }
							min={ 8 }
							max={ 60 }
							value={ progressBarHeight }
						/>
					</>
				) }
			</PanelBody>
		</InspectorControls>
	);
}

const applyWithSelect = withSelect( (select) => {
	return {
		goal: select( 'core/editor' ).getEditedPostAttribute( 'goal' ),
		end_date: select( 'core/editor' ).getEditedPostAttribute( 'end_date' )
	}
} );

const applyWithDispatch = withDispatch( (dispatch) => {
	return {
		onGoalChange: (value) => {
			dispatch( 'core/editor' ).editPost( { goal: value } )
		},
		onEndDateChange: (value) => {
			dispatch( 'core/editor' ).editPost( { end_date: value } )
		}
	}
} );

export const Inspector = compose(
	applyWithDispatch,
	applyWithSelect
)( InspectorBase );
