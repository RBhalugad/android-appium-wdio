import { Locators } from '../locators.js';

describe('User  SignUp & Login', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000);
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    after(async () => {});

    it('sign up a user ', async () => {
        await $(Locators.LoginTab).click();
        await $(Locators.LoginScreen).waitForDisplayed({ timeout: 10000 });

        await $(Locators.SignUpTab).click();

        await $(Locators.EmailInput).setValue('test@example.com');
        await $(Locators.PasswordInput).setValue('Password123!');

        const repeatPasswordInput = $(Locators.RepeatPasswordInput);
        await repeatPasswordInput.setValue('Password123!');

        await $(Locators.SignUpButton).waitForDisplayed({ timeout: 10000 });
        await $(Locators.SignUpButton).click();

        await $(Locators.OkButton).waitForDisplayed({ timeout: 10000 });
        await $(Locators.OkButton).click();
    });

    it('Login with valid credentials', async () => {
        await $(Locators.LoginTab).click();
        await $(Locators.LoginScreen).waitForDisplayed({ timeout: 10000 });

        await $(Locators.EmailInput).setValue('test@example.com');
        await $(Locators.PasswordInput).setValue('Password123!');

        await $(Locators.LoginButton).waitForDisplayed({ timeout: 10000 });
        await $(Locators.LoginButton).click();

        const alertOkBtn = $(Locators.OkButton);
        await alertOkBtn.waitForDisplayed({ timeout: 10000 });
        await alertOkBtn.click();
    });
});
