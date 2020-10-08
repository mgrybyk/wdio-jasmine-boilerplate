import { config } from './wdio.conf'
import { CHROME_ARGS } from './chromeArgs'
import { setSeleniumArgs } from './utils'

const seleniumConfig = {
    version: '3.141.59',
    drivers: { chrome: { version: '85.0.4183.87' } },
}

const browserOptions: WebDriver.ChromeOptions & { args: Array<string> } = {
    args: [
        ...CHROME_ARGS,
        ...(process.argv.includes('--headless') ? ['--headless', '--no-sandbox'] : []),
        '--window-size=1920,1080',
    ],
}

setSeleniumArgs(config, seleniumConfig)

const browserConfig: WebdriverIO.Config = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
