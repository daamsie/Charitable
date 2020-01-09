/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ColorPicker } from '@wordpress/components';
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
		progressBarHeight,
	} = attributes;

	if ( ! isSelected ) {
		return null;
	}

	return (
		<InspectorControls
			key="campaign-progress-bar-inspector"
			description={ __( 'Configure', 'charitable' ) } >
			<PanelBody title={ __( 'Bar Colour', 'charitable' ) }>
				<ColorPicker
					color={ highlightColour }
					onChangeComplete={ ( value ) => setAttributes( { highlightColour: value.hex } ) }
					disableAlpha
				/>
				<RangeControl
					label={ __( 'Bar Height', 'charitable' ) }
					onChange={ ( value ) => setAttributes( { progressBarHeight: value } ) }
					min={ 8 }
					max={ 60 }
					value={ progressBarHeight }
				/>
			</PanelBody>
		</InspectorControls>
	);
}

const applyWithSelect = withSelect( (select) => {
	return {
		goal: select( 'core/editor' ).getEditedPostAttribute( 'goal' )
	}
} );

const applyWithDispatch = withDispatch( (dispatch) => {
	return {
		onGoalChange: (value) => {
			dispatch( 'core/editor' ).editPost( { goal: value } )
		}
	}
} );

export const Inspector = compose(
	applyWithSelect,
	applyWithDispatch
)( InspectorBase );
