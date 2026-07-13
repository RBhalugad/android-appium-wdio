import { Page } from './basePage';

class HomePage extends Page {
    get homeScreen() {
        return $('~Home-screen');
    }
}

export default new HomePage();
