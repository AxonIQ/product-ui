import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import replace from '@rollup/plugin-replace';

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default (args) => {
	const isProd = args['config-prod'];
	let currentEnv = '';

	if (args['config-local']) {
		currentEnv = 'local';
	} else if (args['config-dev']) {
		currentEnv = 'dev';
	} else if (args['config-prod']) {
		currentEnv = 'prod';
	}
	
	return {
		input: 'src/main.ts',
		output: {
			sourcemap: !isProd,
			format: 'iife',
			name: 'app',
			file: 'public/build/bundle.js'
		},
		plugins: [
			replace({
				preventAssignment: true,
				globalThis: JSON.stringify({
					currentEnv,
				}),
			}),
			svelte({
				preprocess: sveltePreprocess({ sourceMap: !isProd }),
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !isProd
				}
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css({ output: 'bundle.css' }),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({
				sourceMap: !isProd,
				inlineSources: !isProd
			}),

			// In dev mode, call `npm run start` once
			// the bundle has been generated
			!isProd && serve(),

			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			!isProd && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			isProd && terser()
		],
		watch: {
			clearScreen: false
		}
	}
};
