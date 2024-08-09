import { ButtonSeries } from "@/components";
import { Button, Flex, Form, Input, Select } from "antd";

const FilterForm: React.FC = () => {
	const handleReset = () => {};
	const onSearch = () => {};
	return (
		<Flex>
			<Form layout="inline">
				<Form.Item name="planName">
					<Input style={{ width: 190 }} />
				</Form.Item>
				<Form.Item name="planStatus">
					<Select style={{ width: 190 }} options={[]} />
				</Form.Item>
			</Form>
			<ButtonSeries>
				<Button type="primary" onClick={onSearch}>
					搜索
				</Button>
				<Button onClick={handleReset}>重置</Button>
			</ButtonSeries>
		</Flex>
	);
};
export default FilterForm;
