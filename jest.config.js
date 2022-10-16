const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
  },
  verbose: true,
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testMatch: ["<rootDir>/src/__tests__/**/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{tsx,ts}",
    "<rootDir>/src/pages/**/*.{tsx,ts}",
    "!<rootDir>/src/pages/api/**/*.{tsx,ts}",
    "!<rootDir>/src/styles/*.{tsx,ts}",
    "!<rootDir>/src/pages/_app.tsx",
    "!<rootDir>/src/pages/_document.tsx",
    "!<rootDir>/node_modules/",
    "!<rootDir>/**/__tests__/**",
    "!<rootDir>/**/*.d.ts",
  ],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
