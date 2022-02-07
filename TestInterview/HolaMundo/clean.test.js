const {clean} = require('./clean')

describe("clean", () => {
  test('should first', () => {
    const expected = [10, 1, 45, "hola"];
    const receive = clean([10, 1, null, undefined, 45, 0, "hola"])
    ;
    expect(expected).toStrictEqual(receive);
  });
  
})