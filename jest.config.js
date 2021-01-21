module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|js)'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  transform: {
    '\\.(pug)$': '<rootDir>/node_modules/pug-jest'
  },
  setupFilesAfterEnv: ['jest-canvas-mock']
}
