import { PluginMetaFields } from './fields';
import { icon } from './icon.js';

/**
 * Load dependencies.
 */
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { PanelBody, PanelRow, TextControl, NumberControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';



/**
 * Register the plugin.
 */
registerPlugin( 'charitable-sidebar', {
	icon: icon,
	render: () => {
		return (
			<>
				<PluginSidebarMoreMenuItem
					target="charitable-campaign-sidebar"
				>
					{ __( 'Campaign Settings', 'charitable' ) }
				</PluginSidebarMoreMenuItem>
				<PluginSidebar
					title={ __( 'Campaign Settings', 'charitable' ) }
					name="charitable-campaign-sidebar"
				>
					<PluginMetaFields />
				</PluginSidebar>
			</>
		)
	}
} );
