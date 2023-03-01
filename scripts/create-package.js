const fs = require("fs");

const packageName = process.argv[2];

if (!packageName) {
	console.log("Please provide a package name");
	process.exit(1);
}

const packagePath = ".";

const files = [
	// {
	// 	name: "index.ts",
	// 	content: `export { default as My${packageName} } from './My${packageName}';\n`,
	// },
	// 	{
	// 		name: `${packageName}.tsx`,
	// 		content: `import styled from 'styled-components';

	// const My${packageName} = styled.div\`
	//   /* styles go here */
	// \`;

	// export default My${packageName};
	// `,
	// 	},
	{
		name: `package.json`,
		content: `{
	"name": "@bennyui/${packageName}",
	"version": "0.0.0",
	"main": "dist/index.js",
	"module": "dist/index.js",
	"type": "module",
	"files": [
		"dist"
	],
	"types": "dist/index.d.ts",
	"scripts": {
		"build": "rimraf dist && rollup --config --bundleConfigAsCjs",
		"test": "jest"
	},
		"publishConfig": {
		"access": "public"
	}
}`,
	},
	{
		name: "tsconfig.json",
		content: `{
	"compilerOptions": {
		"jsx": "react",
		"allowJs": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"target": "es5",
		"lib": [
			"dom",
			"es2015",
			"es2016",
			"es2017",
			"es2018",
			"es2019",
			"es2020",
			"es2021"
		],
		"declaration": true,
		"declarationDir": "./dist",
		"outDir": "./dist",
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"sourceMap": true,
		"skipLibCheck": true,
		"strict": true
	},
	"include": ["src/**/*"],
	"exclude": ["node_modules", "**/*.spec.ts"]
}
`,
	},
	{
		name: "rollup.config.js",
		content: `import commonjs from "@rollup/plugin-commonjs";
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
		commonjs(),
		typescript({
			tsconfig: "tsconfig.json",
			exclude: ["src/**/*.spec.tsx", "src/**/*.stories.tsx"],
		}),
		babel(customBabelConfig),
		terser(),
	],
};
`,
	},
];

fs.mkdirSync(packagePath, { recursive: true });

// Create src directory
fs.mkdirSync(`${packagePath}/src`, { recursive: true });

// Add index.ts file to src directory
fs.writeFileSync(`${packagePath}/src/index.ts`, "");

files.forEach((file) => {
	fs.writeFileSync(`${packagePath}/${file.name}`, file.content);
});
