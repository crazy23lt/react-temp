/*
 * @Author: liut
 * @Date: 2024-07-29 09:08:50
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 10:24:20
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		plugins: [react(), mockDevServerPlugin()],
		define: { VITE_BASE_URL: JSON.stringify(env.VITE_BASE_URL) },
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url))
			}
		},
		server: {
			proxy: {
				"^/api": "http://example.com/"
			}
		}
	};
});
