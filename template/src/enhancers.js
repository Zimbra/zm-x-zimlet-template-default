import { intl } from 'preact-i18n';
import definition from './intl/en_US.json';

// withIntl should be used on every component registered via plugins.register()
export const withIntl = intl({ definition });

