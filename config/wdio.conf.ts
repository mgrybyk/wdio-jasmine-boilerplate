export const config: WebdriverIO.Config = {
    services: [
        [
            'selenium-standalone',
            {
                logs: 'logs',
            },
        ],
    ],
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    maxInstances: 5,
    automationProtocol: 'webdriver',
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
    },
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    before() {
        require('../src/wdio/addCommands')
    },
}
