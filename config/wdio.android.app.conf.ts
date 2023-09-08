import { join } from 'path';
import config from './wdio.shared.local.appium.conf';
let APP_ANDROID = 'test.apk';
// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '12', // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'emulator-5554',
        'appium:app': join('./apk/', APP_ANDROID || ''), // The path to the app
        'appium:automationName': 'UiAutomator2', // Will be mandatory, see https://github.com/appium/appium/releases/tag/v1.13.0
        //'appium:autoGrantPermissions': true,
        //'appium:noReset': true, // Reset strategies differ per platform, see http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        //'appium:gpsEnabled': true,
        //"appium:autoWebview": true, //! IMPORTANT
        //'appium:newCommandTimeout': '300',
    },
];

exports.config = config;
