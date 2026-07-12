import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';

describe('WebdriverIO + Appium smoke test', () => {
    const appPackage = 'com.wdiodemoapp';

    beforeEach(async () => {
        await driver.activateApp(appPackage);
    });

    afterEach(async () => {
        await driver.terminateApp(appPackage);
    });

    it('launches the app and shows the Home tab', async () => {
        const homeTab = await HomePage.tabHome;
        await homeTab.waitForDisplayed({ timeout: 20000 });
        await expect(homeTab).toBeDisplayed();
    });

    it('navigates to the Login screen', async () => {
        await HomePage.tabLogin.click();

        const loginScreen = await LoginPage.loginScreen;
        await loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(loginScreen).toBeDisplayed();
    });
});
