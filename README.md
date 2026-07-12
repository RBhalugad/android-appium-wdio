# Android + Appium + WebdriverIO (TypeScript) — Starter

A complete working project for testing an Android app on a **real device** or **emulator** with [WebdriverIO](https://webdriver.io) v9, [Appium](https://appium.io) 3, and the **Page Object Model (POM)** pattern.

This test framework is currently built against the [WebdriverIO Native Demo App](https://github.com/webdriverio/native-demo-app) and covers various mobile automation scenarios including:

- **Authentication**: Sign up & Login flows
- **Gestures**: Drag and Drop (Puzzle), Swipe (Carousel)
- **Forms**: Input fields, Switches, Dropdowns
- **Navigation**: Side Menu verification and page transitions

## One-time machine setup

1. **Node.js 24 LTS** — https://nodejs.org
2. **Java JDK 17** — https://adoptium.net (set `JAVA_HOME`)
3. **Android SDK Platform-Tools** (gives you `adb`) — https://developer.android.com/tools/releases/platform-tools
   (set `ANDROID_HOME` to the folder containing `platform-tools`, and add
   `%ANDROID_HOME%\platform-tools` to your `PATH`)
4. **Appium + driver**, installed globally:
    ```bash
    npm install -g appium
    appium driver install uiautomator2
    ```
5. On your phone: enable **Developer options** → **USB debugging**, plug it in via USB, and confirm it shows up. For emulators, simply start a virtual device via Android Studio:
    ```bash
    adb devices -l
    ```

## Project setup

```bash
npm install
```

Then:

1. Download the demo app APK from https://github.com/webdriverio/native-demo-app/releases/latest and put it in `./apps`. (Named `android_native.apk`)
2. Make sure your Android emulator is running or real device is plugged in.

## Project Structure

This framework uses the **Page Object Model** pattern for clean, maintainable automation code.

- `test/pageobjects/` — Contains screen-specific page classes with all element locators and common actions (e.g., `login.page.ts`, `drag.page.ts`). They extend `base.page.ts`.
- `test/specs/` — Contains all Mocha test files organized by feature (`app.spec.ts`, `drag.spec.ts`, `form.spec.ts`, `menu.spec.ts`, `signUp&Login.spec.ts`, `swipe.spec.ts`).

## Run the tests

To execute the entire test suite:

```bash
npm test
```

This command automatically starts the Appium server, installs the APK, executes all test files under `test/specs/`, and shuts down Appium afterward.

## Next steps

- **Testing your own app**: Drop your `.apk` in `./apps` instead, update the `app` capability in `wdio.conf.ts`, and update the locators in the page objects — use the [Appium Inspector](https://github.com/appium/appium-inspector) to find the accessibility IDs / resource IDs for your app's elements.
- **Appium logs**: Written to `./logs/appium.log` if something misbehaves.
- **Reporting**: This project is equipped with `allure-reporter`. You can run `npm run report` (if configured in `package.json`) to generate beautiful HTML reports of your test runs.
