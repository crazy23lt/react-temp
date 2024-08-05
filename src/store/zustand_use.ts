import { create as zsCreate } from "zustand";
interface CounterState {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}
const useCounterStore = zsCreate<CounterState>(set => {
	return {
		count: 0,
		increment: () => set(state => ({ count: state.count + 1 })),
		decrement: () => set(state => ({ count: state.count - 1 })),
		reset: () => set({ count: 0 })
	};
});
export default useCounterStore;