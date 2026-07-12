import { Page } from './page.js';

class DragPage extends Page {
    get dragScreen() { return $('~Drag-drop-screen'); }
    get congratulationsText() { return $("//*[@text='Congratulations']"); }

    async dragElement(pos: string) {
        return $(`~drag-${pos}`);
    }

    async dropZone(pos: string) {
        return $(`~drop-${pos}`);
    }
}

export default new DragPage();
