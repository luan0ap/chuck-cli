// external
const figlet = require('figlet')

// utils
const { filter, forEach, blackGreen, green } = require('./src/utils/index')

// requests
const { requestJoke, requestSpecificCategorie } = require('./src/requests.js')

const command = process.argv[2]

console.log(
  green(
    figlet.textSync('chuck jokes\n', { horizontalLayout: 'full' })
  )
)

function commands(arg) {

  const categories = [
    'explicit',
    'dev',
    'movie',
    'food',
    'celebrity',
    'science',
    'sport',
    'political',
    'religion',
    'animal',
    'history',
    'music',
    'travel',
    'career',
    'money',
    'fashion'
  ]

  const getCategory = cmd => requestSpecificCategorie(
    filter(categories)(category => category === cmd).join('')
  ).then(obj => console.log(blackGreen(obj.value)))

  const opts = {
    joke: () => requestJoke().then(obj => console.log(blackGreen(obj.value))),
    categories: () => forEach(categories)(cat => console.log(blackGreen(cat))),
  }

  return (opts[arg] || getCategory)(arg)
}

commands(command)

