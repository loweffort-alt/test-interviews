const {finalArray, fizzbuzz} = require('./fizbuzz');

describe('fizbuzz', () => {
  test('should print an error message if argument is not a number', () => {
    const expected = "Error: the argument must be a number";
    const result = fizzbuzz("asdf");
    expect(expected).toBe(result);
  });
  
  test('should be 1 if num is 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test('should return fizz if num is multiple of 3', () => {
    const expected = "fizz";
    const result = fizzbuzz(9);
    expect(expected).toBe(result);
  });

  test('should return buzz if num is multiple of 5', () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test('should return fizzbuzz if num is multiple of 5 and 3', () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(90);
    expect(expected).toBe(result);
  });

});