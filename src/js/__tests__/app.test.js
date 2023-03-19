import destruction from '../app';

test('check destruction function', () => {
  const obj = {
    name: 'Лучник',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ],
  };
  const received = destruction(obj.special[0]);
  const expected = [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];
  expect(received).toEqual(expected);
});

test('check destruction function without description', () => {
  const obj = {
    name: 'Лучник',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
      },
    ],
  };
  const received = destruction(obj.special[0]);
  const expected = [8, 'Двойной выстрел', 'http://...', 'Описание недоступно'];
  expect(received).toEqual(expected);
});
