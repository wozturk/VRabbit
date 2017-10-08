const path = require('path');
//scss is normally injected right into an style tag in the head, ugh.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].bundle.css');


module.exports = {
  entry: {
    app:  './src/scripts/app.js',
    components: './src/scripts/components.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules : [ 
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { 
            presets: [
            'react', 
            'es2015'
            ]
          }
        }]
      },
      {
        test:/\.scss$/,
        loader: extractCSS.extract(['css-loader','sass-loader'])
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  devServer: {
    host: "0.0.0.0",
    https: true
  }
};
