/*
 * @Author: liut
 * @Date: 2024-07-29 21:17:59
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 11:56:26
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { getAuthorization } from "@/utils/tool";
import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig
} from "axios";

type Result<T> = {
	code: number;
	message: string;
	result: T;
};
class Http {
	public instance: AxiosInstance;
	public baseConfig: AxiosRequestConfig = {
		baseURL: import.meta.env.VITE_BASE_URL
	};
	constructor(config: AxiosRequestConfig) {
		// 初始实例化
		this.instance = axios.create(Object.assign(this.baseConfig, config));
		// request 拦截函数
		this.instance.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				console.log(config);
				const access = getAuthorization();
				if (access) {
					config.headers.Authorization = access.Authorization.Authorization;
				}
				return config;
			},
			(err: any) => {
				return Promise.reject(err);
			}
		);
		// reponse 拦截函数
		this.instance.interceptors.response.use(
			(res: AxiosResponse) => {
				return res;
			},
			(err: any) => {
				return Promise.reject(err);
			}
		);
	}
	public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.instance.request(config);
	}
	public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.request(Object.assign({ url, method: "GET" }, config));
	}
	public post<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.request(Object.assign({ url, method: "POST" }, config));
	}
	public put<T>(
		url: string,
		data?: Record<string, any>,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<Result<T>>> {
		return this.instance.put(url, data, config);
	}
	public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.delete(url, config);
	}
}
export default Http;
