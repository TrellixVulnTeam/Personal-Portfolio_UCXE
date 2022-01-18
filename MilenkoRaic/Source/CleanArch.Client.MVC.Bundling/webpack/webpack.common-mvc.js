const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        //--------------------------------------------------------------------------
        //Default view script implementations
        //--------------------------------------------------------------------------
        cookies: Path.resolve(__dirname, '../src/js/cookies.js'),
        app: Path.resolve(__dirname, '../src/js/app.js'),
        blogg: Path.resolve(__dirname, '../src/js/blogg.js'),
        contact: Path.resolve(__dirname, '../src/js/contact.js'),
        home: Path.resolve(__dirname, '../src/js/home.js'),
        projects: Path.resolve(__dirname, '../src/js/projects.js'),
        //--------------------------------------------------------------------------
        //Shared view script implementations
        //--------------------------------------------------------------------------
        languageSelection: Path.resolve(__dirname, '../src/js/languageSelection.js'),
    },
    output: {
        path: Path.join(__dirname, '../../CleanArch.Client.MVC/wwwroot'),
        filename: 'js/[name]/[name].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name(module, chunks, cacheGroupKey) {
                return cacheGroupKey;
            },
        },
    },
    plugins: [
      new CopyWebpackPlugin(
          { 
            patterns: [
              { from: Path.resolve(__dirname, '../public/'), to: './' }
            ]
          }
        ),
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
              test: /\.(scss)$/,
              use: [
                {
                  // Adds CSS to the DOM by injecting a `<style>` tag
                  loader: 'style-loader'
                },
                {
                  // Interprets `@import` and `url()` like `import/require()` and will resolve them
                  loader: 'css-loader'
                },
                {
                  // Loads a SASS/SCSS file and compiles it to CSS
                  loader: 'sass-loader'
                }
              ]
            },
            {
              test: /\.mjs$/,
              include: /node_modules/,
              type: 'javascript/auto',
          },
          {
              test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|doc|docx|pdf)(\?.*)?$/,
              use: {
                  loader: 'file-loader',
                  options: {
                      name: '/assets/[name].[ext]',
                  },
              },
          },
        ],
    },
};