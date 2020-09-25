
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	SelectControl,
} = wp.components;

/**
 * List all display options.
 */
export class DisplayOptions extends Component {
	/**
	 * Render the display options.
	 */
	render() {
		const { title, selectedDisplayOption, updateDisplayOptionCallback } = this.props;
		
		return (
			<SelectControl
				label = { title }
				hideLabelFromVision = "true"
				value = { selectedDisplayOption }
				options={ [
					{ label:  __( 'All campaigns', 'charitable' ) , value: 'all' },
					{ label:  __( 'Filtered campaigns', 'charitable' ) , value: 'filter' },
					{ label:  __( 'Specific campaigns', 'charitable' ) , value: 'specific' },
			] }
			onChange={ updateDisplayOptionCallback } />
		);
	}
}