import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

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
		},
	],
	external: externalDependencies,
	plugins: [
		peerDepsExternal(),
		resolve(),
		babel({
			exclude: "node_modules/**",
			presets: ["@babel/preset-env", "@babel/preset-react"],
			plugins: ["babel-plugin-styled-components"],
		}),
		commonjs(),
		typescript({
			tsconfig: "tsconfig.json",
			exclude: ["src/**/*.spec.tsx", "src/**/*.stories.tsx"],
		}),
		terser(),
	],
};
