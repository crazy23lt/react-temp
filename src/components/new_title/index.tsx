import { Flex } from "antd";
import { cloneElement } from "react";
interface IProps {
	children?: React.ReactNode;
	renderOperate?: React.ReactElement;
}
const NewTitle: React.FC<IProps> = ({ children, renderOperate }) => {
	return (
		<Flex justify="space-between" align="center">
			{!!renderOperate && <div>{cloneElement(renderOperate)}</div>}
			<div>{children}</div>
		</Flex>
	);
};
export default NewTitle;
