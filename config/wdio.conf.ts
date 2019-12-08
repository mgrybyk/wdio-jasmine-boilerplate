export const config: WebdriverIO.Config = {
    services: ['selenium-standalone'],
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    maxInstances: 5,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        timeout: 60000,
        require: []
    },
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    before (capabilities, specs) {
        require('expect-webdriverio')
    },
}
