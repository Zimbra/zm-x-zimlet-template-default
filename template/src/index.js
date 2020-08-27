import { createElement } from 'preact';
import { Text } from 'preact-i18n';
import { SLUG } from './constants';
import { withIntl } from './enhancers';
import App from './components/app';
import { MenuItem } from '@zimbra-client/components';
import { useClientConfig } from '@zimbra-client/hooks';

export default function Zimlet(context) {
	const { plugins } = context;
	const exports = {};

	// Register a new route with the preact-router instance
	function Router() {
		const { slugs } = useClientConfig({ slugs: 'routes.slugs' });
		return [<App path={`/${slugs.email}/${SLUG}`} />];
	}

	// Create a main nav menu item.
	// withIntl should be used on every component registered via plugins.register(). You will see this in the App index.js file as well
	const CustomMenuItemInner = () => {
		const { slugs } = useClientConfig({ slugs: 'routes.slugs' });
		return (
			// List of components can be found in zm-x-web, zimlet-manager/shims.js, and more can be added if needed
			<MenuItem
				responsive
				icon='question-circle'
				href={`/${slugs.email}/${SLUG}`}
			>
				<Text id='{{name}}.menuItem' />
			</MenuItem>
		);
	};

	const CustomMenuItem = withIntl()(CustomMenuItemInner);

	exports.init = function init() {
		// The zimlet slots to load into, and what is being loaded into that slot
		// (CustomMenuItem and Router are both defined below)
		plugins.register('slot::email-tab-item', CustomMenuItem);

		// Only needed if you need to create a new url route, like for a menu tab, or print, etc
		plugins.register('slot::routes', Router);
	};


	return exports;
}
