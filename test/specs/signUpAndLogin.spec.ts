import LoginPage from '../pageobjects/loginPage';

describe('User SignUp & Login', () => {
    const userName = 'testuser@gmail.com';
    const password = 'Password123';

    beforeEach(async () => {
        await LoginPage.openApp();
        await LoginPage.navigateToLogin();
    });

    afterEach(async () => {
        await LoginPage.close();
    });

    it('sign up a user', async () => {
        await LoginPage.signUp(userName, password, password);
        await LoginPage.clickOk();
    });

    it('Login with valid credentials', async () => {
        await LoginPage.login(userName, password);
        await LoginPage.clickOk();
    });
});
