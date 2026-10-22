import {
	coreJsConfig,
	customConfig,
	reactConfig,
	prettierConfig,
	preactI18nConfig
} from '@zimbra/eslint-config';

// Ignore directory patterns
const globalIgnores = ['**/node_modules/**', '**/build/**', '**/pkg/**'];

// Helper function to merge a specific key from multiple configs
const mergeConfigKey = (configs, key) =>
	Object.assign({}, ...configs.map(config => config[key] || {}));

// Configs to merge for JavaScript files
const jsConfigs = [coreJsConfig, customConfig, reactConfig, prettierConfig, preactI18nConfig];

export default [
	{
		ignores: globalIgnores
	},
	{
		files: ['**/*.{js,mjs}'],

		languageOptions: coreJsConfig.languageOptions,

		plugins: mergeConfigKey(jsConfigs, 'plugins'),
		rules: {
			...mergeConfigKey(jsConfigs, 'rules'),

			// The template ships only en_US, so the other languages would always be reported as missing
			'preact-i18n/no-unknown-key': 'off'
		},
		settings: mergeConfigKey(jsConfigs, 'settings')
	}
];
