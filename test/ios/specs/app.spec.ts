import SampleAppPage from '../pageobjects/sampleAppPage';

describe('iOS - BrowserStack Sample App', () => {
    it('enters text and verifies the output', async () => {
        const inputText = 'hello@browserstack.com';

        await SampleAppPage.clickTextButton();
        await SampleAppPage.enterText(inputText);
        await SampleAppPage.waitForOutputText(inputText);

        const outputText = await SampleAppPage.getOutputText();
        await expect(outputText).toBe(inputText);
    });
});
