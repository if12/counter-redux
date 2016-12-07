var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/static/',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
	},
	module: {
		loaders: [{
			test: /\.(jsx|js)$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
}