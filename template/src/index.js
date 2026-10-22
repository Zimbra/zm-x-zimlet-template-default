// Required in every file that uses JSX, because JSX is compiled into createElement calls.
import { createElement } from 'preact';
// Needed to build URLs that follow the Modern UI's configured paths.
import { useClientConfig } from '@zimbra-client/hooks';
import { SLUG } from './constants';
import App from './components/app';
import EmailTabItem from './components/EmailTabItem';

// Entry point: lets the Modern UI load this Zimlet and add its features.
export default function Zimlet(context) {
	const { plugins } = context;
	const exports = {};

	// Shows the App page when the user opens this Zimlet's URL.
	const EmailTabRoute = () => {
		const { slugs } = useClientConfig({ slugs: 'routes.slugs' });

		return [<App path={`/${slugs.email}/${SLUG}`} />];
	};

	exports.init = function init() {
		// Gives users a tab in the Email section to open this Zimlet.
		plugins.register('slot::email-tab-item', EmailTabItem);

		// Gives the tab a page to open.
		plugins.register('slot::routes', EmailTabRoute);
	};

	return exports;
}
