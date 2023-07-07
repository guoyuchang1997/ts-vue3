<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const taskStatus = ref() // 任务状态
const keyword = ref('') // 搜索关键字
const visible = ref(false) // 详情弹窗
const dialogTitle = ref('1执行Twitter推文点赞，转发日志') // 详情弹窗标题

const tableDataSource = ref([])

/**
 * 查看详情
 * @param row 行数据
 */
const showDetail = (row: any) => {
  console.log(row)
  visible.value = true
}

onMounted(() => {
  for (let i = 0; i < 10; i += 1) {
    tableDataSource.value.push({
      id: i + 1,
      runId: '运行ID' + i,
      taskName: '任务名称' + i,
      updateTime: '2023-6-28 12:00:00',
      runStatus: 1,
      result: 1,
    })
  }
})
</script>

<template>
  <div class="task-log">
    <div class="filter">
      <div class="filter-item">
        <span class="label">任务状态：</span>
        <el-select v-model="taskStatus" placeholder="选择分组" size="large" suffix-icon="CaretBottom">
          <el-option :value="1" label="状态-1"/>
          <el-option :value="2" label="状态-2"/>
          <el-option :value="3" label="状态-3"/>
        </el-select>
      </div>
      <div class="filter-item">
        <div class="search-box">
          <i class="iconfont icon-sousuo"></i>
          <el-input v-model="keyword" placeholder="搜索或新建搜索条件" size="large"/>
          <i class="iconfont icon-a-23"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="tableDataSource"
        row-class-name="custom-table-row"
        row-key="id"
        style="width: 100%;"
        height="100%"
      >
        <el-table-column label="运行ID" prop="runId"/>
        <el-table-column label="任务名称" prop="taskName"/>
        <el-table-column label="更新时间" prop="updateTime"/>
        <el-table-column label="运行状态">
          <template #default="{ row }">
            <span v-if="row.runStatus === 1" style="color: #999;">已结束</span>
            <span v-if="row.runStatus === 2" style="color: #00B546;">运行中</span>
            <span v-if="row.runStatus === 3" style="color: #F1840D;">待运行</span>
          </template>
        </el-table-column>
        <el-table-column label="运行结果">
          <template #default="{ row }">
            <span v-if="row.runStatus === 1" style="color: #00B546;">已完成</span>
            <span v-if="row.runStatus === 2" style="color: #FF0000;">未完成</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button link type="primary" @click="showDetail(row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      v-model="visible"
      :show-close="false"
      :title="null"
      class="task-log-detail"
      width="800"
    >
      <template #header>
        <div class="header">
          <h1>{{ dialogTitle }}</h1>
          <i class="iconfont icon-close2"></i>
        </div>
      </template>
      <template #default>
        <div class="content">
          <ul>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">开始执行任务</div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">启动浏览器</div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">创建新TAB</div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">
                访问URL<span class="primary">https://www.baidu.com/</span>，超时等待<span class="primary">3000</span>秒
                <p>
                  <i class="iconfont icon-a-gantanhao1"></i>
                  <span class="error">-Error：net::ERR_TOO_MANY_RETRIES at https://twitter.com/home</span>
                </p>
              </div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">等待<span class="primary">5521-65141</span>毫秒</div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">滚动距离<span class="primary">8514</span>像素，类型：<span class="primary">平滑</span></div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">位置<span class="primary">顶部</span>，类型：<span class="primary">平滑</span></div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">
                For循环元素：<span class="primary">articleldata-testid=tweet</span>，
                提取类型：<span class="primary">对象</span>
                ，循环对象保存至：tweet，循环位置保存至：<span class="primary">forelements index</span>
              </div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">关闭浏览器</div>
            </li>
            <li>
              <span class="date">【2023-06-13 11:25:35】</span>
              <div class="value">任务完成</div>
            </li>
          </ul>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" @click="visible=false">我知道了</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less">
@import "@/views/ownProxy/resetTable.less";
</style>
<style lang="less" scoped>
@import "./index.less";
</style>
