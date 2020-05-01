const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');


module.exports = {
    mode: 'development',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
        rules
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    }
};
