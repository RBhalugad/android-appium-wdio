# Android + Appium + WebdriverIO (TypeScript) — Starter

A minimal, working project for testing an Android app on a **real device**
with [WebdriverIO](https://webdriver.io) v9 and [Appium](https://appium.io) 3.

This is the quick-reference version. The full walkthrough (installing
Node, Java, ADB, enabling USB debugging, etc.) is in the chat where this
project was generated — keep this README for when you come back to it later.

## One-time machine setup

1. **Node.js 24 LTS** — https://nodejs.org
2. **Java JDK 17** — https://adoptium.net (set `JAVA_HOME`)
3. **Android SDK Platform-Tools** (gives you `adb`) — https://developer.android.com/tools/releases/platform-tools
   (set `ANDROID_HOME` to the folder containing `platform-tools`, and add
   `%ANDROID_HOME%\platform-tools` to your `PATH`)
4. **Appium + driver**, installed globally:
    ```
    npm install -g appium
    appium driver install uiautomator2
    ```
5. On your phone: enable **Developer options** → **USB debugging**, plug
   it in via USB, and confirm it shows up:
    ```
    adb devices -l
    ```

## Project setup

```
npm install
```

Then:

1. Download the demo app APK from
   https://github.com/webdriverio/native-demo-app/releases/latest
   and put it in `./apps`.
2. Run `adb devices -l`, copy your phone's serial number, and paste it
   into `wdio.conf.ts` in place of `REPLACE_WITH_YOUR_DEVICE_UDID`.

## Run the tests

```
npm test
```

This starts Appium for you, installs the app on your phone, runs
`test/specs/app.spec.ts`, and shuts Appium down again afterward.

## Next steps

- **Testing your own app**: drop your `.apk` in `./apps` instead, and
  update the selectors in `test/specs/app.spec.ts` — use the
  [Appium Inspector](https://github.com/appium/appium-inspector) to find
  the accessibility ids / resource ids for your app's elements.
- **Appium logs**: written to `./logs/appium.log` if something misbehaves.
- **More capabilities**: https://github.com/appium/appium-uiautomator2-driver
- **A larger reference project** (page objects, multiple platforms, cloud
  vendors): https://github.com/webdriverio/appium-boilerplate
