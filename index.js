



const {
    program
} = require('commander')
const yt = require('./lib/yt')

program
    .option('-e, --end_point <value>', 'end point to call')
    .option('-U, --user <value>', 'user')
    .option('-P, --password <value>', 'password')

program.parse(process.argv)

const options = program.opts()

function main() {
    
    try {
        yt.login(options.end_point, options.user, options.password)
    } catch (error) {
        console.log(error)
    }
}

main()