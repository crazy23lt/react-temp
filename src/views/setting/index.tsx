import NewTitle from "@/components/new_title";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
import { Col, Row, Tree } from "antd";
import type { TreeDataNode } from "antd";
import FilterForm from "./filter";
const SettingView: React.FC = () => {
	const treedata: TreeDataNode[] = [
		{
			title: "parent 1",
			key: "0-0",
			icon: <CarryOutOutlined />,
			children: [
				{
					title: "parent 1-0",
					key: "0-0-0",
					icon: <CarryOutOutlined />,
					children: [
						{ title: "leaf", key: "0-0-0-0", icon: <CarryOutOutlined /> },
						{ title: "leaf", key: "0-0-0-2", icon: <CarryOutOutlined /> }
					]
				},
				{
					title: "parent 1-1",
					key: "0-0-1",
					icon: <CarryOutOutlined />,
					children: [{ title: "leaf", key: "0-0-1-0", icon: <CarryOutOutlined /> }]
				},
				{
					title: "parent 1-2",
					key: "0-0-2",
					icon: <CarryOutOutlined />,
					children: [
						{ title: "leaf", key: "0-0-2-0", icon: <CarryOutOutlined /> },
						{
							title: "leaf",
							key: "0-0-2-1",
							icon: <CarryOutOutlined />,
							switcherIcon: <FormOutlined />
						}
					]
				}
			]
		},
		{
			title: "parent 2",
			key: "0-1",
			icon: <CarryOutOutlined />,
			children: [
				{
					title: "parent 2-0",
					key: "0-1-0",
					icon: <CarryOutOutlined />,
					children: [
						{ title: "leaf", key: "0-1-0-0", icon: <CarryOutOutlined /> },
						{ title: "leaf", key: "0-1-0-1", icon: <CarryOutOutlined /> }
					]
				}
			]
		}
	];
	return (
		<Row>
			<Col span={4}>
				<Tree treeData={treedata} />
			</Col>
			<Col span={20}>
				<NewTitle renderOperate={<>liu</>}>
                    <FilterForm/>
                </NewTitle>
			</Col>
		</Row>
	);
};
export default SettingView;
