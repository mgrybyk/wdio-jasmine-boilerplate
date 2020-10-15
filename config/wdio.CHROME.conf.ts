import { config } from './wdio.conf'
import { CHROME_ARGS } from './chromeArgs'
import { setSeleniumArgs } from './utils'

setSeleniumArgs(config, { chrome: { version: '86.0.4240.22' } })

const browserOptions: WebDriver.ChromeOptions & { args: Array<string> } = {
    args: [
        ...CHROME_ARGS,
        ...(process.argv.includes('--headless') ? ['--headless', '--no-sandbox'] : []),
        '--window-size=1920,1080',
    ],
}

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
