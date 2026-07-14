import DragPage from '../pageobjects/dragPage';

describe('Drag gestures tests', () => {
    beforeEach(async () => {
        await DragPage.openApp();
        await DragPage.navigateToDrag();
    });

    afterEach(async () => {
        await DragPage.close();
    });

    it('Verify drag and drop puzzle completion', async () => {
        const positions = ['l1', 'c1', 'r1', 'l2', 'c2', 'r2', 'l3', 'c3', 'r3'];

        for (const pos of positions) {
            const dragElement = await DragPage.dragElement(pos);
            const dropZone = await DragPage.dropZone(pos);

            await dragElement.waitForDisplayed({ timeout: 10000 });
            await dropZone.waitForDisplayed({ timeout: 10000 });

            const dropLocation = await dropZone.getLocation();
            const dropSize = await dropZone.getSize();

            await driver.execute('mobile: dragGesture', {
                elementId: dragElement.elementId,
                endX: dropLocation.x + dropSize.width / 2,
                endY: dropLocation.y + dropSize.height / 2,
            });
            await dropZone.waitForExist({ timeout: 5000 });
        }

        const congratulationsText = await DragPage.congratulationsText;
        await congratulationsText.waitForDisplayed({ timeout: 20000 });
        await expect(congratulationsText).toBeDisplayed();
    });
});
