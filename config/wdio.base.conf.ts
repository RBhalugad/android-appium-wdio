import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

// ---------------------------------------------------------------------------
// Load .env file if it exists (credentials, app URLs, etc.)
// ---------------------------------------------------------------------------
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
    process.loadEnvFile(envPath);
}

// ---------------------------------------------------------------------------
// Base WDIO configuration — shared across Android, iOS, local, & BrowserStack.
// Platform-specific configs import and extend this via spread.
// ---------------------------------------------------------------------------
export const baseConfig: Partial<WebdriverIO.Config> = {
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    waitforTimeout: 20000,
    connectionRetryCount: 3,

    //
    // ===========
    // Framework
    // ===========
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },

    //
    // ===========
    // Reporters
    // ===========
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
};

// ---------------------------------------------------------------------------
// Helpers reused by BrowserStack configs
// ---------------------------------------------------------------------------

/**
 * Deep-merges `commonCaps` into every capability entry in the config.
 * Object values are shallow-merged; primitives use the existing value
 * (if present) or fall back to the common one.
 */
export function mergeCommonCapabilities(
    config: WebdriverIO.Config,
    commonCaps: Record<string, any>,
): void {
    config.capabilities?.forEach((caps) => {
        const cap = caps as Record<string, any>;
        for (const [key, value] of Object.entries(commonCaps)) {
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                cap[key] = {
                    ...(typeof cap[key] === 'object' &&
                    cap[key] !== null &&
                    !Array.isArray(cap[key])
                        ? cap[key]
                        : {}),
                    ...value,
                };
            } else {
                cap[key] = cap[key] ?? value;
            }
        }
    });
}
