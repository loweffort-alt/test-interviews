const { arr } = require('./script');

describe('script', () => {
  test('should receive array splited', () => {
    const expected = "08062";
    const receive = arr("52548");
    expect(expected).toStrictEqual(receive);
  });
  
})