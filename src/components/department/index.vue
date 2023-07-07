<template>
  <div class="dept-tree">
    <el-tree
      v-model="departmentId"
      :data="data"
      :render-after-expand="false"
      highlight-current
      :props="treeProps"
      :expand-on-click-node="false"
      @node-click="nodeclick"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node" :class="{ 'custom-tree-node-first': node.level == 1 }">
          <i v-if="node.level === 1" class="iconfont icon-bumen1"></i>
          <span>{{ node.label }}</span>
          <span v-if="data.users_count">（{{ data.users_count }}）</span>
          <el-icon v-if="!node.isLeaf" @click.stop="nodeOpen(node)"><CaretRight /></el-icon>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const emit = defineEmits(['change'])
const api = inject<any>('$api')
interface deptItem {
  id: number
  company_id: number
  department_name: string
  pid: number
  sort_id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  users_count: number
  isSelected?: boolean
  expanded?: boolean
  all_children: deptItem[]
}
const treeProps = ref({
  children: 'all_children',
  label: 'department_name',
  class: 'department-definition-icon',
})
/**
 * 部门id
 */
const departmentId = ref('')
/**
 * 部门列表
 */
const data = ref<deptItem[]>([])
/**
 * 获取部门树
 */
const getDepartmentTree = async () => {
  api.departList().then((res: any) => {
    // console.log('部门树---', res)
    if (res.code === 200) {
      const dataArray = res.data || [] // 使用空数组作为默认值
      data.value = dataArray
    }
  })
}
onMounted(() => {
  // 获取部门树
  getDepartmentTree()
})

/**
 * 点击树节点
 * @param {object} data - 当前节点的数据
 * @param {object} node - 当前节点的数据
 */
const nodeclick = (data: any, node: any) => {
  // console.log('点击树节点---', data, node)
  departmentId.value = data.id
  emit('change', data)
}

/**
 * 展开树节点
 * @param {object} node - 当前节点的数据
 */
const nodeOpen = (node: any) => {
  // console.log('展开树节点---', node)
  node.expanded = !node.expanded
}
</script>

<style scoped lang="less"></style>

<style lang="less">
.dept-tree {
  .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background: rgba(43, 83, 229, 0);
    color: #2d5aff;
    &:hover {
      background: rgba(43, 83, 229, 0);
      color: #2d5aff;
      .el-icon {
        color: #2b53e5;
      }
    }
  }
  .el-tree {
    --el-tree-node-hover-bg-color: rgba(43, 83, 229, 0);
  }
  .department-definition-icon {
    .el-tree-node__content {
      height: 30px;
      line-height: 30px;
      border-radius: 4px;
      margin-bottom: 5px;
      .el-tree-node__expand-icon {
        display: none;
      }
      .custom-tree-node {
        display: flex;
        align-items: center;
        // padding-left: 10px;
        .el-icon {
          margin-left: 5px;
        }
        .icon-bumen1 {
          font-size: 12px;
          margin-right: 10px;
        }
      }
      // .custom-tree-node-first {
      //   padding-left: 0;
      // }
      &:hover {
        background: rgba(43, 83, 229, 0);
        color: #2d5aff;
        .el-icon {
          color: #2b53e5;
        }
      }
      .el-icon {
        transform: rotate(0);
        transition: transform 0.3s ease-in-out;
      }
    }
    .el-tree-node__children {
      // border: 1px solid #f00;
      padding-left: 22px;
      .el-tree-node__content {
        padding-left: 10px !important;
        &:hover {
          background: rgba(43, 83, 229, 0.1) !important;
          color: #2d5aff;
          .el-icon {
            color: #2b53e5;
          }
        }
      }
    }
    &.is-expanded {
      // border: 1px solid #2b53e5;
      & > .el-tree-node__content .el-icon {
        transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
      }
    }
  }
}
</style>
