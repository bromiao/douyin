module.exports = {
	printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
	tabWidth: 2, // 一个tab代表几个空格数
	useTabs: true, // 启用tab缩进
	semi: false, // 行位是否使用分号，默认为true
	singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
	trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
	bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
	endOfLine: 'lf',
	singleAttributePerLine: true, // HTML|Vue|JSX中每行强制使用单个属性
	// quoteProps: 'as-needed',
	// jsxSingleQuote: false,
	// jsxBracketSameLine: false,
	// arrowParens: 'always', // 总是添加圆括号
	htmlWhitespaceSensitivity: 'ignore',
	// vueIndentScriptAndStyle: true,
	proseWrap: 'always', // always|never|preserve
	overrides: [
		{
			files: ['*.css', '*.less', '*.scss'],
			options: {
				singleQuote: false,
				trailingComma: 'none',
			},
		},
	],
}
