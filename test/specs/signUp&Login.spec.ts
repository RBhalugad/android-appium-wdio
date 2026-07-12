describe('User  SignUp & Login', () => {
    const locators = {
        get loginTab() {
            return $('~Login');
        },
        get loginScreen() {
            return $('~Login-screen');
        },
        get signUpTab() {
            return $('//android.widget.TextView[@text="Sign up"]');
        },
        get nameInput() {
            return $('~input-email');
        },
        get passwordInput() {
            return $('~input-password');
        },
        get signUpButton() {
            return $('~button-SIGN UP');
        },
        get loginButton() {
            return $('~button-LOGIN');
        },
        get okButton() {
            return $('//*[@text="OK"]');
        },
    };

    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000); // Give the app a moment to settle to prevent UI Automator hangs
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    after(async () => {
        // await driver.deleteSession();
    });

    it('sign up a user ', async () => {
        await locators.loginTab.click();
        await locators.loginScreen.waitForDisplayed({ timeout: 10000 });

        await locators.signUpTab.click();

        await locators.nameInput.setValue('test@example.com');
        await locators.passwordInput.setValue('Password123!');

        const repeatPasswordInput = $('~input-repeat-password');
        await repeatPasswordInput.setValue('Password123!');

        await locators.signUpButton.waitForDisplayed({ timeout: 10000 });
        await locators.signUpButton.click();

        // Handle successful sign up alert
        await locators.okButton.waitForDisplayed({ timeout: 10000 });
        await locators.okButton.click();
    });

    it('Login with valid credentials', async () => {
        await locators.loginTab.click();
        await locators.loginScreen.waitForDisplayed({ timeout: 10000 });

        await locators.nameInput.setValue('test@example.com');
        await locators.passwordInput.setValue('Password123!');

        await locators.loginButton.waitForDisplayed({ timeout: 10000 });
        await locators.loginButton.click();

        // Handle successful login alert
        const alertOkBtn = $('//*[@text="OK"]');
        await alertOkBtn.waitForDisplayed({ timeout: 10000 });
        await alertOkBtn.click();
    });
});
