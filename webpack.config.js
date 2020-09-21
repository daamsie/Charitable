
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'css/charitable-admin': './src/css-admin.js',
        'css/charitable-admin-menu': './src/css-admin-menu.js',
        'css/charitable-admin-pages': './src/css-admin-pages.js',
        'css/charitable': './src/css-charitable.js',
        'css/charitable-modal': './src/css-modal.js',
        'css/charitable-plupload-fields': './src/css-plupload.js',
        'css/charitable-block-editor': './src/css-block-editor.js',
        'css/charitable-datepicker': './src/css-datepicker.js',
        'css/charitable-select2': './src/css-datepicker.js',
        'js/charitable-blocks': './src/charitable-blocks.js',
        'js/charitable-editor-sidebar': './src/charitable-editor-sidebar.js'
    },
    output: {
        path: path.resolve( process.cwd(), 'assets' ),
        filename: '[name].js'
    },
    module: {
        ...defaultConfig.module, 
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        ...defaultConfig.plugins,
        new CopyPlugin({
          patterns: [
            { from: './src/fonts', to: 'fonts' },
            { from: './src/images', to: 'images' },
            { from: './src/libraries/css', to: 'css/libraries' },
            { from: './src/fonts', to: 'css/fonts' },
            { from: './src/libraries/js', to: 'js/libraries' },
          ],
        }),
      ],
};