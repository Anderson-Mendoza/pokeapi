import '@testing-library/jest-dom';

module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'] // Opcional
};