import { config } from './wdio.conf'
import { CHROME_ARGS } from './chromeArgs'
import { setSeleniumArgs } from './utils'

const seleniumConfig = {
    version: '3.141.59',
    drivers: { chromiumedge: { version: '85.0.564.70' } },
}

// @ts-ignore https://github.com/webdriverio/webdriverio/pull/5956
const browserOptions: WebDriver.MicrosoftEdgeOptions & { args: Array<string> } = {
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
            // @ts-ignore https://github.com/webdriverio/webdriverio/pull/5956
            browserName: 'MicrosoftEdge',
            'ms:edgeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
