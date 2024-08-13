import { GET } from "@/server/httpClient";

export const fetchExpressCookieApi = () => {
	return GET("/api/");
};
