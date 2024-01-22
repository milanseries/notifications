/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  verbose: true,
  rootDir: "./",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "<rootDir>/**/*.{js,jsx,ts,tsx}",
    "storybook.test.js",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/*.config.{js,ts}",
    "!**/*.types.{js,ts}",
  ],
  coveragePathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/.storybook", "<rootDir>/coverage"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx|mdx|css)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"], // added
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
