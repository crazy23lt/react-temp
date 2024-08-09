import { Dropdown, Flex } from "antd";
import React from "react";

interface IProps {
	children?: React.ReactNode;
	showCount?: number;
}
const ButtonSeries: React.FC<IProps> = ({ children, showCount = 2 }) => {
	const length = React.Children.toArray(children).length;
	if (length - 1 > showCount) {
		return (
			<Flex>
				{React.Children.toArray(children).map((child, index) => {
					if (index < showCount) return child;
					else return null;
				})}
				<Dropdown />
			</Flex>
		);
	} else {
		return <Flex>{children}</Flex>;
	}
};
export default ButtonSeries;
