import { config } from './wdio.conf'
import { CHROME_ARGS } from './chromeArgs'
import { setSeleniumArgs } from './utils'

setSeleniumArgs(config, { chromiumedge: { version: '85.0.564.70' } })

const browserOptions: WebDriver.MicrosoftEdgeOptions & { args: Array<string> } = {
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
            browserName: 'MicrosoftEdge',
            'ms:edgeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
