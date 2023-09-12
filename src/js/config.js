const paths = require('./cores/_paths.js'),
    pages = require('./cores/_pages.js'),
    entries = require('./cores/entries/_index.js');

const config = {
    path: paths,
    pages: pages,
    entries: entries
}

module.exports = config;