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

    async navigateToDrag(): Promise<void> {
        await super.navigateTo('Drag');
        await expect(this.dragScreen).toBeDisplayed();
    }
}

export default new DragPage();
