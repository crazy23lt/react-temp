import { Col, Row, Flex } from "antd";
import styles from "./index.module.scss";
import GraphGuageMini from "@/components/graph_guage_mini";
import GraphGuageMain from "@/components/graph_guage_main";
const GraphView: React.FC = () => {
	return (
		<Row justify={"space-around"} gutter={30}>
			<Col span={8}>
				<div className={styles.card}>
					<Flex vertical justify="space-between" style={{ height: "100%" }}>
						<div className={styles.title}>集群信息</div>
						<Flex justify="center" align="center" flex={1} gap={12}>
							<GraphGuageMini name={"内存总量(核)"} value={31 / 100} />
							<GraphGuageMain name={"CPU总量(核)"} value={50} />
							<GraphGuageMini name={"CPU总量(核)"} value={44 / 100} />
						</Flex>
					</Flex>
				</div>
			</Col>
			<Col span={8}>
				<div className={styles.card}>
					<Flex vertical justify="space-between" style={{ height: "100%" }}>
						<div className={styles.title}>资源占用率</div>
						<Flex justify="center" align="center" flex={1} gap={12}>
							<GraphGuageMini name={"内存占用率"} value={15 / 100} />
							<GraphGuageMain name={"CPU占用率"} value={12} />
							<GraphGuageMini name={"GPU占用率"} value={77 / 100} />
						</Flex>
					</Flex>
				</div>
			</Col>
			<Col span={8}>
				<div className={styles.card}>
					<Flex vertical justify="space-between" style={{ height: "100%" }}>
						<div className={styles.title}>资源利用率</div>
						<Flex justify="center" align="center" flex={1} gap={12}>
							<GraphGuageMini name={"内存占用率"} value={92 / 100} />
							<GraphGuageMain name={"CPU占用率"} value={12} />
							<GraphGuageMini name={"GPU占用率"} value={63 / 100} />
						</Flex>
					</Flex>
				</div>
			</Col>
		</Row>
	);
};
export default GraphView;
