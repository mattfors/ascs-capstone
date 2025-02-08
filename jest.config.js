module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    testEnvironment: 'jsdom'
};
