const path = require('path')
const webpack = require('webpack')

const PATHS = {
  src: path.join(__dirname, './app'),
  dist: path.join(__dirname, './public')
}

module.exports = {

  devtool: 'eval',

  entry: [ PATHS.src ],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

  devServer: {
    contentBase: PATHS.dist,
    port: 3000,
    inline: true,
    stats: 'errors-only',
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel' ]
      }
    ]
  },

}
