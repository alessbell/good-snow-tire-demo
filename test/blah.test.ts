import { subtract, multiply, divide } from '../src';

describe('blah', () => {
  it('also works', () => {
    expect(subtract(1, 1)).toEqual(0);
  });
  it('also works with multiplication', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
  it('also works with division', () => {
    expect(divide(4, 2)).toEqual(2);
  });
});
