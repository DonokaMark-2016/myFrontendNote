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
	],
	module: {
		rules: [ // 规则
			{// 一个具体的规则对象
				test: /\.css$/i, // 匹配.css结尾的文件
				use: ["style-loader", "css-loader"] // 让webpack使用者2个loader处理css文件
				// 从右到左的，所以不能颠倒顺序
				// css-loader: webpack解析css文件-把css代码一起打包进js中
				// style-loader: css代码插入到DOM上(style标签)
			},
			{
				test: /\.less/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/i,
				type: 'asset'
			},
			// webpack5默认内部不认识这些文件,所以当做静态资源直接输出即可
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name].[hash:6][ext]'
				}
			}
		]
	}
}
