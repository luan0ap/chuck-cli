const fetch = require('node-fetch');

const get = async url =>
  await fetch(url)
    .then(res => res.json())
    .then(data => data);

const requestJoke = async () => {
  const URL = 'https://api.chucknorris.io/jokes/random';
  return await get(URL);
};

const requestCategories = async () => {
  const URL = 'https://api.chucknorris.io/jokes/categories';
  return await get(URL);
};

const requestSpecificCategorie = async categorie => {
  const URL = `https://api.chucknorris.io/jokes/random?category=${categorie}`;
  return await get(URL);
};

module.exports = {
  requestJoke,
  requestCategories,
  requestSpecificCategorie,
};
