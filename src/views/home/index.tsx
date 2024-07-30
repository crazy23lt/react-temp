/*
 * @Author: liut
 * @Date: 2024-07-29 14:57:55
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 11:52:25
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { fetchLoginApi } from "@/api/login";
import { Button, Flex, Select } from "antd";

const HomeView: React.FC = () => {
	const loginEvent = async () => {
		let ret = await fetchLoginApi({ username: "liut", password: "Tq112211" });
		console.log(ret.data.result);
	};
	const logoutEvent = () => {};
	const handleChange = () => {};
	return (
		<Flex gap="small" wrap>
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
