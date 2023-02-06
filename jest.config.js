module.exports = {
    verbose: true,
    projects: [
        {
            displayName: 'server',
            testEnvironment: 'node',
            testMatch: [
                "<rootDir>/server/**/*.test.js"
              ],
        },
        {
            displayName: 'client',
            testEnvironment: 'jsdom',
            testMatch: [
                "<rootDir>/client/**/*.test.js"
              ],
        }
    ]
};