const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js', //webpack入口
	output: { // 出口
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	// 其他配置
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}
