import { add, subtract, multiply , callMe} from '../main.js'
import { jest } from '@jest/globals';

describe(`Testing main.js functions`, () => {
    test(`Testing add Function {2+3 = 5 }`, () => {
        expect(add(2, 3)).toBe(5);
    })
    test(`Testing subtract Function {5-2 = 3 }`, () => {
        expect(subtract(5, 2)).toBe(3);
    })
    test(`Testing multiply Function {2*3 = 6 }`, () => {
        expect(multiply(2, 3)).toBe(6);
    })
})

describe(`Testing callMe function`, () => {
    test(`Testing callMe Function with user name "Swarup"`, () => {
        console.log = jest.fn();
        callMe("Swarup");
        expect(console.log).toHaveBeenCalledWith("welcome Swarup to the world of testing");
    })
})