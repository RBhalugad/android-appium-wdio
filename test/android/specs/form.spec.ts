import FormsPage from '../pageobjects/formsPage';

describe('Form tests', () => {
    beforeEach(async () => {
        await FormsPage.openApp();
        await FormsPage.navigateToForms();
    });

    afterEach(async () => {
        await FormsPage.close();
    });

    it('Verify typing into an input field', async () => {
        await FormsPage.input.waitForDisplayed({ timeout: 10000 });
        await FormsPage.fillInput('WebDriverIO Forms Test');
    });

    it('Verify toggle button', async () => {
        await FormsPage.toggleSwitch();
    });

    it('verify active and inactive buttons', async () => {
        await FormsPage.clickBtnActive();

        await FormsPage.btnOk.waitForDisplayed({ timeout: 10000 });
        await FormsPage.clickBtnOk();

        const inactiveBtn = await FormsPage.btnInactive;
        await expect(inactiveBtn).toBeDisplayed();
    });

    it('verify dropdown', async () => {
        await FormsPage.selectDropdownValue('webdriver.io is awesome');
    });
});
