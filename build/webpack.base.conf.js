const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'

}


module.exports = {

  externals: {
    paths: PATHS
  },
    //точка входа
  entry: {
      app: ['babel-polyfill',PATHS.src]
  },

  //куда складывает
  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}js/[name].js`,
    publicPath: '/'
  },

  //модули для файлов 
  module: {

    //правила для установленых модулей 
    rules: [{
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
    },{
        test: /\.(png\jpg\gif\svg)$/,
        loader: 'file-loader',
        options: {
          name: `[name].[ext]`
        }
    },{
        test: /\.scss$/,
        use: [
          "style-loader",  
          // отделяем scss от js
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }, {
            loader: "postcss-loader",
            options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}}
          }, {
            loader: "sass-loader",
            options: {sourceMap: true}
          }
        ]
      },{
        test: /\.css$/,
        use: [
          "style-loader",  
          // отделяем css от js
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }, {
            loader: "postcss-loader",
            options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}}
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
    }),
    new CopyWebpackPlugin([
      {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
      {from: `${PATHS.src}/static`, to: ``},
    ]),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  

};