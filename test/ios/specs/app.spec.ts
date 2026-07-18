import HomePage from '../pageobjects/homePage';

describe('iOS – App launch smoke test', () => {
    it('launches the app, verifies the Home tab, and closes', async () => {
        // The app is auto-installed and launched by Appium via the .ipa capability.
        // Verify the Home tab is visible after launch.
        const homeTab = await HomePage.tabHome;
        await homeTab.waitForDisplayed({ timeout: 20000 });
        await expect(homeTab).toBeDisplayed();

        // Close the app gracefully.
        await HomePage.close();
    });
});
