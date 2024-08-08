/*
 * @Author: liut
 * @Date: 2024-07-29 14:57:55
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 11:52:25
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { PostApi } from "@/api";
import { fetchExpressCookieApi } from "@/api/express";
import { fetchLoginApi } from "@/api/login";
import { Button, Flex, Select } from "antd";

const HomeView: React.FC = () => {
	const loginEvent = async () => {
		let ret = await fetchLoginApi({ username: "liut", password: "Tq112211" });
	};
	const logoutEvent = () => {};
	const handleChange = () => {};
	const expressCoookie = () => {
		fetchExpressCookieApi();
	};
	const createUrlencoded = () => {
		const data = new URLSearchParams();
		data.append("emial", "2394630102@qq.com");
		data.append("password", "7777777");
		PostApi.fetchExpressPostUrlencodedApi(data).then(res => {
			console.log(res);
		});
	};
	return (
		<Flex gap="small" wrap>
			<Button type="primary" onClick={createUrlencoded}>
				application/x-www-form-urlencoded
			</Button>
			<Button type="primary" onClick={expressCoookie}>
				express cookie
			</Button>
			<Button type="primary" onClick={loginEvent}>
				Login Button
			</Button>
			<Button onClick={logoutEvent}>Logout Button</Button>
			<Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}
				options={[
					{ value: "jack", label: "Jack" },
					{ value: "lucy", label: "Lucy" },
					{ value: "Yiminghe", label: "yiminghe" },
					{ value: "disabled", label: "Disabled", disabled: true }
				]}
			/>
		</Flex>
	);
};
export default HomeView;
