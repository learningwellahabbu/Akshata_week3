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

  describe('Modulo', () => {
    test('should calculate modulo with 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with positive numbers', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    test('should handle modulo with equal numbers', () => {
      expect(calculator.modulo(10, 10)).toBe(0);
    });

    test('should handle modulo with negative dividend', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(calculator.modulo(10, -3)).toBe(1);
    });

    test('should handle modulo with both negative numbers', () => {
      expect(calculator.modulo(-10, -3)).toBe(-1);
    });

    test('should handle modulo with large numbers', () => {
      expect(calculator.modulo(1000, 7)).toBe(6);
    });

    test('should throw an error when modulo by zero', () => {
      expect(() => calculator.modulo(5, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Power', () => {
    test('should calculate power with 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with positive base and exponent', () => {
      expect(calculator.power(5, 2)).toBe(25);
    });

    test('should calculate power with zero exponent', () => {
      expect(calculator.power(10, 0)).toBe(1);
    });

    test('should calculate power with negative exponent', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should calculate power with base of one', () => {
      expect(calculator.power(1, 100)).toBe(1);
    });

    test('should calculate power with base of zero', () => {
      expect(calculator.power(0, 5)).toBe(0);
    });

    test('should handle fractional exponents', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test('should handle negative base with positive exponent', () => {
      expect(calculator.power(-2, 2)).toBe(4);
    });

    test('should handle negative base with odd exponent', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should handle large exponents', () => {
      expect(calculator.power(10, 6)).toBe(1000000);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root with √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root with perfect squares', () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should throw an error for negative numbers', () => {
      expect(() => calculator.squareRoot(-5)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw an error for negative one', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should handle very small positive numbers', () => {
      expect(calculator.squareRoot(0.0001)).toBe(0.01);
    });

    test('should handle large numbers', () => {
      expect(calculator.squareRoot(10000)).toBe(100);
    });
  });

  describe('Extended Operations from Image', () => {
    test('should calculate modulo 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate power 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate square root √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });
  });
});
