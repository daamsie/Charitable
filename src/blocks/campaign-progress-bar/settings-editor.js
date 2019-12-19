/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { TextControl } = wp.components;

export class SettingsEditor extends Component {
	constructor() {
		super( ...arguments );
    }

	/**
	 * Render the settings.
	 */
	render() {
		const { attributes, setAttributes } = this.props;

		function updateGoal( goal ) {
			setAttributes( { goal } );
			wp.data.dispatch( 'core/editor' ).editPost( { goal: goal } );
        }

		return (
			<div className="charitable-block-settings charitable-block-settings-campaign-progress-bar">
				<TextControl
                    label={ __( 'Goal', 'charitable' ) }
                    value={ attributes.goal }
                    onChange={ updateGoal }
                />
			</div>
		);
	}
}

export default SettingsEditor;