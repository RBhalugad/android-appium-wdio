# Android & iOS Appium + WebdriverIO Starter

A TypeScript test automation starter using [WebdriverIO](https://webdriver.io) v9,
[Appium](https://appium.io) 3, Mocha, Allure, and the Page Object Model pattern.

The current Android suite targets the
[WebdriverIO Native Demo App](https://github.com/webdriverio/native-demo-app). The current iOS
smoke test targets the BrowserStack Sample App. You can replace either app by putting your own
build in `apps/` and updating the page-object locators.

Covered Android flows include:

- Authentication: sign up and login
- Gestures: drag and drop, carousel swipe, vertical scroll
- Forms: input fields, switches, dropdowns, active/inactive buttons
- Navigation: bottom tabs and side menu transitions

## One-Time Machine Setup

1. Install Node.js 24 LTS: https://nodejs.org
2. Install Java JDK 17: https://adoptium.net and set `JAVA_HOME`.
3. Install Android SDK Platform-Tools: https://developer.android.com/tools/releases/platform-tools
   and make sure `adb` is on your `PATH`.
4. Install Appium and drivers:

    ```bash
    npm install -g appium
    appium driver install uiautomator2
    appium driver install xcuitest
    ```

5. For Android, enable Developer options and USB debugging, then confirm the device/emulator is
   visible:

    ```bash
    adb devices -l
    ```

## Project Setup

Install dependencies:

```bash
npm install
```

Put app builds in `apps/`:

- Android local run: place exactly one `.apk` in `apps/`.
- iOS local run: place exactly one `.ipa` in `apps/`.
- BrowserStack runs: set uploaded app URLs in environment variables.

Create a local `.env` from `.env.example` when you need credentials or machine-specific settings:

```bash
cp .env.example .env
```

Useful local variables:

- `ANDROID_UDID`: optional Android device serial from `adb devices -l`.
- `ANDROID_APP_ID`: Android app package id, defaults to `com.wdiodemoapp`.
- `IOS_DEVICE_NAME`: simulator/device name, defaults to `iPhone 16`.
- `IOS_PLATFORM_VERSION`: iOS version, defaults to `18.0`.
- `IOS_UDID`: optional iOS real-device UDID.
- `IOS_BUNDLE_ID`: iOS bundle id, defaults to `com.browserstack.Sample-iOS`.
- `APPIUM_NO_RESET`: set to `true` only when you intentionally want to preserve app state.

## Project Structure

- `config/`: shared, local, and BrowserStack WDIO configs.
- `test/android/pageobjects/`: Android screen objects and common actions.
- `test/android/specs/`: Android Mocha specs.
- `test/ios/pageobjects/`: iOS screen objects and common actions.
- `test/ios/specs/`: iOS Mocha specs.

## Run Tests

```bash
npm run test:android
npm run test:ios
```

Run against BrowserStack:

```bash
npm run test:android:browserstack
npm run test:ios:browserstack
```

Quality checks:

```bash
npm run format:check
npm run typecheck
```

Generate an Allure report after a run:

```bash
npm run report
```

## Adapting To Your App

1. Put your `.apk` or `.ipa` in `apps/`.
2. Set `ANDROID_APP_ID` or `IOS_BUNDLE_ID` if your app id differs from the demo defaults.
3. Update capabilities in `config/wdio.android.conf.ts` or `config/wdio.ios.conf.ts` only for
   platform/device behavior.
4. Update locators and flows under `test/android/pageobjects/` or `test/ios/pageobjects/`.
5. Use Appium Inspector to find stable accessibility ids and resource ids.
