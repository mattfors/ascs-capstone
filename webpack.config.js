const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        presentation: './src/presentation.js'
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'src/presentation.js')
            }
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['main'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/presentation.html',
            chunks: ['presentation'],
            filename: 'presentation/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/presentation/qr-code.png', to: 'presentation/qr-code.png' }
            ]
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        liveReload: true,
        watchFiles: ['src/**/*'],
    },
};
