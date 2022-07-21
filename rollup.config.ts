import fs from 'fs';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const pkg = JSON.parse(
	fs.readFileSync('./package.json', { encoding: 'utf-8' })
);
const extensions = ['.ts'];

export default {
	input: {
        api: './api/index.ts',
        worker: './worker/index.ts'
    },
	plugins: [
		nodeResolve({
			extensions
		}),
		babel({
			extensions,
			babelHelpers: 'bundled',
			exclude: 'node_modules/**'
		}),
		terser()
	],
	output: [
		{
			dir: 'dist/cjs',
			format: 'cjs',
			sourcemap: true
		},
		{
            dir: 'dist/esm',
			file: pkg.module,
			format: 'es',
			sourcemap: true
		}
	]
};