import { Page } from './basePage';

class WebviewPage extends Page {
    get webviewScreen() {
        return $('//android.webkit.WebView');
    }
}
export default new WebviewPage();
