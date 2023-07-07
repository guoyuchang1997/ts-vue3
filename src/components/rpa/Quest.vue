<template>
  <div class="quest">
    <div class="main flex conten">
      <div class="text">执行类型 : </div>
      <div class="info flex">
        <div class="renwu pointer" :class="{ active: Quest === 'Normal' }" @click="Quest = 'Normal'">普通任务</div>
        <div class="renwus pointer" :class="{ active: Quest === 'project' }" @click="Quest = 'project'">计划任务</div>
      </div>
    </div>
    <div v-if="Quest === 'Normal'" class="main flex footer">
      <div class="text">有限执行 : </div>
      <div class="info flex"><el-switch v-model="Taskselection" /> </div>
    </div>
    <div v-if="Quest === 'project'" class="main flex conten">
      <div class="text">执行频率 : </div>
      <div class="info flex">
        <el-radio-group v-model="frequency" class="ml-4">
          <el-radio label="1" size="large">一次</el-radio>
          <el-radio label="2" size="large">间隔</el-radio>
          <el-radio label="3" size="large">每天</el-radio>
          <el-radio label="4" size="large">每周</el-radio>
          <el-radio label="5" size="large">每月</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency === '1'" class="main flex conten">
      <div class="text">开始时间 : </div>
      <div class="info flex">
        <el-time-select
          v-model="timr"
          start="08:30"
          step="00:15"
          end="18:30"
          placeholder="请选择时间"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">一定要大于当前时间的10分钟</span>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency === '2'" class="main flex conten">
      <div class="text">间隔时间 : </div>
      <div class="info flex">
        <el-input-number
          v-model="intervaltimr"
          class="mx-4"
          style="width: 100px"
          :min="1"
          :max="10000"
          controls-position="right"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">min</span>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency === '3'" class="main flex conten">
      <div class="text">执行时间 : </div>
      <div class="info flex">
        <el-time-select
          v-model="Executiontime"
          start="00:00"
          style="width: 120px"
          step="00:30"
          end="23:59"
          placeholder="选择时间"
          format="hh:mm A"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">想要当天执行，建议执行时间大于开始时间的10分钟</span>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency === '4'" class="main flex conten">
      <div class="text">执行时间 : </div>
      <div class="info flex">
        <el-select v-model="week" class="m-2" placeholder="选择星期" style="width: 120px; margin-right: 10px">
          <el-option v-for="item in weeklist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-time-select
          v-model="Executiontime"
          start="00:00"
          style="width: 120px"
          step="00:30"
          end="23:59"
          placeholder="选择时间"
          format="hh:mm A"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">想要当天执行，建议执行时间大于开始时间的10分钟</span>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency === '5'" class="main flex conten">
      <div class="text">执行时间 : </div>
      <div class="info flex">
        <el-select v-model="month" class="m-2" placeholder="选择月份" style="width: 120px; margin-right: 10px">
          <el-option v-for="item in monthlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-time-select
          v-model="Executiontime"
          start="00:00"
          style="width: 120px"
          step="00:30"
          end="23:59"
          placeholder="选择时间"
          format="hh:mm A"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">想要当天执行，建议执行时间大于开始时间的10分钟</span>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency !== '1'" class="main flex conten">
      <div class="text">开始时间 : </div>
      <div class="info flex">
        <el-time-select
          v-model="startTime"
          :max-time="endTime"
          class="mr-4"
          placeholder="请选择时间"
          start="08:30"
          step="00:15"
          end="18:30"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">一定要大于当前时间的10分钟</span>
      </div>
    </div>
    <div v-if="Quest === 'project' && frequency !== '1'" class="main flex conten">
      <div class="text">结束时间 : </div>
      <div class="info flex">
        <el-time-select
          v-model="endTime"
          :min-time="startTime"
          placeholder="请选择结束时间"
          start="08:30"
          step="00:15"
          end="24:00"
        />&nbsp;&nbsp;&nbsp;
        <span class="timrtext">不能小于开始，不设即无限</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 任务状态
const Quest = ref('Normal')
// 计划任务分裂 1一次  2间隔   3每天 4每周  5每月
const frequency = ref('1')
// 普通任务计划执行
const Taskselection = ref(false)
// 一次间隔时间
const intervaltimr = ref()
// 间隔
const timr = ref()
const startTime = ref()
const endTime = ref()

// 每天
const Executiontime = ref()
// 每周
const week = ref()
const weeklist = [
  {
    value: 'Option1',
    label: '周一',
  },
  {
    value: 'Option2',
    label: '还是周一',
  },
  {
    value: 'Option3',
    label: '周一一',
  },
  {
    value: 'Option4',
    label: '周一',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
// 每月
const month = ref()
const monthlist = [
  {
    value: 'Option1',
    label: '一号',
  },
  {
    value: 'Option2',
    label: '二号',
  },
  {
    value: 'Option3',
    label: '五号',
  },
  {
    value: 'Option4',
    label: '十八号',
  },
  {
    value: 'Option5',
    label: '七十二号',
  },
]
</script>

<style scoped lang="less">
.main {
  color: #333;
  margin-bottom: 10px;
  .text {
    width: 80px;
  }
  .info {
    .timrtext {
      font-size: 14px;
      color: #999;
    }
    .renwu,
    .renwus {
      background-color: #fff;
      color: #333;
      border: 1px solid #dddddd;
      width: 97px;
      height: 32px;
      margin-right: 10px;
      line-height: 32px;
      text-align: center;
      border-radius: 4px 4px 4px 4px;
      &.active {
        background: #2b53e5;
        color: #fff;
      }
    }
  }
}
.footer {
  margin-bottom: 40px;
}
.conten {
  margin-bottom: 20px;
}
</style>
