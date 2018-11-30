const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: '[name].bundle.js',
  },
  module: {
	rules : [
			{
				test : /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader : 'babel-loader',
      },
    ],
  },
  stats: {
    warnings:true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'template.html',
      filename: path.resolve(__dirname, 'build/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/'
  }
};
