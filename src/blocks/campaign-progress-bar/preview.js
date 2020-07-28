/**
 * Block dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export class Preview extends Component {
	constructor() {
		super( ...arguments );

		this.formatMoney     = this.formatMoney.bind( this );
		this.getProgress     = this.getProgress.bind( this );
		this.getBarStyle     = this.getBarStyle.bind( this );
		this.getTrackerStyle = this.getTrackerStyle.bind( this );
	}

	/**
	 * Return an amount formatted according to the site's currency settings.
	 *
	 * @return string
	 */
	formatMoney( amount ) {
		return accounting.formatMoney(
			amount,
			{
				decimal : CHARITABLE_BLOCK_VARS.currency_format_decimal_sep,
				thousand: CHARITABLE_BLOCK_VARS.currency_format_thousand_sep,
				precision : CHARITABLE_BLOCK_VARS.currency_format_num_decimals,
				format: CHARITABLE_BLOCK_VARS.currency_format
			}
		);
	}

	/**
	 * Return the campaign progress towards its goal, as a percentage.
	 *
	 * @return int
	 */
	getProgress() {
		const {
			goal,
			donated
		} = this.props;

		return goal && donated ? 100 * ( donated / goal ) : 0;
	}

	/**
	 * Get the style object for the progress bar.
	 *
	 * @return object
	 */
	getBarStyle() {
		return {
			height: this.props.attributes.progressBarHeight + 'px',
			borderRadius: this.props.attributes.progressBarHeight/2 + 'px'
		};
	}

	/**
	 * Get the style object for the tracker.
	 *
	 * @return object
	 */
	getTrackerStyle() {
		const {
			highlightColour,
			progressBarHeight
		} = this.props.attributes;

		return {
			width: this.getProgress() + '%',
			backgroundColor: highlightColour,
			borderRadius: progressBarHeight/2 + 'px'
		}
	}

	/**
	 * Render the component.
	 *
	 * @return Component
	 */
	render() {
		const {
			goal
		} = this.props;

		if ( 0 === goal ) {
			return null;
		}

		const progress = this.getProgress();

		return (
			<div className="charitable-campaign-progress-bar-block">
				<div className="charitable-campaign-stat charitable-campaign-progress-bar-percent-raised">
					<span className="charitable-campaign-stat-figure">{ progress }%</span> { __( 'Raised' ) }
				</div>
				<div className="charitable-campaign-progress-bar-goal">
					<span className="charitable-campaign-stat-figure">{ this.formatMoney( goal ) }</span> { __( 'Goal' ) }
				</div>
				<div className="campaign-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={ progress } style={ this.getBarStyle() }>
					<div className="campaign-progress-bar-tracker" style={ this.getTrackerStyle() }></div>
				</div>
			</div>
		)
	};
}

export default Preview;
