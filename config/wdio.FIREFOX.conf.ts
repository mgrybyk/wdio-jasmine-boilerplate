import { config } from './wdio.conf'
import { setSeleniumArgs } from './utils'

setSeleniumArgs(config, { firefox: { version: '0.27.0' } })

const browserOptions: WebDriver.FirefoxOptions & { args: Array<string> } = {
    prefs: {
        'browser.tabs.remote.autostart': false,
        'toolkit.telemetry.reportingpolicy.firstRun': false,
        'startup.homepage_welcome_url.additional': 'about:blank',
    },
    args: process.argv.includes('--headless') ? ['-headless'] : [],
}

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
