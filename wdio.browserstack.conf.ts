export const config: WebdriverIO.Config = {
    user: process.env.BROWSERSTACK_USERNAME || 'randhirpatel_9YjbkC',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'wFK61ZhuvLVA9Ek3rYk6',
    hostname: 'hub.browserstack.com',

    services: [
        [
            'browserstack',
            {
                buildIdentifier: '${BUILD_NUMBER}',
                app: process.env.BROWSERSTACK_APP_URL || 'bs://f97842ca3a30ce987f17650086c985b4798c4775',
                browserstackLocal: false,
            },
        ],
    ],

    capabilities: [
        {
            'bstack:options': {
                deviceName: 'Samsung Galaxy S23',
                osVersion: '13.0',
            },
        },
        {
            'bstack:options': {
                deviceName: 'Google Pixel 8',
                osVersion: '14.0',
            },
        },
    ],

    maxInstances: 10,

    specs: ['./test/specs/**/*.spec.ts'],

    logLevel: 'info',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
};

// Shared capabilities to merge into every device entry
const commonCapabilities: Record<string, any> = {
    'bstack:options': {
        projectName: 'Android Appium WDIO',
        buildName: 'browserstack build',
        sessionName: 'WDIO Appium Tests',
        debug: true,
        networkLogs: true,
    },
};

// Merge commonCapabilities into each capability
config.capabilities?.forEach((caps: WebdriverIO.Capabilities) => {
    for (const key in commonCapabilities) {
        (caps as any)[key] = {
            ...(commonCapabilities[key] || {}),
            ...((caps as any)[key] || {}),
        };
    }
});
