export const config = {
    //runner: 'local',
    //port: 4723,
    user: 'oauth-dany.murai-ac795',
    key: 'fefad320-427f-42b4-826a-91673cc63127',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        //platformName: 'Android',
        //'appium:deviceName': 'Tiramissu',
        //'appium:platformVersion': '13.0',
        //'appium:automationName': 'UiAutomator2',
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appiun:appWaintActivity': '.MAinActivity',
        //'appium:disableIdLocatorAutocompletion': true
        platformName: 'Android',
        'appium:app': "storage:filename=ebacshop.aab",
        'appium:deviceName': 'Samsung.*',
        //'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Ebacshop Test 2',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: 'stable'
        },
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }

}
