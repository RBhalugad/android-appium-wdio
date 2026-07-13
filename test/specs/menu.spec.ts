import MenuPage from '../pageobjects/menuPage';
import HomePage from '../pageobjects/homePage';
import WebviewPage from '../pageobjects/webviewPage';
import LoginPage from '../pageobjects/loginPage';
import FormsPage from '../pageobjects/formsPage';
import SwipePage from '../pageobjects/swipePage';
import DragPage from '../pageobjects/dragPage';

describe('Menu UI tests', () => {
    beforeEach(async () => {
        await MenuPage.openApp();
        await MenuPage.navigateToMenu();
    });

    afterEach(async () => {
        await MenuPage.close();
    });

    it('Opens menu and verify menu', async () => {
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
        await MenuPage.openHome();
        await HomePage.homeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(HomePage.homeScreen).toBeDisplayed();
    });

    it('Navigates to the Webview screen from menu', async () => {
        await MenuPage.openWebview();
        await WebviewPage.webviewScreen.waitForDisplayed({ timeout: 10000 });
        await expect(WebviewPage.webviewScreen).toBeDisplayed();
    });

    it('Navigates to the Login screen from menu', async () => {
        await MenuPage.openLogin();
        await LoginPage.loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(LoginPage.loginScreen).toBeDisplayed();
    });

    it('Navigates to the Forms screen from menu', async () => {
        await MenuPage.openForms();
        await FormsPage.formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(FormsPage.formsScreen).toBeDisplayed();
    });

    it('Navigates to the Swipe screen from menu', async () => {
        await MenuPage.openSwipe();
        await SwipePage.swipeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(SwipePage.swipeScreen).toBeDisplayed();
    });

    it('Navigates to the Drag screen from menu', async () => {
        await MenuPage.openDrag();
        await DragPage.dragScreen.waitForDisplayed({ timeout: 10000 });
        await expect(DragPage.dragScreen).toBeDisplayed();
    });
});
