export default function sortFunc(sortOrder, sortColumn, data) {
  const array = data.filter((el) => el[sortColumn] !== 'unknown');

  //   const Elements = data.filter((el) => el[sortColumn] === 'unknown');
  if (sortOrder === 'ASC') {
    array.sort((a, b) => (+a[sortColumn]) - (+b[sortColumn]));
  } else {
    array.sort((a, b) => (+b[sortColumn]) - (+a[sortColumn]));
  }
//   setData([...array, ...Elements]);
}
