import sortCharsForHealth from '../app';

test('should show sorted array', () => {
  const chars = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  result = sortCharsForHealth(chars);

  expect(result).toEqual(expected);
});
