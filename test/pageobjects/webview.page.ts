import { Page } from './page.js';

class WebviewPage extends Page {
    get webviewScreen() { return $('//android.webkit.WebView'); }
}
export default new WebviewPage();
