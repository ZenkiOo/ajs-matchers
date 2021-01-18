export default function sortCharsForHealth(arr) {
  arr.sort((a, b) => {
    a = a.health;
    b = b.health;
    return b - a;
  });
  return arr;
}

sortCharsForHealth([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);
