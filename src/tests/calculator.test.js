const calculator = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -10)).toBe(-15);
    });

    test('should add a positive and a negative number', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract and result in a negative number', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -10)).toBe(5);
    });

    test('should subtract a negative from a positive', () => {
      expect(calculator.subtract(10, -5)).toBe(15);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    test('should multiply a positive and a negative number', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(5, 1)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide and result in a decimal', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should divide a positive by a negative', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should divide zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide by one', () => {
      expect(calculator.divide(5, 1)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw an error when dividing by zero with negative number', () => {
      expect(() => calculator.divide(-10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle decimal division', () => {
      expect(calculator.divide(5.5, 2.5)).toBeCloseTo(2.2, 1);
    });
  });

  describe('Example Operations from Image', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });
});
