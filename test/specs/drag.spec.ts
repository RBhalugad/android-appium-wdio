import { Locators } from "../locators.js";

describe("Drag gestures tests", () => {
    beforeEach(async () => {
        await driver.activateApp("com.wdiodemoapp");
        await driver.pause(2000);
    });

    afterEach(async () => {
        await driver.terminateApp("com.wdiodemoapp");
    });

    it("Verify drag and drop puzzle completion", async () => {
        const dragTab = await $(Locators.DragTab);
        await dragTab.waitForDisplayed({ timeout: 10000 });
        await dragTab.click();

        const dragScreen = await $(Locators.DragScreen);
        await dragScreen.waitForDisplayed({ timeout: 10000 });
        await expect(dragScreen).toBeDisplayed();

        const positions = ['l1', 'c1', 'r1', 'l2', 'c2', 'r2', 'l3', 'c3', 'r3'];
        
        for (const pos of positions) {
            const dragElement = await $(`~drag-${pos}`);
            const dropZone = await $(`~drop-${pos}`);
            
            await dragElement.waitForDisplayed({ timeout: 10000 });
            await dropZone.waitForDisplayed({ timeout: 10000 });
            
            const dropLocation = await dropZone.getLocation();
            const dropSize = await dropZone.getSize();

            await driver.execute("mobile: dragGesture", {
                elementId: dragElement.elementId,
                endX: dropLocation.x + (dropSize.width / 2),
                endY: dropLocation.y + (dropSize.height / 2),
            });
            await driver.pause(500); 
        }

        // Verify the puzzle completion by checking for the congratulations message
        const congratulationsText = await $("//*[@text='Congratulations']");
        await congratulationsText.waitForDisplayed({ timeout: 10000 });
        await expect(congratulationsText).toBeDisplayed();
    });
});