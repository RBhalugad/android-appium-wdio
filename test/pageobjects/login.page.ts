import { Page } from './page.js';

class LoginPage extends Page {
    get loginScreen() { return $('~Login-screen'); }
    get signUpTab() { return $('//android.widget.TextView[@text="Sign up"]'); }
    get inputEmail() { return $('~input-email'); }
    get inputPassword() { return $('~input-password'); }
    get inputRepeatPassword() { return $('~input-repeat-password'); }
    get btnSignUp() { return $('~button-SIGN UP'); }
    get btnLogin() { return $('~button-LOGIN'); }
    get btnOk() { return $('//*[@text="OK"]'); }

    async login(email: string, pass: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
