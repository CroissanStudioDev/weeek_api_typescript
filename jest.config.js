const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/types/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  // Explicit transform for TypeScript files
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
    }]
  },
  // Define projects for unit and integration tests
  projects: [
    {
      displayName: 'unit',
      testMatch: ['**/tests/*.test.ts'],
      testPathIgnorePatterns: ['/node_modules/', '/tests/integration/'],
      transform: {
        '^.+\\.ts$': ['ts-jest', {
          tsconfig: 'tsconfig.test.json',
        }]
      }
    },
    {
      displayName: 'integration',
      testMatch: ['**/tests/integration/**/*.test.ts'],
      // Setting timeout properties correctly
      testEnvironment: 'node',
      setupFilesAfterEnv: ['./jest.setup.js'],
      transform: {
        '^.+\\.ts$': ['ts-jest', {
          tsconfig: 'tsconfig.test.json',
        }]
      }
    }
  ]
};

module.exports = config;
