import { Page } from './page.js';

class SwipePage extends Page {
    get swipeScreen() { return $('~Swipe-screen'); }
    get carousel() { return $('//*[@resource-id="Carousel"]'); }
    get cards() { return $$('~card'); }
}

export default new SwipePage();
