import useUserStore from "./user";
import useCounterStore from "./counter";
import useLeftList from "./leftlist";
export default function useStore() {
  return {
    user: useUserStore(),
    counter: useCounterStore(),
    useLeftList:useLeftList()
  };
}
