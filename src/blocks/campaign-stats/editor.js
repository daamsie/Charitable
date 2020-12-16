/**
 * Internal dependencies.
 */
import { DatePicker } from './date';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

export const Editor = ( props ) => {
	const {
		end_date,
		onEndDateChange,
		isSelected
	} = props;


	if ( ! isSelected ) {
		return null;
	}

	return (
		<div className="charitable-block-inline-editor charitable-block-inline-editor-campaign-stats">
			<p><strong>{ __( 'End Date', 'charitable' ) }</strong></p>
			<DatePicker
				currentDate={ end_date }
				onChange={ (value) => onEndDateChange( value ) }
			/>
		</div>
	);
};

export default Editor;