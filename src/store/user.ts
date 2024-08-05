import Storage from "@/utils/storage";
import { create as zsCreate } from "zustand";
interface UserState {
	token: string;
	username: string;
	setToken: (token: string) => void;
	delToken: () => void;
	setName: (name: string) => void;
}
const useUserStore = zsCreate<UserState>(set => {
	return {
		token: Storage.get("access_token") ?? "",
		username: "",
		setToken: token => set({ token }),
		delToken: () => set({ token: "" }),
		setName: name => set({ username: name })
	};
});
export default useUserStore;
