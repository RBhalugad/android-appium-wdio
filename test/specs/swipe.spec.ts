import { Locators } from '../locators.js';

describe('Swipe gestures tests', () => {
    beforeEach(async () => {
        await driver.activateApp('com.wdiodemoapp');
        await driver.pause(2000);
    });

    afterEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
    });

    it('Verify swiping one by one and card to be displayed', async () => {
        const swipeTab = await $(Locators.SwipeTab);
        await swipeTab.waitForDisplayed({ timeout: 10000 });
        await swipeTab.click();

        const swipeScreen = await $(Locators.SwipeScreen);
        await swipeScreen.waitForDisplayed({ timeout: 10000 });
        await expect(swipeScreen).toBeDisplayed();

        const carousel = await $(Locators.Carousel);
        await carousel.waitForDisplayed({ timeout: 10000 });

        const cards = await $$(Locators.Card);
        await expect(cards[0]).toBeDisplayed();

        for (let i = 0; i < 5; i++) {
            await driver.execute('mobile: swipeGesture', {
                elementId: carousel.elementId,
                direction: 'left',
                percent: 0.75,
            });
            await driver.pause(1000);
            const currentCard = await $$(Locators.Card)[0];
            await expect(currentCard).toBeDisplayed();
        }
    });
});
