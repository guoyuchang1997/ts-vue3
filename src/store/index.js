import useUserStore from "./user";
import useCounterStore from "./counter";
export default function useStore() {
  return {
    user: useUserStore(),
    counter: useCounterStore(),
  };
}
