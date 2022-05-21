const functions = require('../functions');

describe('Operations', () => {
    test('Adding mixed and improper fractions', () => {
        expect(functions.addSubtract("2_3/8", "9/8", "+")).toBe("3_1/2");
    });
    test('Subtract improper and mixed fractions', () => {
        expect(functions.addSubtract("3/2", "2_1/3", "-")).toBe("-1_-5/6");
    })
    test('Muliply proper and mixed fractions', () => {
        expect(functions.multiplyDivide("1/2", "3_3/4", "*")).toBe("1_7/8");
    })
    test('Divide mixed and proper fractions', () => {
        expect(functions.multiplyDivide("2_1/2", "3/4", "/")).toBe("3_1/3");
    })
    test('Add two wholes numbers', () => {
        expect(functions.addSubtract("3", "5", "+")).toBe("8_0/1");
    });
    test('Subtract two wholes numbers', () => {
        expect(functions.addSubtract("13", "6", "-")).toBe("7_0/1");
    });
    test('Multiply two whole numbers', () => {
        expect(functions.multiplyDivide("4", "3", "*")).toBe("12_0/1");
    })
    test('Divide two whole numbers', () => {
        expect(functions.multiplyDivide("8", "2", "/")).toBe("4_0/1");
    })
    test('Add a whole number and mixed fraction', () => {
        expect(functions.addSubtract("3", "2_1/2", "+")).toBe("5_1/2");
    })
    test('Subtract a proper fraction and whole number', () => {
        expect(functions.addSubtract("-3/2", "-3", "-")).toBe("1_1/2");
    })
    test('Multiply a whole number and improper fraction', () => {
        expect(functions.multiplyDivide("4", "6/5", "*")).toBe("4_4/5");
    })
    test('Divide a improper fraction and whole number', () => {
        expect(functions.multiplyDivide("2_4/3", "7", "/")).toBe("10/21");
    })
    test('Operador is not present in add or subtract', () => {
        expect(functions.addSubtract("2/5", "2_2/3", "")).toBe("ERROR: Operator not valid");
    })
    test('Operador is not present in multiply or divide', () => {
        expect(functions.multiplyDivide("4", "5", "")).toBe("ERROR: Operator not valid");
    })
});