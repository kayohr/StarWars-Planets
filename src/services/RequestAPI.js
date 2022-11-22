const requestAPIFetch = async () => {
  try {
    const url = 'https://swapi.dev/api/planets';
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    // results.map((el) => { remove(el.residents); });
    // const { results } = await data.get('/residents');
    return results;
  } catch (e) {
    throw new Error(e.message);
  }
};

// // const axiosAPI = axios.create({
// //   baseURL: 'https://swapi.dev/api/planets',
// // });

// // export const requestAPIAxios = async () => {
// //   try {
// //     const { data: { results } } = await axiosAPI.get('/character');
// //     console.log('axios', results);
// //     return results;
// //   } catch (e) {
// //     throw new Error(e.message);
// //   }
// // };

export default requestAPIFetch;

// const requestAPIFetch = async () => {
//   try {
//     const response = await fetch('https://swapi.dev/api/residents/');
//     const { results } = await response.json();
//     return results;
//   } catch (e) {
//     throw new Error(e.message);
//   }
// };

// const axiosAPI = axios.create({
//   baseURL: 'https://swapi.dev/api/planets',
// });

// export const requestAPIAxios = async () => {
//   try {
//     const { data: { results } } = await axiosAPI.get('/residents');
//     console.log('axios', results);
//     return results;
//   } catch (e) {
//     throw new Error(e.message);
//   }
// };

// export default requestAPIFetch;
