const path = require('path');

module.exports = {
  target: 'electron-renderer', // It's as simple as that to build desktop apps!
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
      extensions: ['.js'],
      aliasFields: ["browser"]
  },
  module: {
    rules: [{
        test: /\.marko$/,
        exclude: /node_modules/,
        use: 'marko-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: 'style-loader!css-loader'
      }
    ]
  },
};
