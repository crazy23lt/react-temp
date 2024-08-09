import type { Widgets } from "@/constans/widgets";

interface IProps {
	code: Widgets[];
	onClick?: (type: string) => void;
}
const FunctionButton: React.FC<IProps> = ({ code, onClick }) => {
	return <></>;
};
export default FunctionButton;
