/**
 * Config
 */

const argv = require('yargs').options({
    directions: {
        alias: 'd',
        desc: 'Get direction to google',
        demand: true
    }
}).argv;

module.exports = {
    argv
}