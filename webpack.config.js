const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'src/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'VideoFirstFrame',
      type: 'umd',
    },
    clean: true,
  },
};