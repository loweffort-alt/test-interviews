const {getFlatten} = require('./flatten')

describe("flaten", () => {
  test('should receive array flated', () => {
    const arr = ["gola", [[1, 2], "in"], [0], [[1]], ["finish"], 0];
    const expected = ["gola", [1, 2], "in", 0, [1], "finish", 0];
    const receive = getFlatten(arr);
    expect(expected).toStrictEqual(receive);
  });

  test('should receive array flated with element null', () => {
    const arr2 = [[1, 2], [[3,4]], [1, []]];
    const expected = [1, 2, [3, 4], 1, []];
    const receive = getFlatten(arr2);
    expect(expected).toStrictEqual(receive);
  });
});