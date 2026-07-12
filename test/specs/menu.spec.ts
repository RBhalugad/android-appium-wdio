import { Locators } from '../locators.js';

describe('Menu UI tests', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000);
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    it('Opens menu and verify menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        for (const item of Locators.MenuItems) {
            const el = $(`~${item}`);
            await expect(el).toExist();
        }

        for (const star of Locators.StarIcons) {
            const el = $(`~${star}`);
            await expect(el).toExist();
        }
    });

    it('Navigates to the Home screen from menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const homeItem = await $(Locators.MenuHomeItem);
        await expect(homeItem).toExist();
        await homeItem.click();

        const homeScreen = await $(Locators.HomeScreen);
        await homeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(homeScreen).toBeDisplayed();
    });

    it('Navigates to the Webview screen from menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const webviewItem = await $(Locators.MenuWebviewItem);
        await expect(webviewItem).toExist();
        await webviewItem.click();

        const webviewScreen = await $(Locators.WebviewScreen);
        await webviewScreen.waitForDisplayed({ timeout: 10000 });
        await expect(webviewScreen).toBeDisplayed();
    });
    it('Navigates to the Login screen from menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const loginItem = await $(Locators.MenuLoginItem);
        await expect(loginItem).toExist();
        await loginItem.click();

        const loginScreen = await $(Locators.LoginScreen);
        await loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(loginScreen).toBeDisplayed();
    });

    it('Navigates to the Forms screen from menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const formsItem = await $(Locators.MenuFormsItem);
        await expect(formsItem).toExist();
        await formsItem.click();

        const formsScreen = await $(Locators.FormsScreen);
        await formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(formsScreen).toBeDisplayed();
    });

    it('Navigates to the Swipe screen from menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const swipeItem = await $(Locators.MenuSwipeItem);
        await expect(swipeItem).toExist();
        await swipeItem.click();

        const swipeScreen = await $(Locators.SwipeScreen);
        await swipeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(swipeScreen).toBeDisplayed();
    });

    it('Navigates to the Drag screen from menu', async () => {
        const menuTab = await $(Locators.MenuTab);
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await $(Locators.SideMenuPanel);
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const dragItem = await $(Locators.MenuDragItem);
        await expect(dragItem).toExist();
        await dragItem.click();

        const dragScreen = await $(Locators.DragScreen);
        await dragScreen.waitForDisplayed({ timeout: 10000 });
        await expect(dragScreen).toBeDisplayed();
    });
});
