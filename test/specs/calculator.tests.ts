import { expect } from '@wdio/globals'
import Calculator from '../pageobjects/calculator.page.js'

describe('Calculator App', () => {
    before("Opening Calculator", async () => {
        await Calculator.open()
    });
    beforeEach("Clear before next operation", async () => {
        await Calculator.clear.click();
    })
    it('[TC001] - Addition of two numbers', async () => {
        await Calculator.enterNumber(1);
        await Calculator.operation("+").click();
        await Calculator.enterNumber(1);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("2");
    });

    it('[TC002] - Addition resulting in out of range', async () => {
        await Calculator.enterNumber(9999.99);
        await Calculator.operation("+").click();
        await Calculator.enterNumber(0.01);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("Result out of range");
    });

    it('[TC003] - Subtraction of two numbers', async () => {
        await Calculator.enterNumber(5);
        await Calculator.operation("-").click();
        await Calculator.enterNumber(3);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("2");
    });

    it('[TC004] - Subtraction resulting in positive number', async () => {
        await Calculator.enterNumber(1000);
        await Calculator.operation("-").click();
        await Calculator.enterNumber(999);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("1");
    });

    it('[TC005] - Multiplication of two numbers', async () => {
        await Calculator.enterNumber(2);
        await Calculator.operation("*").click();
        await Calculator.enterNumber(3);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("6");
    });

    it('[TC006] - Multiplication resulting in maximum range', async () => {
        await Calculator.enterNumber(100);
        await Calculator.operation("*").click();
        await Calculator.enterNumber(100);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("Result out of range");
    });

    it('[TC007] - Division of two numbers', async () => {
        await Calculator.enterNumber(10);
        await Calculator.operation("/").click();
        await Calculator.enterNumber(2);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("5");
    });

    it('[TC008] - Division resulting in decimal', async () => {
        await Calculator.enterNumber(1);
        await Calculator.operation("/").click();
        await Calculator.enterNumber(3);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("0.33");
    });

    it('[TC009] - Chained operations respecting precedence', async () => {
        await Calculator.enterNumber(2);
        await Calculator.operation("+").click();
        await Calculator.enterNumber(3);
        await Calculator.operation("*").click();
        await Calculator.enterNumber(4);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("14");
    });

    it('[TC010] - Chained operations without precedence', async () => {
        await Calculator.enterNumber(6);
        await Calculator.operation("/").click();
        await Calculator.enterNumber(2);
        await Calculator.operation("*").click();
        await Calculator.enterNumber(3);
        await Calculator.equal.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("9");
    });

    //TODO!
    xit('[TC011] - Change sign of positive number', async () => {});
    xit('[TC012] - Change sign of negative number', async () => {});

    it('[TC013] - Clear display', async () => {
        await Calculator.enterNumber(123);
        await Calculator.clear.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("0");
    });

    it('[TC014] - Clear during operation', async () => {
        await Calculator.enterNumber(5);
        await Calculator.operation("+").click();
        await Calculator.enterNumber(5);
        await Calculator.clear.click();
        const result = await Calculator.display.getValue();
        await expect(result).toBe("0");
    });
})

