import { Page } from './basePage';

class LoginPage extends Page {
    get loginScreen() {
        return $('~Login-screen');
    }
    get signUpTab() {
        return $('//android.widget.TextView[@text="Sign up"]');
    }
    get inputEmail() {
        return $('~input-email');
    }
    get inputPassword() {
        return $('~input-password');
    }
    get inputRepeatPassword() {
        return $('~input-repeat-password');
    }
    get btnSignUp() {
        return $('~button-SIGN UP');
    }
    get btnLogin() {
        return $('~button-LOGIN');
    }
    get btnOk() {
        return $('//*[@text="OK"]');
    }

    async login(email: string, pass: string): Promise<void> {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.btnLogin.click();
    }

    async navigateToLogin(): Promise<void> {
        await super.navigateTo('Login');
        await expect(this.loginScreen).toBeDisplayed();
    }

    async signUp(email: string, pass: string, repeatPass: string): Promise<void> {
        await this.signUpTab.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.inputRepeatPassword.setValue(repeatPass);
        await this.btnSignUp.click();
    }

    async clickOk(): Promise<void> {
        await this.btnOk.waitForDisplayed({ timeout: 10000 });
        await expect(this.btnOk).toBeDisplayed();
        await this.btnOk.click();
    }
}

export default new LoginPage();
