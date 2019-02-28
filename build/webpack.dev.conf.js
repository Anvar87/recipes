const webpack = require('webpack');
const merg = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merg(baseWebpackConfig, {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
          //выводит ощибки на экран браузера
        overlay: {
            warnings: false,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});





