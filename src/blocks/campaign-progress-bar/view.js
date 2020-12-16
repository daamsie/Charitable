/**
 * Block dependencies.
 */
import { Editor } from './editor';
import { Preview } from './preview';
import { __ } from '@wordpress/i18n';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const ViewBase = ( props ) => {
	const has_goal = 0 < props.goal;

	return (
		<>
			{ ! has_goal && <div className="charitable-block-inactive">{ __( 'Add a progress bar...', 'charitable' ) }</div> }
			{ has_goal && <Preview { ...props } /> }
			{ props.isSelected && <Editor { ...props } /> }
		</>
	);
};

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

export const View = compose(
	applyWithSelect,
	applyWithDispatch
)( ViewBase );
