import { BasePage } from './basePage';

class SampleAppPage extends BasePage {
    get textButton() {
        return $('~Text Button');
    }
    get textInput() {
        return $('~Text Input');
    }
    get textOutput() {
        return $('~Text Output');
    }

    async clickTextButton(): Promise<void> {
        await this.textButton.waitForDisplayed({ timeout: 30000 });
        await this.textButton.click();
    }

    async enterText(text: string): Promise<void> {
        await this.textInput.waitForDisplayed({ timeout: 30000 });
        await this.textInput.setValue(text + '\n');
    }

    async getOutputText(): Promise<string> {
        await this.textOutput.waitForDisplayed({ timeout: 30000 });
        return await this.textOutput.getText();
    }
}

export default new SampleAppPage();
