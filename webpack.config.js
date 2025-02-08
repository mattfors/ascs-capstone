const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: {
      main: './src/index.js',
      presentation: './src/presentation/presentation.js'
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
          include: path.resolve(__dirname, 'src'),
          exclude: path.resolve(__dirname, 'src/presentation/presentation.js')
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
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
        filename: 'index.html',
        base: isProd ? '/ascs-capstone/' : '/',
      }),
      new HtmlWebpackPlugin({
        template: './src/about.html',
        chunks: ['main'],
        filename: 'about.html',
        base: isProd ? '/ascs-capstone/' : '/',
      }),
      new HtmlWebpackPlugin({
        template: './src/presentation/presentation.html',
        chunks: ['presentation'],
        filename: 'presentation/index.html',
        base: isProd ? '/ascs-capstone/presentation/' : '/presentation/',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/presentation/qr-code.png', to: 'presentation/qr-code.png' }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode),
      })
    ],
    devServer: {
      static: path.join(__dirname, 'dist'),
      liveReload: true,
      hot: true,
      compress: true,
      watchFiles: ['src/**/*'],
    },
  };
};
