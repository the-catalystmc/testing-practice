const calculator = require('./calculator');

describe('Calculator', () => {
    test('Add', () => {
        expect(calculator.add(5, 6)).toBe(11)
    });
    test('Subtract', () => {
        expect(calculator.subtract(10, 6)).toBe(4)
    });
    test('Divide', () => {
        expect(calculator.divide(10, 2)).toBe(5)
    });
    test('Multiply', () => {
        expect(calculator.multiply(5, 6)).toBe(30)
    });
})