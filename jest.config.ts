module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: [],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
};
