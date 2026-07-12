import FormsPage from '../pageobjects/forms.page.js';

describe('Form tests', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000);
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    it('Verify typing into an input field', async () => {
        const formsTab = await FormsPage.tabForms;
        await formsTab.waitForDisplayed({ timeout: 10000 });
        await formsTab.click();

        const formsScreen = await FormsPage.formsScreen;
        await formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(formsScreen).toBeDisplayed();

        const input = await FormsPage.input;
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue('WebDriverIO Forms Test');

        const inputResult = await FormsPage.inputResult;
        await expect(inputResult).toHaveText('WebDriverIO Forms Test');
    });

    it('Verify toggle button', async () => {
        const formsTab = await FormsPage.tabForms;
        await formsTab.waitForDisplayed({ timeout: 10000 });
        await formsTab.click();

        const formsScreen = await FormsPage.formsScreen;
        await formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(formsScreen).toBeDisplayed();

        const switchText = await FormsPage.switchText;
        await expect(switchText).toHaveText('Click to turn the switch ON');

        const toggle = await FormsPage.switch;
        await toggle.click();

        await expect(switchText).toHaveText('Click to turn the switch OFF');
    });

    it('verify active and inactive buttons', async () => {
        const formsTab = await FormsPage.tabForms;
        await formsTab.waitForDisplayed({ timeout: 10000 });
        await formsTab.click();

        const formsScreen = await FormsPage.formsScreen;
        await formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(formsScreen).toBeDisplayed();

        const activeBtn = await FormsPage.btnActive;
        await activeBtn.click();

        const okBtn = await FormsPage.btnOk;
        await okBtn.waitForDisplayed({ timeout: 10000 });
        await okBtn.click();

        const inactiveBtn = await FormsPage.btnInactive;
        await expect(inactiveBtn).toBeDisplayed();
    });

    it('verify dropdown', async () => {
        const formsTab = await FormsPage.tabForms;
        await formsTab.waitForDisplayed({ timeout: 10000 });
        await formsTab.click();

        const formsScreen = await FormsPage.formsScreen;
        await formsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(formsScreen).toBeDisplayed();

        const dropdown = await FormsPage.dropdown;
        await dropdown.click();

        const option = await $("//*[@text='webdriver.io is awesome']");
        await option.waitForDisplayed({ timeout: 10000 });
        await option.click();
    });
});
