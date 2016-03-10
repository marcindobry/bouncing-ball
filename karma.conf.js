var path = require('path');
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'test-context.js', watched: false }
    ],
    frameworks: ['jasmine'],
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
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
