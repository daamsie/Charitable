/**
 * Block dependencies.
 */
import { Editor } from './editor.js';
import { Stats } from './stats.js';
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const ViewBase = (props) => {
	const {
		isSelected,
		attributes
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

	const show_stats = showAmountRaised || showDonorCount || showDonationCount || showTimeLeft;
	const button_style = {
		backgroundColor: highlightColour
	};
	const wrapper_style = {
		backgroundColor: backgroundColour,
		padding: blockPadding + 'px'
	};
	const show_editor = showTimeLeft && isSelected;

	return (
		<>
			<div className="charitable-campaign-stats-block" style={ wrapper_style }>
				<Stats { ...props } />
			</div>
			{ show_editor && <Editor { ...props } /> }
		</>
	);
};


const applyWithSelect = withSelect( (select) => {
	return {
		end_date: select( 'core/editor' ).getEditedPostAttribute( 'end_date' ),
		goal: select( 'core/editor' ).getEditedPostAttribute( 'goal' ),
		donated: select( 'core/editor' ).getCurrentPost().donated_amount,
		donors: select( 'core/editor' ).getCurrentPost().donor_count,
		donations: select( 'core/editor' ).getCurrentPost().donation_count
	}
} );

const applyWithDispatch = withDispatch( (dispatch) => {
	return {
		onEndDateChange: (value) => {
			dispatch( 'core/editor' ).editPost( { end_date: value } )
		}
	}
} );

export const View = compose(
	applyWithSelect,
	applyWithDispatch
)( ViewBase );
