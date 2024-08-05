import useCounterStore from "@/store/zustand_use";
import { LoadingOutlined, MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const ZustandView: React.FC = () => {
	const { count, decrement, increment, reset } = useCounterStore();
	return (
		<Flex justify="center">
			<Button icon={<PlusSquareOutlined />} onClick={increment}></Button>
			<span>{count}</span>
			<Button icon={<MinusSquareOutlined />} onClick={decrement}></Button>
			<Button icon={<LoadingOutlined />} onClick={reset}></Button>
		</Flex>
	);
};
export default ZustandView;
