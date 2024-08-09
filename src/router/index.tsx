/*
 * @Author: liut
 * @Date: 2024-07-29 11:37:51
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 17:14:34
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import LayoutView from "@/layout";
import AboutView from "@/views/about";
import GraphView from "@/views/graph";
import HomeView from "@/views/home";
import LoginView from "@/views/login/login";
import NotFoundView from "@/views/notFound";
import SettingView from "@/views/setting";
import ZustandView from "@/views/zustand";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 路由懒加载
const lazyload = () => {
	return <Suspense fallback></Suspense>;
};
enum UserLevel {
	ADMIN,
	SUPER_ADMIN,
	MEMBER
}
export interface IRouteObject {
	children?: IRouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path: string;
	meta?: {
		auth?: boolean;
		role?: UserLevel;
	};
}
const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutView />,
		children: [
			{ index: true, element: <HomeView /> },
			{ path: "/about", element: <AboutView /> },
			{ path: "/graph", element: <GraphView /> },
			{ path: "/zustand", element: <ZustandView /> },
			{ path: "/setting", element: <SettingView /> }
		]
	},
	{
		path: "/login",
		element: <LoginView />
	},
	{ path: "*", element: <NotFoundView /> }
]);
const RouterView: React.FC = () => {
	return <RouterProvider router={router} />;
};
export default RouterView;
