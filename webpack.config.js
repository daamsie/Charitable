var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        './src/blocks/index.js'
    ],
    output: {
        path: path.join( __dirname, 'assets/js' ),
        filename: 'charitable-blocks.js'
    },
    externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
    stats: {
        colors: false,
        modules: true,
        reasons: true
    },
    storeStatsTo: 'webpackStats',
    progress: true,
    failOnError: true,
    watch: true,
    keepalive: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                }
            },
        ]
    }
};