module.exports = {
	stories: [
		// "../packages/**/*.stories.mdx",
		// "../packages/**/*.stories.@(js|jsx|ts|tsx)",
		// "../packages/components/src/**/stories/*.stories.tsx",
		// "../packages/components/src/Button/*.stories.tsx",
		"../packages/components/src/**/*.stories.tsx",
	],
	addons: ["@storybook/addon-essentials", "@storybook/preset-typescript"],
	framework: "@storybook/react",
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.mjs$/,
			include: /node_modules/,
			type: "javascript/auto",
		});
		return config;
	},
	// webpackFinal: async (config, { configType }) => {
	// 	config.module.rules.push({
	// 		test: /\.(ts|tsx)$/,
	// 		use: [
	// 			{
	// 				loader: require.resolve("ts-loader"),
	// 			},
	// 			// Optional
	// 			{
	// 				loader: require.resolve("react-docgen-typescript-loader"),
	// 			},
	// 		],
	// 	});
	// },
	babelDefault: async () => {
		return {
			compact: true,
			presets: [
				"@babel/preset-env",
				"@babel/preset-react",
				"@babel/preset-typescript",
				{
					runtime: "automatic",
				},
			],
		};
	},
};
