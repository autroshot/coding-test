import { calculateRoomNo } from './5-10250';

test('calculateRoomNo', () => {
  expect(calculateRoomNo({ h: 1, w: 1, n: 1 })).toBe(101);
  expect(calculateRoomNo({ h: 99, w: 99, n: 9801 })).toBe(9999);
});
