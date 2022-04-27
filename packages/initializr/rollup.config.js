import replace from '@rollup/plugin-replace';
import defaultConfig from '../../rollup.config';

const production = !process.env.ROLLUP_WATCH;

export default (args) => {
	let currentEnv = '';

	if (args['config-local']) {
		currentEnv = 'local';
	} else if (args['config-prod']) {
		currentEnv = 'prod';
	} else if (args['config-netlify']) {
		currentEnv = 'dev';
	}
	
	return {
		input: 'src/main.ts',
		...defaultConfig,
		plugins: [
			...defaultConfig.plugins,
			replace({
				preventAssignment: true,
				globalThis: JSON.stringify({
					currentEnv,
				}),
			}),
		],
	}
};
