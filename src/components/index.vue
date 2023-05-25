<template>
  <div class="main">
    <div class="le"></div>
    <div class="ri">
      <div class="ritop"></div>
      <div class="rimain"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deviceCol, Itltle,Itltles, customerDeviceCol } from "@/plugin/tabletitle";
import { ref } from "vue";
let title = ref<Itltles[]>([]);
(title.value = [
  {
    id: 1512,
    shop_id: null,
    device_info: "Device_9_9_1684941542_0_344336",
    device_attribution: "北京",
    device_function: null,
    device_model: null,
    created_at: "2023-05-24 23:19:02",
    updated_at: "2023-05-24 23:19:37",
    deleted_at: null,
    last_login_at: null,
    device_name: "平台-北京-0524-972616_0",
    tags: [],
    instance_id: "i-2ze9akdmwhkqoub5pgdm",
    cpu: 1,
    memory: 1,
    start_time: "2023-05-24 23:19:02",
    expired_time: "2023-06-24 23:19:02",
    status: "running",
    ip_address: "47.94.204.89",
    mac_address: null,
    zone_id: null,
    region_id: "cn-beijing",
    vtype: "ali",
    company_id: 9,
    auto_renew: 0,
    info: null,
    uid: 9,
    oid: 1918,
    send_type: 2,
    remote_port: 22,
    remote_username: "root",
    remote_password: "IZqGeHVcwOl03aUF",
    device_status: 1,
    error_reason: null,
    un: "rHyyC7hQfm9zU",
    pw: "MaPJrsOP39RLteMc",
    pt: 42847,
    useruuid: null,
    ext: null,
    v2_ip: null,
    tag_names: null,
    time_day_num: 30,
    account_count: 0,
    status_text: "运行中",
    vtype_text: "阿里云",
    region_text: "北京",
    auto_renew_text: "关闭续费",
    is_enable: 1,
    account: [],
    log: [],
    callback: null,
  },
]),
  console.log(deviceCol, title,customerDeviceCol);
</script>

<style lang="less" scoped>
.main {
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  margin: auto;
  display: flex;
}
.le {
  width: 140px;
  height: 100%;
  border: 1px solid #ccc;
  margin-right: 10px;
}
.ri {
  width: calc(100vw - 170px);
  height: 100%;
  .ritop {
    width: 100%;
    height: 120px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .rimain {
    width: 100%;
    height: calc(100vh - 150px);
    border: 1px solid #ccc;
  }
}
</style>
