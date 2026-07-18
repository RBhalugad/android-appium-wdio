export class BasePage {
    private readonly appId = process.env.ANDROID_APP_ID ?? 'com.wdiodemoapp';

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
        await driver.activateApp(this.appId);
        await driver.waitUntil(async () => (await driver.getPageSource()).length > 0, {
            timeout: 20000,
            timeoutMsg: 'Android app did not finish launching.',
        });
    }

    async close() {
        await driver.terminateApp(this.appId);
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
