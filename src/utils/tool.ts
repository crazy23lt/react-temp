import Storage from "@/utils/storage";
export const getAuthorization = () => {
	const token = Storage.get("access_token");
	if (!token) {
		return;
	} else {
		return {
			token,
			Authorization: token ? { Authorization: `Bearer ${token}` } : {}
		};
	}
};
