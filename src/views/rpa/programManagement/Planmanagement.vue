<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const taskStatus = ref('') // 任务状态
const platform = ref('') // 平台
const selection = ref([]) // 选中的表格数据

const tableDataSource = ref([])

/**
 * 表格选中事件
 * @param val 选中的数据
 */
const handleSelectionChange = (val: any) => {
  selection.value = val
}

onMounted(() => {
  for (let i = 0; i < 10; i += 1) {
    tableDataSource.value.push({
      id: i + 1,
      taskId: '任务ID',
      taskName: `任务名称${i}`,
      platformLogo: 'https://fuck.yuanki.cn/img/amazon.png',
      platformName: '平台',
      updateTime: '2023-6-28 12:00:00',
      createTime: '2023-6-28 12:00:00',
      totalCount: '10',
      status: true,
    })
  }
})
</script>

<template>
  <div class="program-manage">
    <div class="filter">
      <div class="filter-item">
        <span class="label">任务状态：</span>
        <el-select v-model="taskStatus" placeholder="选择分组" size="large" suffix-icon="CaretBottom">
          <el-option :value="1" label="状态-1" />
          <el-option :value="2" label="状态-2" />
          <el-option :value="3" label="状态-3" />
        </el-select>
      </div>
      <div class="filter-item">
        <span class="label">平台：</span>
        <el-select v-model="platform" placeholder="选择平台" size="large" suffix-icon="CaretBottom">
          <el-option :value="1" label="平台-1" />
          <el-option :value="2" label="平台-2" />
          <el-option :value="3" label="平台-3" />
        </el-select>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="tableDataSource"
        height="100%"
        row-class-name="custom-table-row"
        row-key="id"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column fixed="left" type="selection" width="58" align="center" />
        <el-table-column label="序号">
          <template #header>
            <span style="padding-left: 50px">序号</span>
          </template>
          <template #default="{ $index }">
            <span style="padding-left: 50px">{{ $index + 1 }}</span>
            <i class="iconfont icon-fenxiang"></i>
          </template>
        </el-table-column>
        <el-table-column label="任务ID" prop="taskId" />
        <el-table-column label="任务名称" prop="taskName" />
        <el-table-column label="平台">
          <template #default="{ row }">
            <img :src="row.platformLogo" alt="" class="platform-logo" />
            <span>{{ row.platformName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" prop="updateTime" />
        <el-table-column label="任务执行时间" prop="createTime" />
        <el-table-column label="总运行次数" prop="totalCount" />
        <el-table-column fixed="right" label="操作" width="224">
          <template #default="{ row }">
            <el-switch v-model="row.status" style="--el-switch-on-color: #13ce66; margin-right: 20px" />
            <el-button link type="primary">运行</el-button>
            <el-button link type="primary">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="less">
@import '@/views/ownProxy/resetTable.less';
</style>

<style lang="less" scoped>
@import './index';
</style>
