/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

const ProgressBarBase = (props) => {
	const { attributes, donated, goal } = props;
	const { height, colour } = attributes;

	if ( 0 === goal ) {
		return null;
	}

	const progress      = 100 * ( donated / goal );
	const bar_style     = {
		height: height + 'px'
	};
	const tracker_style = {
		width: progress + '%',
		backgroundColor: colour
	};

	const formatMoney = function( amount ) {
		return accounting.formatMoney( amount, {
				decimal : CHARITABLE_BLOCK_VARS.currency_format_decimal_sep,
				thousand: CHARITABLE_BLOCK_VARS.currency_format_thousand_sep,
				precision : CHARITABLE_BLOCK_VARS.currency_format_num_decimals,
				format: CHARITABLE_BLOCK_VARS.currency_format
		} );
	}

	return (
		<div className="charitable-campaign-progress-bar">
			<div className="charitable-campaign-progress-bar-amount-raised">{ formatMoney( donated ) }</div>
			<div className="charitable-campaign-progress-bar-goal">{ sprintf( __( 'Goal: %s' ), formatMoney( goal ) ) }</div>
			<div className="campaign-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={ progress } style={ bar_style }>
				<div className="campaign-progress-bar-tracker" style={ tracker_style }></div>
			</div>
		</div>
	);
};

export const ProgressBar = withSelect( select => {
	return {
		goal: select( 'core/editor' ).getEditedPostAttribute( 'goal' ),
		donated: select( 'core/editor' ).getCurrentPost().donated_amount
	};
} )( ProgressBarBase );
