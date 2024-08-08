import { POST } from "@/server/httpClient";

export const fetchExpressPostUrlencodedApi = (data: URLSearchParams) => {
	return POST(
		"/express_api/post/urlencoded",
		{ data },
		{ headers: { "Content-Type": "application/x-www-form-urlencoded" } }
	);
};
