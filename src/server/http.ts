/*
 * @Author: liut
 * @Date: 2024-07-29 21:17:59
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 21:28:05
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
class Http {
	public instance: AxiosInstance;
	public baseConfig: AxiosRequestConfig = {
		baseURL: process.env.VITE_BASE_URL
	};
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(Object.assign(this.baseConfig, config));
	}
	public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.instance.request(config);
	}
}
export default Http;
