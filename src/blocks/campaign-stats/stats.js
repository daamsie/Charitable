/**
 * WordPress dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

export class Stats extends Component {
	constructor() {
		super( ...arguments );

		this.formatMoney = this.formatMoney.bind( this );
		this.getAmountRaised = this.getAmountRaised.bind( this );
		this.getDonorCount = this.getDonorCount.bind( this );
		this.getDonationCount = this.getDonationCount.bind( this );
		this.getTimeLeft = this.getTimeLeft.bind( this );
	}

	formatMoney( amount ) {
		return accounting.formatMoney( amount, {
				decimal : CHARITABLE_BLOCK_VARS.currency_format_decimal_sep,
				thousand: CHARITABLE_BLOCK_VARS.currency_format_thousand_sep,
				precision : CHARITABLE_BLOCK_VARS.currency_format_num_decimals,
				format: CHARITABLE_BLOCK_VARS.currency_format
		} );
	}

	getAmountRaised( donated ) {
		return (
			<div className="charitable-campaign-stat charitable-campaign-stat-amount-raised">
				<span className="charitable-campaign-stat-figure">{ this.formatMoney( donated ) }</span> { __( 'Donated', 'charitable' ) }
			</div>
		)
	}

	getDonorCount( donors ) {
		const label = 1 === donors ? __( 'Donor', 'charitable' ) : __( 'Donors' );
		return (
			<div className="charitable-campaign-stat charitable-campaign-stat-donor-count">
				<span className="charitable-campaign-stat-figure">{ donors }</span> { label }
			</div>
		)
	}

	getDonationCount( donations ) {
		const label = 1 === donations ? __( 'Donation', 'charitable' ) : __( 'Donations', 'charitable' );
		return (
			<div className="charitable-campaign-stat charitable-campaign-stat-donation-count">
				<span className="charitable-campaign-stat-figure">{ donations }</span> { label }
			</div>
		)
	}

	getTimeLeft( end_date ) {
		const now = new Date();
		const seconds_per_hour = 3600;
		const seconds_per_day = 86400;
		const time_remaining = Math.ceil( ( end_date.getTime() - now.getTime() ) / 1000 );
		let figure = '';
		let string = '';

		if ( time_remaining <= 0 ) {
			figure = __( 'Campaign has ended', 'charitable' );
		} else if ( time_remaining <= seconds_per_hour ) {
			figure = Math.ceil( time_remaining / 60 );
			string = sprintf( _n( 'Minute Left', 'Minutes Left', figure, 'charitable' ), figure );
		} else if ( time_remaining <= seconds_per_day ) {
			figure = Math.floor( time_remaining / seconds_per_hour );
			string = sprintf( _n( 'Hour Left', 'Hours Left', figure, 'charitable' ), figure );
		} else {
			figure = Math.floor( time_remaining / seconds_per_day );
			string = sprintf( _n( 'Day Left', 'Days Left', figure, 'charitable' ), figure );
		}

		return (
			<div className="charitable-campaign-stat charitable-campaign-stat-time-left">
				<span className="charitable-campaign-stat-figure">{ figure }</span> { string }
			</div>
		)
	}

	render() {
		const {
			attributes,
			end_date,
			donated,
			donors,
			donations
		} = this.props;

		const {
			showAmountRaised,
			showDonorCount,
			showDonationCount,
			showTimeLeft
		} = attributes;

		return (
			<div className="charitable-campaign-stats">
				{ showAmountRaised && this.getAmountRaised( donated ) }
				{ showDonorCount && this.getDonorCount( donors ) }
				{ showDonationCount && this.getDonationCount( donations ) }
				{ showTimeLeft && this.getTimeLeft( new Date( end_date ) ) }
			</div>
		);
	}
}

export default Stats;
