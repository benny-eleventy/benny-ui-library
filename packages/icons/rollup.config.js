import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const customBabelConfig = {
	babelHelpers: "bundled",
	plugins: [
		["babel-plugin-styled-components", { displayName: true, ssr: true }],
	],
};

const externalDependencies = [
	"react",
	"react-dom",
	"styled-components",
	"react/jsx-runtime",
	"framer-motion",
];

export default {
	input: "src/index.tsx",
	output: [
		{
			dir: "dist",
			entryFileNames: "[name].js",
			format: "esm",
			exports: "named",
		},
	],
	external: externalDependencies,
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({
			tsconfig: "tsconfig.json",
			exclude: ["src/**/*.spec.tsx", "src/**/*.stories.tsx"],
		}),
		babel(customBabelConfig),
		terser(),
	],
};
