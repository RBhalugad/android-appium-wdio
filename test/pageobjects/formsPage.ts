import { BasePage } from './basePage';

class FormsPage extends BasePage {
    get formsScreen() {
        return $('~Forms-screen');
    }
    get input() {
        return $('~text-input');
    }
    get inputResult() {
        return $('~input-text-result');
    }
    get switch() {
        return $('~switch');
    }
    get switchText() {
        return $('~switch-text');
    }
    get dropdown() {
        return $('~Dropdown');
    }
    get btnActive() {
        return $('~button-Active');
    }
    get btnInactive() {
        return $('~button-Inactive');
    }
    get btnOk() {
        return $('//*[@text="OK"]');
    }

    async navigateToForms(): Promise<void> {
        await super.navigateTo('Forms');
        await expect(this.formsScreen).toBeDisplayed();
    }

    async fillInput(text: string): Promise<void> {
        await this.input.setValue(text);
        await expect(this.inputResult).toHaveText(text);
    }

    async toggleSwitch(): Promise<void> {
        await this.switch.click();
        await expect(this.switchText).toHaveText('Click to turn the switch OFF');
    }

    async openDropdown(): Promise<void> {
        await this.dropdown.click();
    }

    async selectDropdownValue(value: string): Promise<void> {
        await this.openDropdown();
        const option = await $(`//android.widget.CheckedTextView[@text="${value}"]`);
        await option.click();
    }

    async clickBtnActive(): Promise<void> {
        await this.btnActive.click();
    }

    async clickBtnInactive(): Promise<void> {
        await this.btnInactive.click();
    }

    async clickBtnOk(): Promise<void> {
        await this.btnOk.click();
    }
}

export default new FormsPage();
