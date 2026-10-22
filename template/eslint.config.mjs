import {
	coreJsConfig,
	customConfig,
	reactConfig,
	prettierConfig,
	preactI18nConfig
} from '@zimbra/eslint-config';

const mergeConfigKey = (configs, key) =>
	Object.assign({}, ...configs.map(config => config[key] || {}));

const jsConfigs = [coreJsConfig, customConfig, reactConfig, prettierConfig];
const preactI18n = preactI18nConfig.plugins['preact-i18n'];

export default [
	{
		ignores: ['node_modules/**', 'build/**', 'pkg/**']
	},
	{
		files: ['**/*.{js,mjs}'],

		languageOptions: coreJsConfig.languageOptions,

		plugins: {
			...mergeConfigKey(jsConfigs, 'plugins'),
			'preact-i18n': preactI18n
		},

		rules: {
			...mergeConfigKey(jsConfigs, 'rules'),

			'brace-style': ['error', '1tbs'],
			eqeqeq: ['error', 'smart'],
			'react/jsx-wrap-multilines': 'warn',
			'no-shadow': 'error',
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true
				}
			],
			'prefer-const': ['error', { destructuring: 'all' }],

			'preact-i18n/no-missing-template-field': 'error',
			'preact-i18n/no-text-as-attribute': 'error',
			// Ignore some characters, possibly surrounded by whitespace
			'preact-i18n/no-text-as-children': [
				'error',
				{ ignoreTextRegex: '^(?:\\s*[()🚩.":<>\\-/]\\s*)*$' }
			],
			'preact-i18n/no-unknown-key': 'error',

			'prettier/prettier': 'error'
		},

		settings: {
			...mergeConfigKey(jsConfigs, 'settings'),

			react: {
				pragma: 'createElement',
				version: '15.0'
			},
			'preact-i18n': {
				languageFiles: [
					{
						name: 'en_US',
						path: 'src/intl/en_US.json'
					}
				],
				textComponents: [
					{ nameRegex: '^Text$' },
					{ nameRegex: '^TextInput$', id: 'placeholderId' },
					{ nameRegex: '^AlignedLabel$', id: 'textId' },
					{ nameRegex: '^(?:Inline)?Modal(?:Dialog|Drawer)', id: 'title' },
					{ nameRegex: '^ContactSuggestion$', id: 'previouslySelectedLabel' }
				]
			}
		}
	}
];
