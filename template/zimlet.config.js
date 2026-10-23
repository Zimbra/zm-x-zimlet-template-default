// Only needed by the commented-out example below.
import path from 'path';

// Optional: lets you change the webpack build that zimlet-cli creates (for example to use code
// shared outside this project). `env` tells whether it is a watch or a production build.
export default function configure(config, env) {
	// EXAMPLES

	// Lets imports resolve from a shared "packages" folder outside this project.
	// config.resolve.modules.unshift(path.resolve(__dirname, '../../../packages'));

	// Lets code import "FOO" while the actual module is chosen at build time by the BAR environment variable.
	// config.resolve.alias.FOO = process.env.BAR;
}
