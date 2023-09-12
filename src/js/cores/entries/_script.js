const path = require('../_paths.js'),
    pages = require('../_pages.js');

module.exports = pages.reduce((acc, item) => {
    acc[item] = `${path.js.pages + item}.js`;
    return acc;
}, {});