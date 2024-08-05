import { fetchAccountApi, fetchLoginApi } from "@/api/login";
import useUserStore from "@/store/user";
import Storage from "@/utils/storage";
import { Button, Flex } from "antd";

const LoginView: React.FC = () => {
	const { token, setToken, delToken, setName } = useUserStore();

	const dispatchLoginEvent = async () => {
		const ret = await fetchLoginApi({ username: "liut", password: "121212" });
		if (ret.code === 0) {
			setToken(ret.result.token);
			Storage.set("access_token", ret.result.token);
			dispatchAccountEvent();
		}
	};
	const dispatchAccountEvent = async () => {
		const ret = await fetchAccountApi();
	};
	const dispatchLogoutEvent = () => {};
	return (
		<Flex justify="center" align="center">
			<Button type="primary" onClick={dispatchLoginEvent}>
				Login Button
			</Button>
			<span>{token ? "已登录" : "未登录"}</span>
			<Button type="primary" onClick={dispatchLogoutEvent}>
				Logout Button
			</Button>
			<Button type="primary" onClick={dispatchAccountEvent}>
				account
			</Button>
		</Flex>
	);
};
export default LoginView;
