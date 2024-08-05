import { Flex } from "antd";
import styles from "./index.module.scss";
import { useEffect, useMemo } from "react";
import * as echarts from "echarts";

interface IProps {
	name: string;
	value: number;
	width?: number;
	height?: number;
}
const baseOpt: echarts.EChartsOption["series"] = {
	type: "gauge",
	radius: "100%",
	center: ["50%", "50%"],
	title: { show: false },
	detail: { show: false },
	splitLine: { show: false },
	axisTick: { show: false },
	axisLine: { show: false },
	axisLabel: { show: false },
	pointer: { show: false }
};
const GraphGuageMain: React.FC<IProps> = ({ name, value, width = 200, height = 200 }) => {
	const id = Math.random().toString(36).substring(2);
	const startAngle = 230;
	const endAngle = -50;
	const opts = useMemo(() => {
		const bg = {
			markPoint: {
				animation: false,
				silent: true,
				data: [
					{
						symbol: `image://http://10.245.8.52:5173/src/assets/images/01.png`,
						x: "50%",
						y: "50%",
						symbolSize: 200
					},
					{ symbol: "circle", symbolSize: 200 }
				]
			}
		};
		const centerMini = {
			data: [{ value }],
			pointer: {
				icon: "circle",
				width: 8,
				offsetCenter: [0, 30],
				itemStyle: {
					color: "white",
					shadowColor: "rgba(0, 0, 0, 0.5)",
					shadowBlur: 8,
					shadowOffsetX: 2,
					shadowOffsetY: 4
				}
			},
			zlevel: 4
		};
		const center = {
			data: [{ value }],
			pointer: {
				icon: "circle",
				width: 20,
				offsetCenter: [0, 30],
				itemStyle: {
					color: "white",
					shadowColor: "rgba(0, 0, 0, 0.3)",
					shadowBlur: 8,
					shadowOffsetX: 2,
					shadowOffsetY: 4
				}
			},
			zlevel: 3
		};
		const op = {
			radius: "84%",
			startAngle,
			endAngle,
			min: 0,
			max: 100,
			data: [{ value }],
			axisLine: {
				roundCap: true,
				lineStyle: {
					width: 12,
					color: [
						[
							1,
							new echarts.graphic.LinearGradient(0, 0, 1, 0, [
								{ offset: 0.16, color: "#ABD3FF" },
								{ offset: 0.32, color: "#7EACF7" },
								{ offset: 0.48, color: "#51C4EA" },
								{ offset: 0.64, color: "#FBD55E" },
								{ offset: 0.8, color: "#DB6DAA" },
								{ offset: 1, color: "#DB6DAA" }
							])
						]
					]
				}
			},
			splitNumber: 6,
			axisLabel: {
				show: true,
				distance: 16,
				color: "#c2c2c2",
				fontSize: 8,
				formatter(value: number) {
					return Math.round(value);
				}
			},
			detail: {
				// offsetCenter: [0, 0],
				valueAnimation: true,
				formatter: function (value: number) {
					return `{num|${Math.round(value)}}{signal|%}`;
				},
				rich: {
					num: {
						fontWeight: "bold",
						fontSize: 20,
						color: "#0E0E0E",
						fontFamily: "Courier New"
					},
					signal: {
						fontWeight: "bold",
						fontSize: 16,
						color: "#0E0E0E",
						fontFamily: "Courier New"
					}
				}
			},
			pointer: {
				icon: "path://M30.6452732,6.77615897 L33.8940484,42.2092472 C33.9115115,42.4004898 33.8734748,42.5927033 33.783495,42.762361 C33.2054079,43.864198 31.8694243,44.4151165 29.7755441,44.4151165 C27.6994463,44.4151165 26.2984915,43.8735157 25.5726796,42.7903141 C25.4473621,42.6003074 25.3899036,42.3734143 25.4105828,42.1467451 L28.6536272,6.77615897 C28.7040534,6.22618111 29.190777,5.82121444 29.7407549,5.8716406 C30.2208921,5.91566323 30.6012506,6.29602178 30.6452732,6.77615897 Z",
				width: 8,
				length: "50%",
				itemStyle: { color: "#828282" }
			},
			axisTick: { distance: 6, length: 3, lineStyle: { color: "#c2c2c2", width: 1 } },
			splitLine: { length: 4, lineStyle: { color: "#c2c2c2", width: 1 } },
			zlevel: 2
		};
		return {
			series: [
				Object.assign({}, baseOpt, op),
				Object.assign({}, baseOpt, bg),
				Object.assign({}, baseOpt, center),
				Object.assign({}, baseOpt, centerMini)
			]
		};
	}, [name, value]);
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
export default GraphGuageMain;
