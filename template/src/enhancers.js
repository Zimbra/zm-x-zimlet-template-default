import { withZimletIntlWrapper } from '@zimbra-client/enhancers';

/**
 * @method withZimletIntlWrapper
 * accepts three arguments which can be use to load zimlet locale.
 * @param {Object} - with following values
 * @param {Function} importFn which returns `import` with intl locale path of the zimlet.
 * @param {Boolean} showLoader Show loader on container or not
 *
 */
export const withIntl = () => withZimletIntlWrapper(
    {
        importFn: locale => import(/* webpackMode: "eager" */`./intl/${locale}.json`),
        showLoader: false
    }
);
