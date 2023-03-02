import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const externalDependencies = [
	"react",
	"react-dom",
	"styled-components",
	"react/jsx-runtime",
	"framer-motion",
];

export default {
	input: "src/index.ts",
	output: [
		{
			dir: "dist",
			entryFileNames: "[name].js",
			format: "esm",
			exports: "named",
			plugins: [
				getBabelOutputPlugin({
					filename: "[name].js",
					presets: ["@babel/preset-env", "@babel/preset-react"],
					plugins: [
						[
							"babel-plugin-styled-components",
							{
								displayName: true,
								ssr: true,
								fileName: false,
								pure: true,
								minify: true,
								transpileTemplateLiterals: true,
							},
						],
					],
				}),
			],
		},
	],
	external: externalDependencies,
	plugins: [
		peerDepsExternal(),
		resolve(),
		// babel({
		// 	exclude: "node_modules/**",
		// 	presets: ["@babel/preset-env", "@babel/preset-react"],
		// 	plugins: ["babel-plugin-styled-components"],
		// }),
		commonjs(),
		typescript({
			tsconfig: "tsconfig.json",
			exclude: ["src/**/*.spec.tsx", "src/**/*.stories.tsx"],
		}),
		terser(),
	],
};
