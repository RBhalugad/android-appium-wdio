import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { baseConfig } from './wdio.base.conf';

// ---------------------------------------------------------------------------
// Auto-detect the .ipa inside ./apps so this file doesn't go stale every
// time you download a new build. Drop exactly one .ipa in that folder.
// ---------------------------------------------------------------------------
const appsDir = join(process.cwd(), 'apps');
const ipaFile = existsSync(appsDir)
    ? readdirSync(appsDir).find((file) => file.endsWith('.ipa'))
    : undefined;
const iosDeviceName = process.env.IOS_DEVICE_NAME ?? 'iPhone 16';
const iosPlatformVersion = process.env.IOS_PLATFORM_VERSION ?? '18.0';
const iosUdid = process.env.IOS_UDID;
const noReset = process.env.APPIUM_NO_RESET === 'true';

if (!ipaFile) {
    throw new Error(
        'No .ipa found in ./apps. Place the BrowserStack sample app, or your own iOS app, ' +
            'in the ./apps folder.',
    );
}

export const config: WebdriverIO.Config = {
    ...baseConfig,

    //
    // ============
    // Capabilities
    // ============
    // Full list of XCUITest capabilities:
    // https://github.com/appium/appium-xcuitest-driver
    capabilities: [
        {
            platformName: 'iOS',
            'wdio:maxInstances': 1,
            'appium:automationName': 'XCUITest',

            // Override these with IOS_DEVICE_NAME / IOS_PLATFORM_VERSION when needed.
            'appium:deviceName': iosDeviceName,
            'appium:platformVersion': iosPlatformVersion,

            // Optional real-device UDID; omit for simulator selection by name/version.
            ...(iosUdid ? { 'appium:udid': iosUdid } : {}),

            // Resolved automatically from ./apps above
            'appium:app': join(appsDir, ipaFile),
            'appium:orientation': 'PORTRAIT',

            'appium:autoAcceptAlerts': true,
            'appium:noReset': noReset,
            'appium:newCommandTimeout': 240,
        },
    ],

    specs: ['../test/ios/specs/**/*.spec.ts'],

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
                    relaxedSecurity: true,
                    log: './logs/appium-ios.log',
                },
            },
        ],
    ],
};
