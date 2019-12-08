import { config } from './wdio.conf'

const SELENIUM_VERSION = '3.141.59'
const CHROMEDRIVER_VERSION = '78.0.3904.105'

// https://github.com/GoogleChrome/puppeteer/blob/e17d38c61b2b39ec485c3bcb20976afa2b4cc5b5/lib/Launcher.js#L38
const CHROME_ARGS = [
    '--disable-background-networking',
    '--enable-features=NetworkService,NetworkServiceInProcess',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-client-side-phishing-detection',
    '--disable-component-extensions-with-background-pages',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    // BlinkGenPropertyTrees disabled due to crbug.com/937609
    '--disable-features=TranslateUI,BlinkGenPropertyTrees',
    '--disable-hang-monitor',
    '--disable-ipc-flooding-protection',
    '--disable-popup-blocking',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-sync',
    '--force-color-profile=srgb',
    '--metrics-recording-only',
    '--no-first-run',
    '--enable-automation',
    '--password-store=basic',
    '--use-mock-keychain',
]

if (process.env.CHROME_HEADLESS === 'true') {
    CHROME_ARGS.push('--headless', '--no-sandbox', '--window-size=1920,1080')
}

const chromeConfig: WebdriverIO.Config = {
    ...config,
    // @ts-ignore
    seleniumInstallArgs: {
        version: SELENIUM_VERSION,
        drivers: { chrome: { version: CHROMEDRIVER_VERSION } }
    },
    // @ts-ignore
    seleniumArgs: {
        version: SELENIUM_VERSION,
        drivers: { chrome: { version: CHROMEDRIVER_VERSION } }
    },
    capabilities: [{
        'browserName': 'chrome',
        'goog:chromeOptions': {
            args: CHROME_ARGS
        }
    }],
}

exports.config = chromeConfig
