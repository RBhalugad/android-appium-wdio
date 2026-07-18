import { BasePage } from './basePage';

class HomePage extends BasePage {
    get homeScreen() {
        return $('~Home-screen');
    }
}

export default new HomePage();
