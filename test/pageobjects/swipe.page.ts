import { Page } from './page.js';

class SwipePage extends Page {
    get swipeScreen() { return $('~Swipe-screen'); }
    get carousel() { return $('//*[@resource-id="Carousel"]'); }
    get cards() { return $$('~card'); }
    get logo() { return $('~WebdriverIO logo'); }
    get logoText() { return $('//*[@text="You found me!!!"]'); }
    async navigateToSwipe(): Promise<void> {
        await super.navigateTo('Swipe');
        await expect(this.swipeScreen).toBeDisplayed();
    }

    async swipeCarouselLeft(times: number = 5): Promise<void> {
        const carouselEl = await this.carousel;
        await carouselEl.waitForDisplayed({ timeout: 10000 });

        const cardsEl = await this.cards;
        await expect(cardsEl[0]).toBeDisplayed();

        for (let i = 0; i < times; i++) {
            await driver.execute('mobile: swipeGesture', {
                elementId: carouselEl.elementId,
                direction: 'left',
                percent: 0.75,
            });
            await driver.pause(1000);
            const currentCard = await this.cards;
            await expect(currentCard[0]).toBeDisplayed();
        }
    }

    async scrollDownToLogo(): Promise<void> {
        const swipeScreenEl = await this.swipeScreen;

        await driver.execute('mobile: scrollGesture', {
            elementId: swipeScreenEl.elementId,
            direction: 'down',
            percent: 3.0,
        });

        const logoEl = await this.logo;
        await logoEl.waitForDisplayed({ timeout: 10000 });
        await expect(logoEl).toBeDisplayed();

        const logoTextEl = await this.logoText;
        await expect(logoTextEl).toHaveText('You found me!!!');
    }
}

export default new SwipePage();
