const HtmlWebpackPlugin = require('html-webpack-plugin'),
    basePath = {
        html: './src/html/pages/',
        js: './src/js/pages/'
    },
    htmlPages = ['lohee', 'test'];

module.exports = htmlPages.map((page) => {
    return new HtmlWebpackPlugin({
        template: `${basePath.html + page}.html`, // relative path to the HTML files
        filename: `${page}.html`, // output HTML files
        chunks: [`./src/js/pages/${page}`] // respective JS files
    })
});