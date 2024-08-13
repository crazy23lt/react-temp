import { POST, UPLOAD } from "@/server/httpClient";

/**
 * application/x-www-form-urlencoded
 * 用于发送表单数据，这种格式常用于 HTML 表单的提交。数据以键值对的形式编码在请求体中
 */
export const fetchExpressPostUrlencodedApi = (data: URLSearchParams) => {
	return POST("/api/post/urlencoded", data, {
		headers: { "Content-Type": "application/x-www-form-urlencoded" }
	});
};
/**
 * multipart/form-data
 * 用于上传文件，通常用于表单中包含文件上传字段时。数据分为多个部分，每部分可以包含不同类型的数据
 */
export const fetchExpressPostFormDataApi = (data: FormData) => {
	return POST("/api/post/form-data", data, {
		headers: { "Content-Length": "multipart/form-data" }
	});
};
export const fetchExpressPostFormDataFileApi = (data: FormData) => {
	return UPLOAD<Blob>("/api/post/form-data/file", data, {
		headers: { "Content-Length": "multipart/form-data" },
		responseType: "blob"
	});
};
/**
 * application/json
 * 用于发送 JSON 格式的数据。适用于 RESTful API 请求中传递 JSON 数据。
 */
export const fetchExpressPostJsonApi = (data: Record<string, any>) => {
	return POST("/api/post/form-data", data, {
		headers: { "Content-Length": "application/json" }
	});
};
/**
 * application/octet-stream
 * 用于发送二进制数据，这是一种通用的二进制数据格式，不特定于某种数据类型
 */
