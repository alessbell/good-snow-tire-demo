import { sum, subtract } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('also works', () => {
    expect(subtract(1, 1)).toEqual(0);
  });
});
