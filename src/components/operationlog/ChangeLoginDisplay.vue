<template>
  <!-- 变更登录限制权限 -->
  <div class="change-login-display">
    <!-- 插槽 -->
    <slot></slot>
    <!-- 横线 -->
    <div class="line"></div>
    <!-- 表单 -->
    <!-- 时间设置 -->
    <div class="time-setting col flex">
      <span class="lable"><span style="color: #e40303">*</span> 时间设置：</span>
      <div class="flex" @click="changeTimeSetting(0)">
        <div class="checker flex">
          <span :class="{ active: timeSetting === 0 }" style="margin-right: 10px"></span> 不限
        </div>
      </div>
      <div class="flex" style="margin-left: 35px" @click="changeTimeSetting(1)">
        <div class="checker flex">
          <span :class="{ active: timeSetting === 1 }" style="margin-right: 10px"></span> 固定登录时间
        </div>
      </div>
    </div>
    <div v-if="timeSetting === 1">
      <!-- 可登录日期 -->
      <div class="date-entry">
        <div class="flex">
          <div class="checker flex">
            <span :class="{ active: isDateRange }" style="margin-right: 10px"></span>
            可登录日期：
          </div>
        </div>
        <div>
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </div>
      </div>
      <!-- 可登录时间 -->
      <div class="logon-time">
        <div class="flex">
          <div class="checker flex">
            <span :class="{ active: isTimeRange }" style="margin-right: 10px"></span> 可登录时间：
          </div>
        </div>
        <div>
          <el-time-picker
            v-model="timeRange"
            is-range
            type="daterange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </div>
      </div>
    </div>
    <!-- 保存&取消 -->
    <div class="buttons">
      <button @click="emit('close')">取消</button>
      <button @click="test">保存</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

// 时间设置 0不限 1固定
const timeSetting = ref(0)
/**
 * 修改时间设置
 * @param val 0不限 1固定
 */
const changeTimeSetting = (val: number) => {
  timeSetting.value = val
}

// 开始日期-结束日期
const dateRange = ref(null)
// 开始时间-结束时间
const timeRange = ref(null)
// 是否开启日期设置
const isDateRange = ref(false)
// 是否开启时间设置
const isTimeRange = ref(false)

/**
 * 保存
 */
const test = () => {
  console.log(dateRange.value)
  console.log(timeRange.value)
}

watch([timeSetting, dateRange, timeRange], ([timeSettingVal, dateRangeVal, timeRangeVal]) => {
  if (timeSettingVal === 0) {
    dateRange.value = null
    timeRange.value = null
  }
  if (dateRangeVal !== null) {
    isDateRange.value = true
  } else {
    isDateRange.value = false
  }
  if (timeRangeVal !== null) {
    isTimeRange.value = true
  } else {
    isTimeRange.value = false
  }
})
</script>

<style scoped lang="less">
.change-login-display {
  padding: 0 0 10px;
  .line {
    width: 100%;
    height: 1px;
    margin-top: 14px;
    background-color: #eeeeee;
  }
  .col {
    align-items: center;
    .lable {
      margin-right: 10px;
      font-size: 14px;
      font-weight: 350;
    }
    .checker {
      line-height: none;
    }
  }
  .time-setting {
    margin-top: 30px;
  }
  .date-entry {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }
  .logon-time {
    margin-top: 25px;
    display: flex;
  }
  .buttons {
    display: flex;
    justify-content: end;
    margin-top: 40px;
    button {
      width: 80px;
      height: 40px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }
    button:first-child {
      background-color: #ffffff;
      border: 1px solid #cccccc;
      color: #333333;
    }
    button:last-child {
      margin-left: 10px;
      background-color: #2b53e5;
      color: #ffffff;
    }
  }
  :deep(.el-range-editor, .el-input__wrapper) {
    width: 245px;
    height: 30px;
    // box-shadow: none;
    i {
      color: #2b53e5;
    }
  }
}
</style>
