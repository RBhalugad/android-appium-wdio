import { BasePage } from './basePage';

class WebviewPage extends BasePage {
    get webviewScreen() {
        return $('//android.webkit.WebView');
    }
}
export default new WebviewPage();
