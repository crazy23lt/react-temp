import { useEffect, useMemo } from "react";
import * as echarts from "echarts";
import styles from "./index.module.scss";
import { Flex } from "antd";
import bg from "@/assets/images/bg.png";
interface IProps {
	name: string;
	value: number;
	width?: number;
	height?: number;
}
const baseOpt: echarts.EChartsOption["series"] = {
	type: "gauge",
	radius: "120%",
	center: ["50%", "50%"],
	title: { show: false },
	detail: { show: false },
	splitLine: { show: false },
	axisTick: { show: false },
	axisLine: { show: false },
	axisLabel: { show: false },
	pointer: { show: false }
};

const GraphGuageMini: React.FC<IProps> = ({ name, value, width = 124, height = 124 }) => {
	const id = Math.random().toString(36).substring(2);
	const startAngle = 215;
	const endAngle = -35;
	const splitCount = 100;
	const pointerAngle = useMemo(() => {
		return (startAngle - endAngle) * (1 - value) + endAngle;
	}, [value]);
	const imageEl = document.createElement("img");
	imageEl.src = bg;
	const opts = useMemo(() => {
		const graduation: echarts.EChartsOption["series"] = Object.assign({}, baseOpt, {
			splitNumber: 4,
			axisLabel: { show: true, distance: 20, color: "#c2c2c2", fontSize: 8 },
			pointer: {
				icon: "circle",
				width: 10,
				offsetCenter: [0, "-38%"],
				itemStyle: {
					color: "#CD66BA"
				}
			},
			detail: {
				offsetCenter: [0, 0],
				valueAnimation: true,
				formatter: function (value: number) {
					return `{num|${Math.round(value)}}{signal|%}`;
				},
				rich: {
					num: {
						fontWeight: "bold",
						fontSize: 18,
						color: "#0E0E0E",
						fontFamily: "Courier New"
					},
					signal: {
						fontWeight: "bold",
						fontSize: 14,
						color: "#0E0E0E",
						fontFamily: "Courier New"
					}
				}
			},
			data: [{ value: value * 100 }],
			zlevel: 3
		});
		const active: echarts.EChartsOption["series"] = Object.assign({}, baseOpt, {
			splitNumber: 1,
			startAngle: startAngle,
			endAngle: pointerAngle,
			axisTick: {
				length: 6,
				splitNumber: Math.ceil(value * splitCount),
				lineStyle: { color: { image: imageEl, repeat: "no-repeat" }, width: 1 }
			}
		});
		const normalize: echarts.EChartsOption["series"] = Object.assign({}, baseOpt, {
			splitNumber: 1,
			startAngle: pointerAngle,
			endAngle: endAngle,
			axisTick: {
				length: 6,
				splitNumber: Math.ceil((1 - value) * splitCount),
				lineStyle: { color: "#E6E6E6", width: 1 }
			},
			markPoint: {
				animation: false,
				silent: true,
				data: [
					{
						symbol: `image://http://10.245.8.52:5173/src/assets/images/02.png`,
						x: "50%",
						y: "50%",
						symbolSize: 85,
						itemStyle: { borderWidth: 3 }
					},
					{ symbol: "circle", symbolSize: 200 }
				]
			}
		});
		return {
			series: [active, normalize, graduation]
		};
	}, [name, value, pointerAngle]);
	useEffect(() => {
		const chartDom = document.getElementById(id);
		if (chartDom) {
			const chart = echarts.init(chartDom);
			chart.setOption(opts);
		}
	}, [opts]);
	return (
		<Flex vertical align="center">
			<div id={id} style={{ width, height }} />
			<div className={styles.title}>{name}</div>
		</Flex>
	);
};
export default GraphGuageMini;
