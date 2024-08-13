import { CacheApi } from "@/api";
import { Button, Col, Row } from "antd";

const HttpCacheView: React.FC = () => {
	const isEven: (num: number) => boolean = num => !(num % 2);
	const isArraySpecial: (nums: number[]) => boolean = nums => {
		const numLen = nums.length;
		let index: number = 1;
		let tag: boolean = true;
		while (index < numLen && tag) {
			const leftnum = nums[index - 1];
			const rightnum = nums[index];
			if (leftnum === rightnum) {
				tag = false;
			} else if (isEven(leftnum) === isEven(rightnum)) {
				tag = false;
			}
			index++;
		}
		return tag;
	};

	const convert: (s: string, numRows: number) => string = (s, numRows) => {
		if (s.length <= 2) return s;
		const _tar = Array.from({ length: numRows }, (_, i) => i);
		const strarr = Array.from({ length: numRows }, () => "");
		const tar = _tar.concat(_tar.slice(1, -1).sort(() => -1));
		let i = 0;
		const res = Array.from(s, _ => {
			let ret = { chat: _, size: tar[i] };
			if (i === tar.length - 1) {
				i = 0;
			} else {
				i++;
			}
			return ret;
		});
		for (const item of res) {
			strarr[item.size] += item.chat;
		}
		return strarr.join("");
	};
	const reverse: (x: number) => number = x => {
		const max = Math.pow(2, 31) - 1;
		const min = -(Math.pow(2, 31) - 1);
		const isNegative = Math.sign(x);
		const ret =
			Number(
				Array.from(`${Math.abs(x)}`)
					.sort(() => -1)
					.join("")
			) * isNegative;
		if (ret < min || ret > max) return 0;
		return ret;
	};
	const sendXhr = () => {
		// CacheApi.fetchHttpCacheApi().then(res => {
		// 	console.log(res);
		// });
		// const print: number[] = [1, 2, 3, 3];
		// console.log(isArraySpecial(print), print);
		// const print: string = "PAYPALISHIRING";
		// console.log(convert(print, 2), print);
		// console.log(convert(print, 3), print);
		// console.log(convert(print, 4), print);
		// console.log(convert(print, 5), print);
		console.log(reverse(0));
		console.log(reverse(-0));
	};

	return (
		<Row>
			<Col span={6}>
				<Button type="primary" onClick={sendXhr}>
					强缓存
				</Button>
			</Col>
			<Col span={6}>
				<Button type="primary" onClick={sendXhr}>
					强缓存
				</Button>
			</Col>
			<Col span={6}>
				<Button type="primary" onClick={sendXhr}>
					强缓存
				</Button>
			</Col>
			<Col span={6}>
				<Button type="primary" onClick={sendXhr}>
					强缓存
				</Button>
			</Col>
		</Row>
	);
};
export default HttpCacheView;
