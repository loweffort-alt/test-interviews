const {multiply} = require('./multiply');

describe("multiply", () => {
  test('inputs should be numbers', () => {
    const expected = 150;
    const receive = multiply(10, 15);
    expect(expected).toBe(receive);
  });

  test('should receive positive product' , () => {
    const expected = 150;
    const receive = multiply(10, 15);
    expect(expected).toBe(receive);
  });

  test('should receive negative product', () => {
    const expected = -45;
    const receive = multiply(-9, 5);
    expect(expected).toBe(receive);
  });
})