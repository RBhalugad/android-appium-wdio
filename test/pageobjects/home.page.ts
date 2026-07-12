import { Page } from './page.js';

class HomePage extends Page {
    get homeScreen() { return $('~Home-screen'); }
}

export default new HomePage();
