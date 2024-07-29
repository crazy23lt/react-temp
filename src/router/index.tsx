/*
 * @Author: liut
 * @Date: 2024-07-29 11:37:51
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 17:14:34
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import LayoutView from "@/layout"
import AboutView from "@/views/about"
import HomeView from "@/views/home"
import NotFoundView from "@/views/notFound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutView />,
		children: [
			{ index: true, element: <HomeView /> },
			{ path: "/about", element: <AboutView /> }
		]
	},
	{ path: "*", element: <NotFoundView /> }
])
const RouterView: React.FC = () => {
	return <RouterProvider router={router} />
}
export default RouterView
