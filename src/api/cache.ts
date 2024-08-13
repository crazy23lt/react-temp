import { GET } from "@/server/httpClient";

export const fetchHttpCacheApi = () => {
	return GET("/api/cache/default");
};
