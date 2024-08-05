/*
 * @Author: liut
 * @Date: 2024-07-29 09:08:50
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 17:52:09
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.scss";

// console.log(process.env.NODE_ENV);
// console.log(process.env.NODE_ENV)
// console.log(import.meta.env.VITE_BASE_URL)
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
