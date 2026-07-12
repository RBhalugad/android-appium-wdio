describe('WebdriverIO + Appium smoke test', () => {
    const appPackage = 'com.wdiodemoapp';

    beforeEach(async () => {
        await driver.activateApp(appPackage);
    });

    afterEach(async () => {
        await driver.terminateApp(appPackage);
    });

    after(async () => {
        await driver.deleteSession();
    });

    it('launches the app and shows the Home tab', async () => {
        const homeTab = await $('~Home');
        await homeTab.waitForDisplayed({ timeout: 20000 });
        await expect(homeTab).toBeDisplayed();
    });

    it('navigates to the Login screen', async () => {
        await $('~Login').click();

        const loginScreen = await $('~Login-screen');
        await loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(loginScreen).toBeDisplayed();
    });
});
