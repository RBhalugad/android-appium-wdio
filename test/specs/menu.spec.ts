import MenuPage from '../pageobjects/menu.page.js';
import HomePage from '../pageobjects/home.page.js';
import WebviewPage from '../pageobjects/webview.page.js';
import LoginPage from '../pageobjects/login.page.js';
import FormsPage from '../pageobjects/forms.page.js';
import SwipePage from '../pageobjects/swipe.page.js';
import DragPage from '../pageobjects/drag.page.js';

describe('Menu UI tests', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000);
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    it('Opens menu and verify menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        for (const item of MenuPage.menuItems) {
            const el = $(`~${item}`);
            await expect(el).toExist();
        }

        for (const star of MenuPage.starIcons) {
            const el = $(`~${star}`);
            await expect(el).toExist();
        }
    });

    it('Navigates to the Home screen from menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const homeItem = await MenuPage.menuHomeItem;
        await expect(homeItem).toExist();
        await homeItem.click();

        const homeScreen = await HomePage.homeScreen;
        await homeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(homeScreen).toBeDisplayed();
    });

    it('Navigates to the Webview screen from menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const webviewItem = await MenuPage.menuWebviewItem;
        await expect(webviewItem).toExist();
        await webviewItem.click();

        const webviewScreen = await WebviewPage.webviewScreen;
        await webviewScreen.waitForDisplayed({ timeout: 10000 });
        await expect(webviewScreen).toBeDisplayed();
    });

    it('Navigates to the Login screen from menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const loginItem = await MenuPage.menuLoginItem;
        await expect(loginItem).toExist();
        await loginItem.click();

        const loginScreen = await LoginPage.loginScreen;
        await loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(loginScreen).toBeDisplayed();
    });

    it('Navigates to the Forms screen from menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const formsItem = await MenuPage.menuFormsItem;
        await expect(formsItem).toExist();
        await formsItem.click();

        const formsScreen = await FormsPage.formsScreen;
        await formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(formsScreen).toBeDisplayed();
    });

    it('Navigates to the Swipe screen from menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const swipeItem = await MenuPage.menuSwipeItem;
        await expect(swipeItem).toExist();
        await swipeItem.click();

        const swipeScreen = await SwipePage.swipeScreen;
        await swipeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(swipeScreen).toBeDisplayed();
    });

    it('Navigates to the Drag screen from menu', async () => {
        const menuTab = await MenuPage.tabMenu;
        await menuTab.waitForDisplayed({ timeout: 10000 });
        await menuTab.click();

        const sideMenuPanel = await MenuPage.sideMenuPanel;
        await sideMenuPanel.waitForDisplayed({ timeout: 10000 });
        await expect(sideMenuPanel).toBeDisplayed();

        const dragItem = await MenuPage.menuDragItem;
        await expect(dragItem).toExist();
        await dragItem.click();

        const dragScreen = await DragPage.dragScreen;
        await dragScreen.waitForDisplayed({ timeout: 10000 });
        await expect(dragScreen).toBeDisplayed();
    });
});
