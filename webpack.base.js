module.exports = {
  module: {
    rules: [
      {
        /**
         * Tell webpack to run babel on every file
         * it runs through
         */
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};
