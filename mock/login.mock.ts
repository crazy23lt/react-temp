/*
 * @Author: liut
 * @Date: 2024-07-30 09:54:14
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 10:59:11
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { defineMock } from "vite-plugin-mock-dev-server";
const DELAY = 3000;
export default defineMock([
	{
		url: "/api/login",
		method: "POST",
		status: 200,
		delay: DELAY,
		body(request) {
			return { code: 0, message: "success", result: `this is token` };
		}
	},
	{ url: "/logout", method: "GET" }
]);
