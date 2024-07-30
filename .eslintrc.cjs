/*
 * @Author: liut
 * @Date: 2024-07-29 09:08:50
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 21:00:39
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	// 扩展配置
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended"
	],
	// 忽略的文件路径
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true }
		],
		"no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn"
	}
};
