const path = require('path'),
  config = require('./src/js/config.js'),
  Dotenv = require('dotenv-webpack'),
  TerserPlugin = require('terser-webpack-plugin'), 
  MiniCssExtractPlugin = require('mini-css-extract-plugin');
  
module.exports = env => ({
  mode: 'development',
  entry: {
    main: './src/js/main.js',
    ...config.entries.script
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', // First, use html-loader to import HTML files as strings
          './plugins/html-processor', // Then, use your custom htmlprocessor loader
        ],
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',      
        ],
      }, {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.production ? "production" : "development"}`
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].concat(config.entries.html),
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080, // Port number for the development server
  },
});
