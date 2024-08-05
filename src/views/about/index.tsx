/*
 * @Author: liut
 * @Date: 2024-07-29 14:57:51
 * @LastEditors: liut
 * @LastEditTime: 2024-07-31 09:52:24
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { Flex } from "antd";
import * as echarts from "echarts";
import styles from "./index.module.scss";
import { useEffect } from "react";
import bg from "@/assets/images/bg.png";

const AboutView: React.FC = () => {
	const id = Math.random().toString(36).substring(2);
	var value = 0.79, // 值，0~1之间
		startAngle = 215, // 开始角度
		endAngle = -35, // 结束角度
		splitCount = 60, // 刻度数量
		pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle; // 当前指针（值）角度
	useEffect(() => {
		const chartDom = document.getElementById(id);
		const imageDom = document.getElementById("bg_img");
		const opt: echarts.EChartsOption = {
			series: [
				{
					type: "gauge",
					radius: "90%",
					center: ["50%", "50%"],
					axisLabel: { show: true, distance: 50, color: "#ccc", fontSize: 18 },
					splitNumber: 4,
					startAngle: startAngle,
					endAngle: endAngle,
					title: { show: false },
					detail: { show: false },
					splitLine: { show: false },
					axisTick: { show: false },
					axisLine: { show: false },
					pointer: {
						icon: "circle",
						width: 45,
						offsetCenter: [0, "-52%"],
						itemStyle: {
							color: "#CD66BA"
						}
					},

					data: [{ value: value * 100, name: "test gauge" }],
					zlevel: 3
				},
				{
					type: "gauge",
					radius: "90%",
					center: ["50%", "50%"],
					axisLine: { show: false },
					title: { show: false },
					detail: { show: false },
					splitLine: { show: false },
					axisLabel: { show: false },
					pointer: { show: false },
					itemStyle: {},
					splitNumber: 1,
					startAngle: pointerAngle,
					endAngle: endAngle,
					axisTick: {
						length: 27,
						splitNumber: Math.ceil((1 - value) * splitCount),
						lineStyle: { color: "#E6E6E6", width: 3 }
					},
					markPoint: {
						animation: false,
						silent: true,
						data: [
							{
								symbol: `image://http://10.245.8.52:5173/src/assets/images/02.png`,
								x: "50%",
								y: "50%",
								symbolSize: 220,
								itemStyle: { borderWidth: 3 }
							},
							{ symbol: "circle", symbolSize: 200 }
						]
					},
					data: [{ value: value, name: "test gauge" }]
				},
				{
					type: "gauge",
					radius: "90%",
					center: ["50%", "50%"],
					axisLine: { show: false },
					title: { show: false },
					detail: { show: false },
					splitLine: { show: false },
					axisLabel: { show: false },
					pointer: { show: false },
					itemStyle: {},
					splitNumber: 1,
					startAngle: startAngle,
					endAngle: pointerAngle,
					axisTick: {
						length: 27,
						splitNumber: Math.ceil(value * splitCount),
						lineStyle: { color: { image: imageDom, repeat: "no-repeat" }, width: 3 }
					},

					data: [{ value: value * 100, name: "test gauge" }]
				}
			]
		};
		if (chartDom) {
			const chart = echarts.init(chartDom);
			chart.setOption(opt);
		}
	}, []);
	return (
		<Flex justify="center" align="center" vertical>
			<div id={id} className={styles.card}></div>
			<img id="bg_img" src={bg} alt="" className={styles.bgimg} style={{ display: "none" }} />
		</Flex>
	);
};
export default AboutView;
