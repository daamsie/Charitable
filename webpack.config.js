const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'charitable-blocks': './src/charitable-blocks.js',
        'charitable-editor-sidebar': './src/charitable-editor-sidebar.js'
    },
    output: {
        path: path.resolve( process.cwd(), 'assets/js' ),
        filename: '[name].js'
    }
};