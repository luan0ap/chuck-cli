const chalk = require('chalk')
const figlet = require('figlet')
const { filter } = require('./src/utils/filter.js')

const { requestJoke, requestCategories, requestSpecificCategorie } = require('./src/requests.js')

module.exports = () => {
    console.log(
        chalk.green(
            figlet.textSync('chuck jokes\n', { horizontalLayout: 'full' })
        )
    )



    function commands(args) {

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

        const filterCategory = filter(categories)(category => category === command)
        const getCategory = command => requestSpecificCategorie(filterCategory(command).join(''))

        const opts = {
            joke: requestJoke,
            categories: requestCategories,
        }

        return (opts[args] || getCategory)(args)
    }

    commands(process.argv[2])

}

