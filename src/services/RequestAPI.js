const requestAPIFetch = async () => {
  try {
    const url = 'https://swapi.py4e.com/api/planets';
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
// API ORIGINAL:'https://swapi.dev/api/planets'

export default requestAPIFetch;
