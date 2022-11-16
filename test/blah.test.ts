import { sum, subtract, multiply } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('also works', () => {
    expect(subtract(1, 1)).toEqual(0);
  });
  it('works for multiplication', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
