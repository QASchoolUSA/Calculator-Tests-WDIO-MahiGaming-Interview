import { $ } from '@wdio/globals'
import Page from './page.js';

class Calculator extends Page {

    public get display () {
        return $('#display');
    }

    public get equal () {
        return $('#equals');
    }

    public get clear () {
        return $('#clear');
    }

    public digit (digit: string) {
        return $(`[data-value='${digit}']`);
    }

    public operation (operation: string) {
        return $(`[data-value='${operation}']`)
    }

    public async enterNumber(number: number) {
        const numberStr = number.toString();
        for (const char of numberStr) {
            await this.digit(char).click();
        }
    }
    
}

export default new Calculator();