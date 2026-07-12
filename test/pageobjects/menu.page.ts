import { Page } from './page.js';

class MenuPage extends Page {
    get sideMenuPanel() { return $('~tab-side-menu-panel'); }
    
    get menuHomeItem() { return $('~side-menu-item-home'); }
    get menuWebviewItem() { return $('~side-menu-item-webview'); }
    get menuLoginItem() { return $('~side-menu-item-login'); }
    get menuFormsItem() { return $('~side-menu-item-forms'); }
    get menuSwipeItem() { return $('~side-menu-item-swipe'); }
    get menuDragItem() { return $('~side-menu-item-drag'); }

    get menuItems() {
        return [
            'side-menu-item-home',
            'side-menu-item-webview',
            'side-menu-item-login',
            'side-menu-item-forms',
            'side-menu-item-swipe',
            'side-menu-item-drag',
            'side-menu-item-permissions',
            'side-menu-item-data-management',
        ];
    }

    get starIcons() {
        return [
            'side-menu-star-webview',
            'side-menu-star-login',
            'side-menu-star-forms',
            'side-menu-star-swipe',
            'side-menu-star-drag',
            'side-menu-star-permissions',
            'side-menu-star-data-management',
        ];
    }
}

export default new MenuPage();
