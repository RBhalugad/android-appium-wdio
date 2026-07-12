export class Page {
    get tabHome() { return $('~Home'); }
    get tabWebview() { return $('~Webview'); }
    get tabLogin() { return $('~Login'); }
    get tabForms() { return $('~Forms'); }
    get tabSwipe() { return $('~Swipe'); }
    get tabDrag() { return $('~Drag'); }
    get tabMenu() { return $('~Menu'); }

    async openApp() {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000);
    }

    async close() {
        await driver.terminateApp('com.wdiodemoapp');
    }

    async navigateTo(tab: string) {
        const tabElement = await $(`~${tab}`);
        await tabElement.waitForDisplayed({ timeout: 10000 });
        await tabElement.click();
    }
}
