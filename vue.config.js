console.log(process.env.NODE_ENV)
const port = process.env.port || 8011
const path = require('path')

function resolve(dir) {
	// __dirname:项目的路径
	return path.join(__dirname, dir)
}

module.exports = {
	// 设置打包文件输出路径
	outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'dy',
	// 生产环境是否生成SourceMap
	productionSourceMap: false,
	// 资源访问路径
	publicPath: '/',
	devServer: {
		port,
		// 启动之后 自动打开浏览器
		open: true,
		// 报错的时候全屏显示错误
		overlay: {
			warnings: false,
			errors: true,
		},
		//代理
		// proxy: {
		// '/api': {
		//   target: '',
		//   ws: true,
		//   changeOrigin: true
		// },
		// }
	},
	css: {},
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src'),
			},
		},
	},
	chainWebpack: (config) => {},
}
