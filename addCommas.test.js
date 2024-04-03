const addCommas = require("./addCommas");

// Tests for the function using Jest
describe('addCommas', () => {
  test('formats 1234 as 1,234', () => {
      expect(addCommas(1234)).toBe('1,234');
  });

  test('formats 1000000 as 1,000,000', () => {
      expect(addCommas(1000000)).toBe('1,000,000');
  });

  test('formats 9876543210 as 9,876,543,210', () => {
      expect(addCommas(9876543210)).toBe('9,876,543,210');
  });

  test('formats 6 as 6', () => {
      expect(addCommas(6)).toBe('6');
  });

  test('formats -10 as -10', () => {
      expect(addCommas(-10)).toBe('-10');
  });

  test('formats -5678 as -5,678', () => {
      expect(addCommas(-5678)).toBe('-5,678');
  });

  // Bonus cases
  test('formats 12345.678 as 12,345.678', () => {
      expect(addCommas(12345.678)).toBe('12,345.678');
  });

  test('formats -3141592.65 as -3,141,592.65', () => {
      expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
  });
});
