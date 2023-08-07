const path = require('path');

module.exports = {
  entry: './src/index.js',
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
          './plugins/html-processor-loader', // Then, use your custom htmlprocessor loader
        ],
      }
    ]
  }
};
