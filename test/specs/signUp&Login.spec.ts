import LoginPage from '../pageobjects/login.page.js';

describe('User SignUp & Login', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000); 
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    it('sign up a user', async () => {
        const loginTab = await LoginPage.tabLogin;
        await loginTab.waitForDisplayed({ timeout: 10000 });
        await loginTab.click();

        const loginScreen = await LoginPage.loginScreen;
        await loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(loginScreen).toBeDisplayed();

        const signupTab = await LoginPage.signUpTab;
        await signupTab.click();

        await LoginPage.inputEmail.setValue('testuser@gmail.com');
        await LoginPage.inputPassword.setValue('Password123');
        await LoginPage.inputRepeatPassword.setValue('Password123');

        await LoginPage.btnSignUp.click();

        const okBtn = await LoginPage.btnOk;
        await okBtn.waitForDisplayed({ timeout: 10000 });
        await expect(okBtn).toBeDisplayed();
        await okBtn.click();
    });

    it('Login with valid credentials', async () => {
        const loginTab = await LoginPage.tabLogin;
        await loginTab.waitForDisplayed({ timeout: 10000 });
        await loginTab.click();

        const loginScreen = await LoginPage.loginScreen;
        await loginScreen.waitForDisplayed({ timeout: 10000 });
        await expect(loginScreen).toBeDisplayed();

        await LoginPage.login('testuser@gmail.com', 'Password123');

        const okBtn = await LoginPage.btnOk;
        await okBtn.waitForDisplayed({ timeout: 10000 });
        await expect(okBtn).toBeDisplayed();
        await okBtn.click();
    });
});
