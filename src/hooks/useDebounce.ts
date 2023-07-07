type CallbackFn = (item?: any) => void
let timer: any = null
/**
 * 节流
 * @param callback 一个回调函数
 * @param day 节流时间
 */
export default function (callback: CallbackFn, day = 1000) {
  timer ? clearTimeout(timer) : null
  timer = setTimeout(() => {
    callback && callback()
  }, day)
}
