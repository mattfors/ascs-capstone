const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const packageJson = require('./package.json');
const {InjectManifest} = require("workbox-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const commonTemplateParameters = {
    production: isProd,
    gaId: process.env.GA_ID || 'development',
    version: packageJson.version
  };
  return {
    entry: {
      main: './src/index.js',
      entry: './src/entry.js',
      presentation: './src/presentation/presentation.js'
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
          options: {
            partialDirs: [path.join(__dirname, 'src/partials')]
          }
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
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.hbs',
        chunks: ['main'],
        filename: 'index.html',
        base: isProd ? '/ascs-capstone/' : '/',
        templateParameters: { ...commonTemplateParameters }
      }),
      new HtmlWebpackPlugin({
        template: './src/about.hbs',
        chunks: ['main'],
        filename: 'about.html',
        base: isProd ? '/ascs-capstone/' : '/',
        templateParameters: { ...commonTemplateParameters }
      }),
      new HtmlWebpackPlugin({
        template: './src/qr.hbs',
        chunks: ['main'],
        filename: 'qr.html',
        base: isProd ? '/ascs-capstone/' : '/',
        templateParameters: { ...commonTemplateParameters }
      }),
      new HtmlWebpackPlugin({
        template: './src/phone.hbs',
        chunks: ['main'],
        filename: 'phone.html',
        base: isProd ? '/ascs-capstone/' : '/',
        templateParameters: { ...commonTemplateParameters }
      }),
      new HtmlWebpackPlugin({
        template: './src/presentation/presentation.html',
        chunks: ['presentation'],
        filename: 'presentation/index.html',
        base: isProd ? '/ascs-capstone/presentation/' : '/presentation/',
        templateParameters: { ...commonTemplateParameters }
      }),
      new HtmlWebpackPlugin({
        template: './src/entry.hbs',
        chunks: ['entry'],
        filename: 'entry.html',
        base: isProd ? '/ascs-capstone/' : '/',
        templateParameters: { ...commonTemplateParameters }
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/presentation/qr-code.png', to: 'presentation/qr-code.png' },
          { from: 'assets', to: 'assets' },
          { from: 'src/service-worker.js', to: 'service-worker.js' }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode),
      }),
      ...(isProd ? [new InjectManifest({
        swSrc: './src/service-worker.js',
        swDest: 'service-worker.js',
        mode: 'module'
      })] : [])
    ],
    devServer: {
      static: path.join(__dirname, 'dist'),
      liveReload: true,
      hot: true,
      compress: true,
      watchFiles: ['src/**/*'],
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    },
  };
};
