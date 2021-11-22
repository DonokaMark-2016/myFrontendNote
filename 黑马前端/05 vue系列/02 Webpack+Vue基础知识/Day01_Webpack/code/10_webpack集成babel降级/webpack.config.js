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
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/, //不去匹配这些文件夹下的文件
				use: {
					loader: 'babel-loader',// 使用这个loader处理js文件
					options: { // 加载器选项
						presets: ['@babel/preset-env']// 预设: @babel/preset-env降级规则-按照这里的规则降级我们js的语法
					}
				}
			}
		]
	}
}
