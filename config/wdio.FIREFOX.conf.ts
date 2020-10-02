import { config } from './wdio.conf'

const seleniumConfig = {
    version: '3.141.59',
    drivers: { firefox: { version: '0.27.0' } },
}

const browserOptions: WebDriver.FirefoxOptions & { args: Array<string> } = {
    prefs: {
        'browser.tabs.remote.autostart': false,
        'toolkit.telemetry.reportingpolicy.firstRun': false,
        'startup.homepage_welcome_url.additional': 'about:blank',
    },
    args: process.argv.includes('--headless') ? ['-headless'] : [],
}

const seleniumOpts = config.services?.find(
    (service) => Array.isArray(service) && service[0] === 'selenium-standalone'
) as SeleniumStandaloneOptions

seleniumOpts.args = { ...seleniumConfig }
seleniumOpts.installArgs = { ...seleniumConfig }

const browserConfig: WebdriverIO.Config = {
    ...config,
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
