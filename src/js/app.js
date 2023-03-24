export default function destruction({ ...rest }) {
  const special = { ...rest };
  const arr = [];
  if (special.description === undefined) {
    special.description = 'Описание недоступно';
  }
  for (const key in special) {
    if (key) {
      arr.push(special[key]);
    }
  }
  return arr;
}
