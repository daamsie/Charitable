/**
 * Block dependencies.
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

export const Editor = ( props ) => {
	const {
		goal,
		onGoalChange,
		isSelected
	} = props;


	if ( ! isSelected ) {
		return null;
	}

	return (
		<div className="charitable-block-inline-editor charitable-block-inline-editor-campaign-progress-bar">
			<BaseControl
				id="campaign-goal"
				label={ __( 'Campaign Goal', 'charitable' ) }
			>
				<input
					id="campaign-goal"
					type="number"
					value={ goal }
					onChange={ (event) => onGoalChange( event.target.value ) }
					autoFocus={ true }
				/>
			</BaseControl>
		</div>
	);
};

export default Editor;