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
                "<rootDir>/client/components/*.test.js",
              ],
        },
        {
            displayName: 'API',
            testEnvironment: 'jsdom',
            testMatch: [
                "<rootDir>/client/api.test.js"
            ]
        }
    ]
};