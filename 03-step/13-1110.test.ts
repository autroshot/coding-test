import { expect, test } from '@jest/globals';
import { getCycleLength } from './13-1110';

test('getCycleLength', () => {
  expect(getCycleLength(26)).toBe(4);
  expect(getCycleLength(55)).toBe(3);
  expect(getCycleLength(1)).toBe(60);
  expect(getCycleLength(0)).toBe(1);
  expect(getCycleLength(71)).toBe(12);
});
