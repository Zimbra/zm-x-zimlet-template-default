// Required in every file that uses JSX, because JSX is compiled into createElement calls.
import { createElement } from 'preact';
import { Text } from '@zimbra/preact-i18n';
import { withIntl } from '../../enhancers';
// Gives the tab the same look as the other menu entries.
import { MenuItem } from '@zimbra-client/components';
import { CircleQuestionMarkIcon } from 'lucide-preact';
import { useClientConfig } from '@zimbra-client/hooks';
import { SLUG } from '../../constants';

// The tab users click to open this Zimlet.
const EmailTabItem = () => {
	const { slugs } = useClientConfig({ slugs: 'routes.slugs' });

	return (
		// MenuItem renders the clickable tab entry that navigates to `href`.
		<MenuItem responsive icon={CircleQuestionMarkIcon} href={`/${slugs.email}/${SLUG}`}>
			<Text id="{{name}}.menuItem" />
		</MenuItem>
	);
};

export default withIntl()(EmailTabItem);
