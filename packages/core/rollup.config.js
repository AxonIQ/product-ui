import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';
import copy from 'rollup-plugin-copy'

import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.module}
	],
	plugins: [
		svelte({
			preprocess: sveltePreprocess({ sourceMap: true }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: false
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),
		copy({
			targets: [
				{ src: "src/components/Colors/colors.scss", dest: 'dist/' }
			]
		}),

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
		typescript(),
	],
	watch: {
		clearScreen: false
	}
};
