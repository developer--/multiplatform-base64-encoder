
module.exports = function(config) {

config.set({
  "singleRun": true,
  "autoWatch": false,
  "basePath": "/Users/mrkt/Documents/server/MBase64-Encoder/build/js/packages/MBase64-Encoder-test/node_modules",
  "files": [
    "/Users/mrkt/Documents/server/MBase64-Encoder/build/js/packages/MBase64-Encoder-test/adapter-browser.js"
  ],
  "frameworks": [
    "mocha"
  ],
  "client": {
    "args": []
  },
  "browsers": [
    "ChromeHeadless"
  ],
  "customLaunchers": {},
  "failOnFailingTestSuite": false,
  "failOnEmptyTestSuite": false,
  "reporters": [
    "karma-kotlin-reporter"
  ],
  "preprocessors": {
    "/Users/mrkt/Documents/server/MBase64-Encoder/build/js/packages/MBase64-Encoder-test/adapter-browser.js": [
      "webpack",
      "sourcemap"
    ]
  }
});
config.plugins = config.plugins || [];
config.plugins.push('kotlin-test-js-runner/karma-kotlin-reporter.js');

config.loggers = [
    {
        type: 'kotlin-test-js-runner/tc-log-appender.js',
        //default layout
        layout: { type: 'pattern', pattern: '%[%d{DATE}:%p [%c]: %]%m' }
    }
]

// webpack config
function createWebpackConfig() {
let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = false;
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace(new RegExp("/Users/mrkt/Documents/server/MBase64-Encoder/build/js", 'g'), '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
        moduleFilenameTemplate: "[absolute-resource-path]"
    }))
})(config);
   return config;
}

config.set({webpack: createWebpackConfig()});


}
