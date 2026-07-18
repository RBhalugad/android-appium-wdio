export class BasePage {
    /**
     * Bundle ID for the WebdriverIO Native Demo App (iOS).
     * Update this if you are testing a different app.
     */
    private readonly bundleId = 'com.wdiodemoapp';

    get tabHome() {
        return $('~Home');
    }
    get tabWebview() {
        return $('~Webview');
    }
    get tabLogin() {
        return $('~Login');
    }
    get tabForms() {
        return $('~Forms');
    }
    get tabSwipe() {
        return $('~Swipe');
    }
    get tabDrag() {
        return $('~Drag');
    }
    get tabMenu() {
        return $('~Menu');
    }

    async openApp() {
        await driver.activateApp(this.bundleId);
        await driver.pause(2000);
    }

    async close() {
        await driver.terminateApp(this.bundleId);
    }

    async navigateTo(tab: string) {
        const tabElement = await $(`~${tab}`);
        await tabElement.waitForDisplayed({ timeout: 10000 });
        await tabElement.click();
    }

    async switchContext(contextName: string) {
        await driver.switchContext(contextName);
    }

    async getContexts(): Promise<string[]> {
        return (await driver.getContexts()) as string[];
    }

    async switchToWebview() {
        const contexts = await this.getContexts();
        const webviewContext = contexts.find((context: string) => context.includes('WEBVIEW'));
        if (webviewContext) {
            await this.switchContext(webviewContext);
        } else {
            throw new Error('No webview context found');
        }
    }

    async switchToNativeContext() {
        await this.switchContext('NATIVE_APP');
    }

    async acceptAlert() {
        await driver.acceptAlert();
    }

    async dismissAlert() {
        await driver.dismissAlert();
    }

    async getAlertText(): Promise<string> {
        return await driver.getAlertText();
    }
}
