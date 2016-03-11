var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'test-context.js', watched: false }
    ],
    frameworks: ['jasmine', 'sinon'],
    preprocessors: {
      'test-context.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          {
            loader: 'babel',
            test: path.join(__dirname, 'src'),
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
      ],
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
