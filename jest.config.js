/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		// "^@my-ui-library/components(.*)$": "<rootDir>/src$1",
		// "^@my-ui-library/styles(.*)$": "<rootDir>/../styles/src$1",
		// "^@my-ui-library/constants(.*)$": "<rootDir>/../utils/src$1",
		// "^@bennytestui1/styles": "<rootDir>/packages/styles/src",
		// "^@bennytestui1/constants(.*)$": "<rootDir/packages/constants/src",
		// "^@bennytestui1/(.*)$": "<rootDir>/packages/$1/src",
		"^@bennytestui1/styles": "<rootDir>/packages/styles/src",
		"^@bennytestui1/constants(.*)$": "<rootDir>/packages/constants/src$1",
		"@bennyui/core": "<rootDir>/packages/core/src",
	},
};
