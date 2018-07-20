const { green } = require('chalk')
const chalk = require('chalk')
const figlet = require('figlet')
const { filter } = require('./src/utils/filter.js')

const { requestJoke, requestCategories, requestSpecificCategorie } = require('./src/requests.js')

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
  ).then(obj => console.log(chalk.black.bgGreen(obj.value)))

  const opts = {
    joke: () => requestJoke().then(obj => console.log(chalk.black.bgGreen(obj.value))),
    categories: () => requestCategories().then(
      cats => cats.forEach(cat => console.log(chalk.black.bgGreen(cat))
      )),
  }

  return (opts[arg] || getCategory)(arg)
}

commands(command)

