const HtmlWebpackPlugin = require('html-webpack-plugin'),
    pages = require('../_pages.js'),
    path = require('../_paths.js');

module.exports = pages.map((page) => {
    return new HtmlWebpackPlugin({
        template: `${path.html.pages + page}.html`, // relative path to the HTML files
        filename: `${page}.html`, // output HTML files
        chunks: ['main', page] // respective JS files
    })
});