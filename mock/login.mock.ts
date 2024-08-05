/*
 * @Author: liut
 * @Date: 2024-07-30 09:54:14
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 10:59:11
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { defineMock } from "vite-plugin-mock-dev-server";
import jwt from "jsonwebtoken";
const DELAY = 3000;
const 
export default defineMock([
	{
		url: "/api/login",
		method: "POST",
		status: 200,
		delay: DELAY,
		body(request) {
			const { username, password } = request.body;
			if (username || password) {
				const token = jwt.sign({ data: JSON.stringify({ username }) }, "secret", {
					expiresIn: "6s"
				});
				return { code: 0, message: "登录成功", result: { token } };
			} else {
				return { code: -1, message: "账密错误", result: null };
			}
		}
	},
	{
		url: "/api/account",
		method: "GET",
		status: 200,
		// delay: DELAY,
		body(request) {
			const authHeader = request.headers.authorization;
			const token =
				authHeader && authHeader.startsWith("Bearer ")
					? authHeader.substring(7) // 去掉 'Bearer ' 前缀
					: null;
			const decoded = jwt.verify(token, "secret",(err)=>{

			});
			console.log(decoded);
			return { code: -1, message: "err", result: null };
		}
	},
	{ url: "/logout", method: "GET" }
]);
