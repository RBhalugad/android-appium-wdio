const locators = {
    get menuTab() {
        return $('~Menu');
    },
    get sideMenuPanel() {
        return $('~tab-side-menu-panel');
    },
    get homeItem() {
        return $('~side-menu-item-home');
    },
    get homeScreen() {
        return $('~Home-screen');
    },
    get webviewItem() {
        return $('~side-menu-item-webview');
    },
    get webviewScreen() {
        return $('//android.webkit.WebView');
    },
    menuItems: [
        'side-menu-item-home',
        'side-menu-item-webview',
        'side-menu-item-login',
        'side-menu-item-forms',
        'side-menu-item-swipe',
        'side-menu-item-drag',
        'side-menu-item-permissions',
        'side-menu-item-data-management',
    ],
    starIcons: [
        'side-menu-star-webview',
        'side-menu-star-login',
        'side-menu-star-forms',
        'side-menu-star-swipe',
        'side-menu-star-drag',
        'side-menu-star-permissions',
        'side-menu-star-data-management',
    ],
};

describe('Menu UI tests', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    it('Opens menu and verify menu', async () => {
        // Open the side menu by clicking the 'Menu' tab in the bottom navigation bar
        await locators.menuTab.waitForDisplayed({ timeout: 10000 });
        await locators.menuTab.click();

        // Verify the main side menu panel is displayed
        await locators.sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(locators.sideMenuPanel).toBeDisplayed();

        // Verify all the menu items from the screenshot
        for (const item of locators.menuItems) {
            const el = $(`~${item}`);
            await expect(el).toExist();
        }

        // Verify all the corresponding star icons from the screenshot
        for (const star of locators.starIcons) {
            const el = $(`~${star}`);
            await expect(el).toExist();
        }
    });

    it('Navigates to the Home screen from menu', async () => {
        // Open the side menu by clicking the 'Menu' tab in the bottom navigation bar
        await locators.menuTab.waitForDisplayed({ timeout: 10000 });
        await locators.menuTab.click();

        // Verify the main side menu panel is displayed
        await locators.sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(locators.sideMenuPanel).toBeDisplayed();

        // Navigate to Home
        await expect(locators.homeItem).toExist();
        await locators.homeItem.click();

        // Verify Home screen is displayed
        await locators.homeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(locators.homeScreen).toBeDisplayed();
    });

    it('Navigates to the Webview screen from menu', async () => {
        // Open the side menu by clicking the 'Menu' tab in the bottom navigation bar
        await locators.menuTab.waitForDisplayed({ timeout: 10000 });
        await locators.menuTab.click();

        // Verify the main side menu panel is displayed
        await locators.sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(locators.sideMenuPanel).toBeDisplayed();

        // Navigate to Webview
        await expect(locators.webviewItem).toExist();
        await locators.webviewItem.click();

        // Verify Webview screen is displayed
        await locators.webviewScreen.waitForDisplayed({ timeout: 10000 });
        await expect(locators.webviewScreen).toBeDisplayed();
    });
});
