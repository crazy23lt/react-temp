/*
 * @Author: liut
 * @Date: 2024-07-29 09:08:50
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 17:50:22
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import "./App.scss";
import RouterView from "@/router";
import { ConfigProvider } from "antd";

// function _App() {
// 	const [count, setCount] = useState(0)
// 	return (
// 		<>
// 			<div>
// 				<a href="https://vitejs.dev" target="_blank">
// 					<img src={viteLogo} className="logo" alt="Vite logo" />
// 				</a>
// 				<a href="https://react.dev" target="_blank">
// 					<img src={reactLogo} className="logo react" alt="React logo" />
// 				</a>
// 			</div>
// 			<h1>Vite + React</h1>
// 			<div className="card">
// 				<button onClick={() => setCount(count => count + 1)}>
// 					count is {count}
// 				</button>
// 				<p>
// 					Edit <code>src/App.tsx</code> and save to test HMR
// 				</p>
// 			</div>
// 			<p className="read-the-docs">
// 				Click on the Vite and React logos to learn more
// 			</p>
// 		</>
// 	)
// }
const App: React.FC = () => {
	return (
		<ConfigProvider theme={{ cssVar: true }}>
			<RouterView />
		</ConfigProvider>
	);
};
export default App;
