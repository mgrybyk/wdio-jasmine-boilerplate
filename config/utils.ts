export const setSeleniumArgs = (config: WebdriverIO.Config, drivers: { [key: string]: { version: string } }) => {
    const seleniumOpts = (config.services?.find(
        (service) => Array.isArray(service) && service[0] === 'selenium-standalone'
    ) as [string, WebdriverIO.ServiceOption])[1]

    const seleniumConfig = { drivers }
    seleniumOpts.args = { ...seleniumConfig }
    seleniumOpts.installArgs = { ...seleniumConfig }
}
