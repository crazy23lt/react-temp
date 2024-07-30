/*
 * @Author: liut
 * @Date: 2024-07-30 09:22:17
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 10:44:00
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { GET, POST } from "@/server/httpClient";

export type RequestLogin = {
	username: string;
	password: string;
};
export type ResponseLogin = {
	token: string;
};
export const fetchLoginApi = (params: RequestLogin) => {
	return POST<ResponseLogin>("/api/login", params);
};

export const fetchLogoutApi = () => {
	return GET("/liuttt");
};
