module.exports = {
  roots: ['<rootDir>/test', '<rootDir>/lib/lambda'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
