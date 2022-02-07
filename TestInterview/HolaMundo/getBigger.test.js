const {getBigger} = require('./getBigger')

describe("getBigger", () => {
  test('should receive bigger number', () => {
    const expected = 4108;
    const receive = getBigger([4108, 1004, 100, 5, -584]);
    expect(expected).toStrictEqual(receive);
  });

  test('should evaluate only numbers', () => {
    const expected = 150;
    const receive = getBigger([10, -1, 4, 1, 150]);
    expect(expected).toStrictEqual(receive);
  });

})