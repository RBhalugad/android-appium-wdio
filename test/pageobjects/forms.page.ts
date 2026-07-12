import { Page } from './page.js';

class FormsPage extends Page {
    get formsScreen() { return $('~Forms-screen'); }
    get input() { return $('~text-input'); }
    get inputResult() { return $('~input-text-result'); }
    get switch() { return $('~switch'); }
    get switchText() { return $('~switch-text'); }
    get dropdown() { return $('~Dropdown'); }
    get btnActive() { return $('~button-Active'); }
    get btnInactive() { return $('~button-Inactive'); }
    get btnOk() { return $('//*[@text="OK"]'); }
}

export default new FormsPage();
