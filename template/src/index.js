import { h } from 'preact';
import { Text } from 'preact-i18n';
import { SLUG } from './constants';
import { withIntl } from './enhancers';
import App from './components/app';

export default function Zimlet(context) {
	const { plugins, components } = context;
	const exports = {};

	exports.init = function init() {
		// the zimlet slots to load into,
		// and what is being loaded into that slot
		// (MenuItem and Router are both defined below)
		plugins.register('slot::menu', MenuItem); //alternately, you can load 'App' instead of a component, and have all your components listed in src/components/app and your own custom files
		plugins.register('slot::routes', Router); // only needed if you need to create a new url route, like for a menu tab, or print, etc
	};

	// Register a new route with the preact-router instance
	function Router() {
		return [
			<App path={`/${SLUG}`} />
		];
	}

	// Create a main nav menu item.
	// withIntl should be used on every component registered via plugins.register(). You will see this in the App index.js file as well
	const MenuItem = withIntl(() => ( //inside withIntl() is where you would grab any props that were passed in
		// list of components can be found in zm-x-web, zimlet-manager/shims.js, and more can be added if needed
		<components.MenuItem
			responsive
			icon="fa:code"
			href={`/${SLUG}`}
		>
			<Text id="{{name}}.menuItem" />
		</components.MenuItem>
	));

	return exports;
}
