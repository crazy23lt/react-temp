/*
 * @Author: liut
 * @Date: 2024-07-29 14:28:44
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 15:17:49
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const LayoutView: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout style={{ height: "100vh" }}>
			<Layout.Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical"></div>
				<Menu theme="dark" mode="inline" items={[]} />
			</Layout.Sider>
			<Layout>
				<Layout.Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
				</Layout.Header>
				<Layout.Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
};
export default LayoutView;
