import { Locators } from '../locators.js';

describe('Form tests', () => {
    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
        await driver.activateApp('com.wdiodemoapp');
        const formsTab = await $(Locators.FormsTab);
        await formsTab.waitForDisplayed();
        await formsTab.click();
        const formsScreen = await $(Locators.FormsScreen);
        await formsScreen.waitForDisplayed({ timeout: 10000 });
    });

    it('Verify typing into an input field', async () => {
        const inputField = await $(Locators.FormInput);
        await inputField.waitForDisplayed({ timeout: 10000 });
        await inputField.setValue('Hello Appium!');

        const inputResult = await $(Locators.FormInputResult);
        await expect(inputResult).toHaveText('Hello Appium!');
    });

    it('Verify toggle button', async () => {
        const switchBtn = await $(Locators.FormSwitch);
        await switchBtn.waitForDisplayed({ timeout: 10000 });

        const switchText = await $(Locators.FormSwitchText);
        await expect(switchText).toHaveText('Click to turn the switch ON');

        await switchBtn.click();

        await expect(switchText).toHaveText('Click to turn the switch OFF');
    });

    it('verify active and inactive buttons', async () => {
        const activeBtn = await $(Locators.FormActiveButton);
        await activeBtn.waitForDisplayed({ timeout: 10000 });
        await activeBtn.click();

        const okBtn = await $(Locators.OkButton);
        await okBtn.waitForDisplayed({ timeout: 10000 });
        await okBtn.click();

        const inactiveBtn = await $(Locators.FormInactiveButton);
        await expect(inactiveBtn).toExist();
    });

    it('verify dropdown', async () => {
        const dropdown = await $(Locators.FormDropdown);
        await dropdown.waitForDisplayed({ timeout: 10000 });
        await dropdown.click();

        const option = await $('//*[@text="webdriver.io is awesome"]');
        await option.waitForDisplayed({ timeout: 10000 });
        await option.click();
    });
});
