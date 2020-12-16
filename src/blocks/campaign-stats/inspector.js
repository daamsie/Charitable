/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, TextControl, RangeControl, ColorPicker, HorizontalRule, BaseControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const InspectorBase = (props) => {
	const {
		attributes,
		setAttributes,
		isSelected,
		goal,
		end_date,
		onGoalChange,
		onEndDateChange
	} = props;

	const {
		highlightColour,
		backgroundColour,
		blockPadding,
		buttonText,
		showAmountRaised,
		showDonorCount,
		showDonationCount,
		showTimeLeft
	} = attributes;

	if ( ! isSelected ) {
		return null;
	}

	return (
		<InspectorControls
			key="campaign-progress-bar-inspector"
			description={ __( 'Configure', 'charitable' ) } >
			<PanelBody title={ __( 'General Settings', 'charitable' ) }>
				{/* <ToggleControl
					label={ __( 'Show progress bar', 'charitable' ) }
					checked={ showProgressBar }
					onChange={ (checked) => {
						setAttributes( { showProgressBar: checked } );
						! goal && onGoalChange( 500 );
					} }
				/> */}
				<ToggleControl
					label={ __( 'Show amount raised', 'charitable' ) }
					checked={ showAmountRaised }
					onChange={ (checked) => {
						setAttributes( { showAmountRaised: checked } );
					 } }
				/>
				<ToggleControl
					label={ __( 'Show number of donors', 'charitable' ) }
					checked={ showDonorCount }
					onChange={ (checked) => setAttributes( { showDonorCount: checked } ) }
				/>
				<ToggleControl
					label={ __( 'Show number of donations', 'charitable' ) }
					checked={ showDonationCount }
					onChange={ (checked) => setAttributes( { showDonationCount: checked } ) }
				/>
				<ToggleControl
					label={ __( 'Show time remaining', 'charitable' ) }
					checked={ showTimeLeft }
					onChange={ (checked) => {
						setAttributes( { showTimeLeft: checked } );
						if ( ! end_date ) {
							const date = new Date();
							date.setDate( date.getDate() + 30 );
							onEndDateChange( date );
						}
					} }
				/>
				<TextControl
					label={ __( 'Button Text', 'charitable' ) }
					value={ buttonText }
					onChange={ (text) => setAttributes( { buttonText: text } ) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Highlight Colour', 'charitable' ) }>
				<ColorPicker
					color={ highlightColour }
					onChangeComplete={ ( value ) => setAttributes( { highlightColour: value.hex } ) }
					disableAlpha
				/>
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
	applyWithSelect,
	applyWithDispatch
)( InspectorBase );
