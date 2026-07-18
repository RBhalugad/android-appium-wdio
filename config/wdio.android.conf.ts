import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { baseConfig } from './wdio.base.conf';

// ---------------------------------------------------------------------------
// Auto-detect the .apk inside ./apps so this file doesn't go stale every
// time you download a new build. Drop exactly one .apk in that folder.
// ---------------------------------------------------------------------------
const appsDir = join(process.cwd(), 'apps');
const apkFile = existsSync(appsDir)
    ? readdirSync(appsDir).find((file) => file.endsWith('.apk'))
    : undefined;

if (!apkFile) {
    throw new Error(
        'No .apk found in ./apps. Download the WebdriverIO demo app (Android build) from \n' +
            'https://github.com/webdriverio/native-demo-app/releases/latest \n' +
            'and place the .apk in the ./apps folder. To test your own app instead, just drop\n' +
            'your own .apk there — nothing else in this file needs to change.',
    );
}

export const config: WebdriverIO.Config = {
    ...baseConfig,

    //
    // ============
    // Capabilities
    // ============
    // Full list of UiAutomator2 capabilities:
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            platformName: 'Android',
            'wdio:maxInstances': 1,
            'appium:automationName': 'UiAutomator2',

            // Device serial from `adb devices -l`
            'appium:udid': 'RZCW82S2D9F',

            // Resolved automatically from ./apps above
            'appium:app': join(appsDir, apkFile),
            'appium:orientation': 'PORTRAIT',

            'appium:autoGrantPermissions': true,
            'appium:ignoreHiddenApiPolicyError': true,
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,
        },
    ],

    specs: ['../test/android/specs/**/*.spec.ts'],

    runner: 'local',
    bail: 0,
    connectionRetryTimeout: 120000,

    // Starts and stops the Appium server for you around the test run.
    services: [
        [
            'appium',
            {
                // Uses the Appium you installed globally via `npm install -g appium`.
                command: 'appium',
                args: {
                    // Lets Appium run local adb commands and auto-manage ChromeDriver
                    relaxedSecurity: true,
                    log: './logs/appium.log',
                },
            },
        ],
    ],
};
