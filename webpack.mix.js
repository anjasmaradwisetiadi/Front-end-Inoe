const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig ({
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ],
    resolve: {
      alias: {
        '@root': path.resolve('resources/js'),
        '@components': path.resolve('resources/js/components'),
        '@layout': path.resolve('resources/js/layout'),
        '@store': path.resolve('resources/js/store'),
        '@pages': path.resolve('resources/js/pages'),
        '@router': path.resolve('resources/js/router'),
        '@utilize': path.resolve('resources/js/utilize'),
        '@css-source': path.resolve('resources/css'),
        '@assets': path.resolve('resources/assets'),
        '@js': path.resolve('public/js'),
        '@css': path.resolve('public/css')
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(js|vue)?$/
        },
        {
          test: /\.scss$/,
          loader: 'sass-loader'
        }
      ]
    }
  });

mix.setPublicPath('public');

mix.js('resources/js/app.js', 'public/js')
  .vue()
  .sass('resources/sass/app.scss', 'public/css')
  .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss')
  ])
  .copy('./node_modules/material-symbols/index.scss', 'public/css/material-symbols.min.css')
  .sourceMaps();
