export default function destruction({ ...rest }) {
  const arr = [];
  if (rest.description === undefined) {
    rest.description = 'Описание недоступно';
  }
  for (const key in rest) {
    if (key) {
      arr.push(rest[key]);
    }
  }
  return arr;
}
