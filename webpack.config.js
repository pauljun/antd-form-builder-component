const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
console.log(__dirname)
module.exports = {
  entry: './example/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module:{
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      { 
        test: /\.(js|jsx)$/, 
        exclude:/node_modules/, 
        loader: 'babel-loader'
      },
      {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    compress:true,
    host:'0.0.0.0',
    port:5600
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      formbuilder: path.resolve(__dirname, './components')
    }
  },  
  plugins: [
    new HtmlWebpackPlugin({template: 'public/index.html'})
  ]  
}