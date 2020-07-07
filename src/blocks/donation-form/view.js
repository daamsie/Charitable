/**
 * Block dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

export default class View extends Component {

	/**
	 * Get the button view.
	 */
	getButton() {
		const { campaign, buttonText, highlightColour } = this.props.attributes;

		const button_style = {
			backgroundColor: highlightColour
        };

		return (
			<div className="charitable-block-donation-form">
				<form className="campaign-donation" method="post">
					<input type="hidden" name="charitable_action" value="start_donation" />
					<input type="hidden" name="campaign_id" value={ campaign } />
					<button type="submit" name="charitable_submit" className={ CHARITABLE_BLOCK_VARS.donate_button_classes } style={ button_style }>{ buttonText }</button>
				</form>
			</div>
		);
	}

	/**
	 * Get the form view.
	 */
	getForm() {
		return (
			<div className="charitable-block-donation-form has-preview">
				<div className="charitable-block-overlay"></div>
				<form>
					<p>{ __( 'This is a form' ) }</p>
				</form>
			</div>
		);
	}

	/**
	 * Get the block view.
	 *
	 * @return Component
	 */
	render() {
		const { displayMode } = this.props.attributes;

		return 'form' === displayMode ? this.getForm() : this.getButton();
	}
}
