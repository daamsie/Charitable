/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

export class ProgressBar extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			donated,
			goal
		} = this.props;

		const {
			progressBarHeight,
			highlightColour
		} = attributes;

		if ( 0 === goal ) {
			return null;
		}

		const progress = 100 * ( donated / goal );
		const bar_style = {
			height: progressBarHeight + 'px',
			borderRadius: progressBarHeight/2 + 'px'
		};
		const tracker_style = {
			width: progress + '%',
			backgroundColor: highlightColour,
			borderRadius: progressBarHeight/2 + 'px'
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
				<div className="charitable-campaign-progress-bar-amount-raised">
					<span className="charitable-campaign-stat-figure">{ formatMoney( donated ) }</span> { __( 'Donated', 'charitable' ) }
				</div>
				<div className="charitable-campaign-progress-bar-goal">
					<span className="charitable-campaign-stat-figure">{ formatMoney( goal ) }</span> { __( 'Goal' ) }
				</div>
				<div className="campaign-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={ progress } style={ bar_style }>
					<div className="campaign-progress-bar-tracker" style={ tracker_style }></div>
				</div>
			</div>
		);
	}
};

export default ProgressBar;