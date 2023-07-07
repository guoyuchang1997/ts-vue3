<template>
  <div class="members">
    <!--page 角色名称-->
    <p class="role-slug"
      >当前角色：<span>{{ roleSlug }}</span></p
    >
    <!--page 选择成员-->
    <div class="region">
      <p class="tips">请选择需要配置的成员</p>
      <div class="search">
        <el-tree-select
          v-model="departmentId"
          :data="data"
          :render-after-expand="false"
          :props="{ class: 'role-definition-icon' }"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <el-icon v-if="data.children"><CaretRight /></el-icon>
            </span>
          </template>
        </el-tree-select>
        <div class="input-icon">
          <el-input v-model="userName" placeholder="搜索用户/姓名" />
          <span class="icon">
            <img src="@/assets/img/role/sousuo.png" alt="" srcset="" />
          </span>
        </div>
      </div>
      <!--page 成员列表-->
      <div class="dialog-table">
        <el-table :data="tableData" style="width: 100%" max-height="420" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="name" label="用户名" />
          <el-table-column prop="state" label="姓名" />
          <el-table-column prop="city" label="部门" />
          <el-table-column prop="address" label="已配置角色" />
        </el-table>
      </div>
    </div>
    <!--page:footer 底部-->
    <div class="footer">
      <p
        >已选<span class="blue">{{ multipleSelection.length }}</span
        >名成员</p
      >
      <div class="post-btn-box">
        <el-button class="cancel" @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleCancel">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// interface ListItem {
//   id: number
//   right_name: string
// }
const propos = defineProps({
  /**
   * 选中成员
   */
  user: {
    type: String,
    default: '185,187,206,223,242,479,487,601,614,615,791',
  },

  /**
   * 角色名称
   */
  roleSlug: {
    type: String,
    default: '技术主管',
  },
  /**
   * 角色id
   */
  roleId: {
    type: Number,
    default: 0,
  },
  /**
   * 显示的数值
   */
  // value: {
  //   type: Array,
  //   default: () => [] as number[],
  // },
  // list: {
  //   type: Array as () => ListItem[],
  //   default: () => [] as ListItem[],
  // },
})
/**
 * 用户名
 */
const userName = ref('')
/**
 * 部门id
 */
const departmentId = ref('')
/**
 * 部门列表
 */
const data = [
  {
    value: '1',
    label: '运营部',
    children: [
      {
        value: '1-1',
        label: '运营一部',
        children: [
          {
            value: '1-1-1',
            label: '运营一部一组',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '技术部',
  },
]
/**
 * 表格数据
 */
interface User {
  city: string
  name: string
  state: string
  address: string
}

const tableData: User[] = [
  {
    name: 'yangyiming',
    state: '杨伊鸣',
    city: '亚马逊',
    address: '经理',
  },
  {
    name: 'yangyiming',
    state: '杨伊鸣',
    city: '亚马逊',
    address: '主管',
  },
]
/**
 * 选中数据
 */
const multipleSelection = ref<User[]>([])

/**
 * 选中数据
 * @param {array} val 选中数据
 */
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}
/**
 * 取消
 */
const handleCancel = () => {
  console.log('取消')
}
</script>

<style lang="less" scoped>
@import './dialogTable.less';
.members {
  padding: 0 10px;
  .role-slug {
    color: #333;
    font-size: 14px;
    line-height: 20px;
    margin-top: 33px;
    margin-bottom: 23px;
    span {
      color: #666;
    }
  }
  .region {
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 8px;
    padding: 20px;
    .tips {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    //搜索
    .search {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-select {
        width: 200px;
      }
      .input-icon {
        display: flex;
        box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
        border-radius: 16px;
        width: 220px;
        overflow: hidden;
        .icon {
          background: #2b53e5;
          border-radius: 16px;
          width: 48px;
          text-align: center;
          line-height: 32px;
          cursor: pointer;
          img {
            width: 16px;
            vertical-align: text-top;
          }
        }
        .el-input {
          flex: 1;
          :deep(.el-input__wrapper) {
            border: none;
            box-shadow: none;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
    // padding: 0 10px;
    .blue {
      color: #2b53e5;
    }
    .post-btn-box {
      display: flex;
      .el-button {
        width: 80px;
        height: 40px;
        &.cancel {
          border: 1px solid #333333;
          color: #333;
        }
      }
    }
  }
}
</style>

<style lang="less">
//树
.el-tree > .role-definition-icon {
  padding: 0 10px;
}
.role-definition-icon {
  .el-tree-node__content {
    height: 32px;
    line-height: 32px;
    .el-tree-node__expand-icon {
      display: none;
    }
    .custom-tree-node {
      display: flex;
      align-items: center;
      padding-left: 10px;
      .el-icon {
        margin-left: 5px;
      }
    }
    &:hover {
      background: rgba(43, 83, 229, 0.05);
      .el-icon {
        color: #2b53e5;
      }
    }
    .el-icon {
      transform: rotate(0);
      transition: transform 0.3s ease-in-out;
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
</style>
