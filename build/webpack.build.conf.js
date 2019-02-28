const merg = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merg(baseWebpackConfig, {
    mode: 'production',
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});
