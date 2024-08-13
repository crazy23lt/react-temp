/*
 * @Author: liut
 * @Date: 2024-07-30 08:56:03
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 10:14:11
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { AxiosRequestConfig } from "axios";
import Http from "./http";

const HttpClient = new Http({});
export function GET<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig) {
	return HttpClient.get<T>(url, Object.assign(config ?? {}, { params }));
}
export function POST<T>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig) {
	return HttpClient.post<T>(url, Object.assign(config ?? {}, { data }));
}
export function UPLOAD<T>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig) {
	return HttpClient.upload<T>(url, Object.assign(config ?? {}, { data }));
}
