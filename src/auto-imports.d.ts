export {};
declare global {
  const ref: typeof import("vue")["ref"];
  const onMounted: typeof import("vue")["onMounted"];
  const reactive: typeof import("vue")["reactive"];
  const computed: typeof import("vue")["computed"];
  const createApp: typeof import("vue")["createApp"];
  const watch: typeof import("vue")["watch"];
  const customRef: typeof import("vue")["customRef"];
  const defineAsyncComponent: typeof import("vue")["defineAsyncComponent"];
}
