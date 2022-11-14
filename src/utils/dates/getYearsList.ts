export function getYearsList() {
  const list = [];
  const date = new Date();
  let bufferDate = +date.getFullYear();
  while (list.length < 50) {
    date.getFullYear();
    list.push(bufferDate);
    bufferDate -= 1;
  }

  return list;
}
