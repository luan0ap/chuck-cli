const { whiteGreenBold, green } = require('chalk')
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
    )

    const opts = {
      joke: requestJoke,
      categories: requestCategories,
    }

    return (opts[arg] || getCategory)(arg)
  }

  commands(command)

