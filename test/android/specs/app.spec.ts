import HomePage from '../pageobjects/homePage';
import LoginPage from '../pageobjects/loginPage';

describe('WebdriverIO + Appium smoke test', () => {
    beforeEach(async () => {
        await HomePage.openApp();
    });

    afterEach(async () => {
        await HomePage.close();
    });

    it('launches the app and shows the Home tab', async () => {
        const homeTab = await HomePage.tabHome;
        await homeTab.waitForDisplayed({ timeout: 20000 });
        await expect(homeTab).toBeDisplayed();
    });

    it('navigates to the Login screen', async () => {
        await LoginPage.navigateToLogin();
    });
});
