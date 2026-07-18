import SampleAppPage from '../pageobjects/sampleAppPage';

describe('iOS – BrowserStack Sample App', () => {
    it('enters text and verifies the output', async () => {
        const inputText = 'hello@browserstack.com';

        await SampleAppPage.clickTextButton();
        await SampleAppPage.enterText(inputText);

        await driver.pause(5000);

        const outputText = await SampleAppPage.getOutputText();
        await expect(outputText).toBe(inputText);
    });
});
