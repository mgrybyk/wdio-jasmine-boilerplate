export const setSeleniumArgs = (
    config: WebdriverIO.Config,
    seleniumConfig: { version: string; drivers: { [key: string]: { version: string } } }
) => {
    const seleniumOpts = (config.services?.find(
        (service) => Array.isArray(service) && service[0] === 'selenium-standalone'
    ) as [string, WebdriverIO.ServiceOption])[1]

    seleniumOpts.args = { ...seleniumConfig }
    seleniumOpts.installArgs = { ...seleniumConfig }
}
