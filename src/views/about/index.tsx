/*
 * @Author: liut
 * @Date: 2024-07-29 14:57:51
 * @LastEditors: liut
 * @LastEditTime: 2024-07-30 18:05:51
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { Flex } from "antd";
import * as echarts from "echarts";
import styles from "./index.module.scss";
import { useEffect } from "react";
import cls from "classnames";
var value = 0.8, // 值，0~1之间
	startAngle = 215, // 开始角度
	endAngle = -35, // 结束角度
	splitCount = 60, // 刻度数量
	pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle; // 当前指针（值）角度
const opt: any = {
	series: [
		{
			name: "awdw",
			type: "gauge",
			radius: "90%",
			startAngle: pointerAngle,
			endAngle: endAngle,
			splitNumber: 1,
			axisLine: {
				show: false,
				lineStyle: {
					width: 3,
					opacity: 0
				}
			},
			title: { show: false },
			detail: { show: false },
			splitLine: { show: false },
			axisTick: {
				length: 27,
				splitNumber: Math.ceil((1 - value) * splitCount),
				lineStyle: {
					color: "#001242",
					width: 3
				}
			},
			axisLabel: { show: false },
			pointer: { show: false },
			itemStyle: {},
			markPoint: {
				animation: false,
				silent: false,
				data: [
					{
						// symbol: "image://" + document.getElementById("round1").src,
						x: "50%",
						y: "50%",
						symbolSize: 280,
						itemStyle: {
							borderWidth: 3
						}
					},
					{
						symbol: "circle",
						symbolSize: 200
					}
				]
			},
			data: [
				{
					value: value,
					name: "test gauge"
				}
			]
		},
		{
			name: "awdw",
			type: "gauge",
			radius: "90%",
			startAngle: startAngle,
			endAngle: pointerAngle,
			splitNumber: 1,
			axisLine: {
				show: false,
				lineStyle: {
					width: 3,
					opacity: 0
				}
			},
			title: { show: false },
			detail: { show: false },
			splitLine: { show: false },
			axisTick: {
				length: 27,
				splitNumber: Math.ceil(value * splitCount),
				lineStyle: {
					color: {
						image: document.getElementById("bg_img"),
						repeat: "no-repeat"
					},
					width: 3
				}
			},
			axisLabel: { show: false },
			pointer: { show: false },
			itemStyle: {},
			data: [
				{
					value: value,
					name: "test gauge"
				}
			]
		},
		{
			name: "awdw",
			type: "gauge",
			radius: "95%",
			startAngle: pointerAngle,
			endAngle: pointerAngle,
			splitNumber: 1,
			axisLine: {
				show: false,
				lineStyle: {
					width: 3,
					opacity: 0
				}
			},
			title: { show: false },
			detail: { show: false },
			splitLine: { show: false },
			axisTick: {
				length: 20,
				splitNumber: 1,
				lineStyle: {
					color: {
						image: document.getElementById("bg_img"),
						repeat: "no-repeat"
					},
					width: 3
				}
			},
			axisLabel: { show: false },
			pointer: { show: false },
			itemStyle: {},
			data: [
				{
					value: value,
					name: "test gauge"
				}
			]
		}
	]
};
const AboutView: React.FC = () => {
	const id = Math.random().toString(36).substring(2);
	useEffect(() => {
		const chartDom = document.getElementById(id);
		if (chartDom) {
			const chart = echarts.init(chartDom);
			chart.setOption(opt);
		}
	}, []);

	const width = 460;
	const height = 360;
	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(centerX, centerY);

	// Define the gradient colors
	const colors = ["#abd3ff", "#7eacf7", "#51c4ea", "#fbd55e", "#db6daa", "#aa52e3"];
	const segments = colors.length;
	const angleStep = 360 / segments;
	return (
		<Flex justify="center" align="center" vertical>
			<div id={id} className={styles.card}></div>
		</Flex>
	);
};
export default AboutView;
