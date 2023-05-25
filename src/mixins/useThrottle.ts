type CallbackFn = (item?: any) => void;
let timer: any = null;
export default function (callback: CallbackFn, day = 1000) {
  if (!timer) {
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      callback && callback();
    }, day);
  }
}
