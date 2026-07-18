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

if (!ipaFile) {
    throw new Error(
        'No .ipa found in ./apps. Download the WebdriverIO demo app (iOS build) from \n' +
            'https://github.com/webdriverio/native-demo-app/releases/latest \n' +
            'and place the .ipa in the ./apps folder.',
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

            // ── Update these to match your device / simulator ──
            'appium:deviceName': 'iPhone 16',
            'appium:platformVersion': '18.0',

            // Set to true when targeting a real device, false for Simulator
            'appium:udid': 'auto',

            // Resolved automatically from ./apps above
            'appium:app': join(appsDir, ipaFile),
            'appium:orientation': 'PORTRAIT',

            'appium:autoAcceptAlerts': true,
            'appium:noReset': true,
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
