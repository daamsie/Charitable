/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, DatePicker } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

export let SettingsEditor = (props) => {
	const {
		goal,
		end_date,
		onGoalChange,
		onEndDateChange
	} = props;

	return (
		<div className="charitable-block-settings charitable-block-settings-campaign-stats">
			<BaseControl
				id="campaign-goal-control"
				label={ __( 'Goal', 'charitable' ) }
			>
				<input
					id="campaign-goal-control"
					type="number"
					value={ goal }
					className="components-text-control__input"
					onChange={ (event) => onGoalChange( event.target.value ) }
				/>
			</BaseControl>
			<label for=""></label>
			<DatePicker
				currentDate={ end_date }
				onChange={ (value) => onEndDateChange( value ) }
			/>
		</div>
	);
}

SettingsEditor = withSelect( (select) => {
	return {
		goal: select( 'core/editor' ).getEditedPostAttribute( 'goal' ),
		end_date: select( 'core/editor' ).getEditedPostAttribute( 'end_date' )
	}
} )( SettingsEditor );

SettingsEditor = withDispatch( (dispatch) => {
	return {
		onGoalChange: (value) => {
			dispatch( 'core/editor' ).editPost( { goal: value } )
		},
		onEndDateChange: (value) => {
			dispatch( 'core/editor' ).editPost( { end_date: value } )
		}
	}
} )( SettingsEditor );

export default SettingsEditor;
