/*
 * @Author: liut
 * @Date: 2024-07-30 11:12:49
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 11:17:11
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
const PREFIX = "cache_";
export default class Storage {
	public static set(key: string, value: string | Record<string, any>, __PREFIX__?: string) {
		const _value = typeof value === "string" ? value : JSON.stringify(value);
		localStorage.setItem((__PREFIX__ ?? PREFIX) + key, _value);
	}
	public static get(key: string, __PREFIX__?: string) {
		const value = localStorage.getItem((__PREFIX__ ?? PREFIX) + key);
		if (!value) {
			return null;
		}
		if (!isNaN(Number(value))) {
			return value;
		}
		try {
			return JSON.parse(value);
		} catch (err) {
			return value;
		}
	}
	public static remove(key: string, __PREFIX__?: string) {
		localStorage.removeItem((__PREFIX__ ?? PREFIX) + key);
	}
	public static clear(regExp?: RegExp) {
		Object.keys(localStorage)
			.filter(k => k.startsWith(PREFIX) && k !== `${PREFIX}pass` && (!regExp || regExp.test(k)))
			.forEach(k => localStorage.removeItem(k));
	}
}
