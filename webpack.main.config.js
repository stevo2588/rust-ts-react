/**
 * This is the main entry point for your application, it's the first file
 * that runs in the main process.
 */

const rules = require('./webpack.rules');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    target: 'electron-main',
    entry: './src/electron/main.ts',
    module: {
        rules
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    },
    externals: {
        '../shared/rust': 'commonjs2 ./rust',
    },
    plugins: [
        new CopyPlugin([
            'src/electron/preload.js',
            { from: 'src/shared/rust/package.json', to: 'rust/package.json' },
            { from: 'src/shared/rust/lib/index.js', to: 'rust/lib/index.js' },
            { from: 'src/shared/rust/native/index.node', to: 'rust/native/index.node' },
        ]),
    ],
};
