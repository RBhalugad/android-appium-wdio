import SwipePage from '../pageobjects/swipe.page.js';

describe('Swipe gestures tests', () => {
    beforeEach(async () => {
        await SwipePage.openApp();
        await SwipePage.navigateToSwipe();
    });

    afterEach(async () => {
        await SwipePage.close();
    });

    it('Verify swiping one by one and card to be displayed', async () => {
        await SwipePage.swipeCarouselLeft(5);
    });

    it('Verify swiping vertically to find the logo', async () => {
        await SwipePage.scrollDownToLogo();
    });
});
