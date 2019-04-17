const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/ERC20Contract',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'erc20-contract-js.min.js',
		libraryTarget: 'umd',
		globalObject: 'this',
		library: 'ERC20ContractJs'
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	}
};