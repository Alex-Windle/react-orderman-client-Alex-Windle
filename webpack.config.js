/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * Webpack configuration can be tricky at first. This is a fairly standard setup.
 *
 * Don't worry if you don't fully understand the contents of this file.
 * Few people actually do and it will not be the focus of this course.
 *
 * DO NOT MODIFY THE CONTENT OF THIS FILE.
 *
 * YOU WILL WRITE ALL OF YOUR CODE INSIDE THE APP/ DIRECTORY.
 */

// Module imports
require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


/**
 * @description Checking that you're building with the proper Node version
 */
const packageJSON = require('./package.json');
const isProduction = process.env.NODE_ENV === 'production';
console.log(`Running in production mode: ${isProduction}`);

const expectedNodeVersion = packageJSON.engines.node
  .replace('v', '')
  .replace(' ', '');

const actualNodeVersion = process.version
  .replace('v', '')
  .replace(' ', '');

if (expectedNodeVersion !== actualNodeVersion) {
  console.log('\x1b[33m%s\x1b[0m: ', `Expected Node Version ${expectedNodeVersion}, but using ${actualNodeVersion}`);
  process.exit(1);
}


/**
 * @function entry
 * @description Declares the entry points of the application depending on environment
 * @returns {Array}
 */
function entry() {
  if (isProduction) {
    return [
      'babel-polyfill',
      './app/boot.jsx',
    ];
  }
  return [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    './app/boot.jsx',
  ];
};


function exports() {
  const definedExports = {
    entry: entry(),
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: './app/index.ejs',
      }),
      new Dotenv({
        systemvars: isProduction,
      }),
    ],
    output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js',
    },
    resolve: {
      modules: [
        __dirname,
        'node_modules',
        './app/styles',
        './app/views',
        './app/store',
        './app/utilities',
        './app/assets',
      ],
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx/,
          loader: 'babel-loader',
          include: [
            path.resolve(`${__dirname}/app`),
          ],
          query: {
            presets: [
              'react',
              'babel-preset-es2015',
              'stage-0',
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000',
        },
        {
          enforce: 'pre',
          loader: 'source-map-loader',
          test: /\.js$/,
        },
      ]
    }
  };

  // Adding devServer props if not running production build
  if (!isProduction) {
    definedExports.devServer = {
      contentBase: 'public',
      historyApiFallback: true,
      hot: false,
      inline: true,
      open: true,
    };
  }

  return definedExports;
};


module.exports = exports();
