import { calculateInhabitantCount } from './6-2775';

test('calculateRoomNo', () => {
  expect(calculateInhabitantCount(1, 3)).toBe(6);
  expect(calculateInhabitantCount(2, 3)).toBe(10);
});
