type CallbackFn = (item?: any) => void;
let timer: any = null;
export default function (callback: CallbackFn, day = 1000) {
  timer ? clearTimeout(timer) : null;
  timer = setTimeout(() => {
    callback && callback();
  }, day);
}
