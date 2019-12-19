import { Section } from './section';
import { withSelect, withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Set up the plugin meta fields.
 */
export let PluginMetaFields = (props) => {
	return (
		<div className="charitable-editor-sidebar">
			{
				CHARITABLE_EDITOR_SIDEBAR.sections.map( section => {
					return (
						<Section
							key={ section.key }
							section={ section }
							{ ...props }
						/>
					);
				} )
			}
		</div>
	);
};

PluginMetaFields = withSelect( select => {
	return CHARITABLE_EDITOR_SIDEBAR.fields.reduce( (fields, field) => {
		fields[field.field] = select( 'core/editor' ).getEditedPostAttribute( field.field );
		return fields;
	}, {} );
} )( PluginMetaFields );

PluginMetaFields = withDispatch( dispatch => {
	return {
		onMetaFieldChange: ( value, field ) => {
			dispatch( 'core/editor' ).editPost( { [field]: value } );
		}
	}
} )( PluginMetaFields );

export default PluginMetaFields;