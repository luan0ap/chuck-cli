const fetch = require('node-fetch')

const get = async url =>
  await fetch(url)
    .then(res => res.json())
    .then(data => data)

const requestJoke = async () => await get('https://api.chucknorris.io/jokes/random')

const requestCategories = async () => await get('https://api.chucknorris.io/jokes/categories')

const requestSpecificCategorie = async category =>
  await get(`https://api.chucknorris.io/jokes/random?category=${category}`)

module.exports = {
  requestJoke,
  requestCategories,
  requestSpecificCategorie,
}
