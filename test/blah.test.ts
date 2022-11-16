import { subtract, multiply, divide } from '../src';

describe('blah', () => {
  it('also works', () => {
    expect(subtract(1, 1)).toEqual(0);
  });
  it('works for multiplication', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
  it('works for division', () => {
    expect(divide(4, 2)).toEqual(2);
  });
});
