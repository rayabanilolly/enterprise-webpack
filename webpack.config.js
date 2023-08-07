const HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  pages = require('./src/js/pages.js'),
  Dotenv = require('dotenv-webpack');

module.exports = env => ({
  mode: process.env.MODE,
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', // First, use html-loader to import HTML files as strings
          './plugins/html-processor', // Then, use your custom htmlprocessor loader
        ],
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.production ? "production" : "development"}`
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/pages/index.html",
      chunks: ['index']
    })
  ].concat(pages),
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080, // Port number for the development server
  },
});
