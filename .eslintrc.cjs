/*
 * @Author: liut
 * @Date: 2024-07-29 09:08:50
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 17:49:56
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true }
		],
		semi: ["error", "never"],
		"no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn"
	}
};
