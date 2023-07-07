<template>
  <Popup v-model:isShow="getIsShow" width="800px" :divider="true" @sbmit="sbmit" title="RPA">
    <template #main>
      <div class="titleinfo fs-base"
        ><i class="iconfont icon-a-gantanhao1"></i>
        本地设备执行，需软件启动并登录，产生的数据只存储在本地，不会跨设备同步
      </div>
      <div class="accname"><span class="text">名称 : </span><span> Amazon评论爬取</span> </div>
      <div class="accinfo flex">
        <span>选择账号 : </span>
        <el-input v-model="account" class="w-50 m-2" placeholder="请输入主机端口">
          <template #suffix>
            <i class="iconfont icon-xialajiantou3"></i>
          </template>
        </el-input>
      </div>
      <div class="accinfo flex">
        <span></span>
        <div class="accinfori">
          <div class="xuanze">
            <el-input v-model="seatch" type="text" class="fs-xs" placeholder="搜索对应分组序号">
              <template #suffix>
                <div class="btn pointer">
                  <i class="iconfont icon-sousuo fs-sm"></i>
                </div>
              </template>
            </el-input>
            <div class="conten"
              ><el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                <template #default="{ node, data }">
                  <div
                    :class="{
                      active:
                        node.data.cnegji !== '1' && newMemberlist.findIndex(item => item.id === node.data.id) != -1,
                      show: node.data.cnegji !== '1',
                    }"
                  >
                    <span v-if="node.data.cnegji === '1'">{{ node.label }}</span>
                    <div v-if="node.data.cnegji !== '1'">
                      <span>{{ node.data.cnegji }}</span
                      >&nbsp;&nbsp; <i class="iconfont icon-win"></i>&nbsp;&nbsp;
                      <span class="name">{{ node.label }}</span>
                    </div>
                  </div>
                </template>
              </el-tree>
            </div>
          </div>
          <div class="xianshi">
            <div class="top">
              <div class="le">
                已选择账号 <span class="fs-xs text">已选择{{ newMemberlist.length }}个账号</span>
              </div>
              <div class="ri fs-xs pointer" @click="newMemberlist = []">清空已选</div>
            </div>
            <div class="tag">
              <el-tag
                v-for="tag in newMemberlist"
                :key="tag"
                class="mx-1"
                closable
                :disable-transitions="false"
                type=""
                @close="deleclase(tag)"
              >
                {{ tag.name }}
              </el-tag>
            </div>
          </div>
        </div>
      </div>
      <Quest />
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed, ref, reactive } from 'vue'
import Quest from './Quest.vue'

interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
})
const emits = defineEmits(['update:isShow'])
/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})
/**
 * 提交表单
 */
const sbmit = () => {}

const seatch = ref()
interface Tree {
  label: string
  children?: Tree[]
  cnegji: string
  id: number
}
const newMemberlist = ref([])
const account = computed(() => {
  return `已选择${(newMemberlist.value && newMemberlist.value.length) || 0} 个账号`
})
/**
 * 每一项
 * @param data 点击
 */
const handleNodeClick = (data: Tree) => {
  if (data.cnegji === '1') return
  const existingItemIndex = newMemberlist.value.findIndex(newItem => newItem.id === data.id)
  if (existingItemIndex === -1) {
    newMemberlist.value.push({ id: data.id, name: data.label })
  } else {
    newMemberlist.value.splice(existingItemIndex, 1)
  }
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    cnegji: '1',
    id: 1,
    children: [
      {
        label: '二级名称',
        cnegji: '2',
        id: 2,
      },
      {
        label: '二213级名称',
        cnegji: '3',
        id: 3,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 4,
      },
    ],
  },
  {
    label: 'Level one 2',
    cnegji: '1',
    id: 5,
    children: [
      {
        label: '二级名称',
        cnegji: '2',
        id: 55,
      },
      {
        label: '二213级名称',
        cnegji: '3',
        id: 56,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 57,
      },
    ],
  },
  {
    label: 'Level one 3',
    cnegji: '1',
    id: 6,
    children: [
      {
        label: '二级名称',
        cnegji: '2',
        id: 7,
      },
      {
        label: '二213级名称',
        cnegji: '3',
        id: 8,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 9,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 10,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 11,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 12,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 13,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 14,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 15,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 16,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 17,
      },
      {
        label: '二3级名称',
        cnegji: '4',
        id: 18,
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
  cengji: 'cengji',
}

/**
 * 移除标签
 * @param tag 标签
 */
const deleclase = tag => {
  newMemberlist.value = newMemberlist.value.filter(item => item.id !== tag.id)
}
</script>

<style scoped lang="less">
.icon-win {
  color: #2b53e5;
}
:deep(.el-tree) {
  --el-tree-node-hover-bg-color: unset;
  .active {
    background: rgba(43, 83, 229, 0.05);
    width: 90%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 100%;
    border-radius: 4px;
    margin-left: -20px;
  }

  .show {
    width: 90%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 100%;
    margin-left: -20px;
  }
  .show:hover {
    background: rgba(43, 83, 229, 0.05);
  }
  .el-tree-node__children {
    padding-top: 10px;
    > .el-tree-node {
      // margin-bottom: 8px;
      padding-bottom: 8px;
      .el-tree-node__content {
        &:hover {
          background-color: unset;
        }
      }
      &.active {
        background: rgba(43, 83, 229, 0.05);
      }
    }
  }
  > .is-focusable {
    // border-collapse: collapse;
    > .el-tree-node__content {
      height: 40px;
      padding: 7px 0;
      border-top: solid 1px #eee;
      border-bottom: solid 1px #eee;
      border-collapse: collapse;

      // &:hover {
      //   background-color: unset;
      // }
    }
  }
}
.main {
  .titleinfo {
    margin-top: -10px;
    color: #2b53e5;
    margin-bottom: 25px;
  }
  .accname {
    margin-bottom: 25px;
    color: #333;
  }
  .accinfo {
    margin-bottom: 5px;
    color: #333;
    > span {
      width: 80px;
    }
    :deep(.el-input) {
      margin-left: 10px;
      width: 180px;
    }
    .accinfori {
      margin-left: 10px;
      height: 469px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 15px;
      .xuanze {
        width: 271px;
        height: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        margin-right: 10px;
        margin-left: 10px;
        padding: 12px 0 15px;
        :deep(.el-input) {
          width: 213px;
          height: 32px;
          display: flex;
          margin: 0 auto 10px;
          background: #ffffff;
          box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
          border-radius: 16px;
          .el-input__wrapper {
            border-radius: 16px;
            padding-right: unset;
          }
        }
        .btn {
          width: 48px;
          height: 32px;
          background: #2b53e5;
          border-radius: 16px;
          .icon-sousuo {
            color: #fff;
          }
        }
      }
      .conten {
        padding: 0 10px 10px;
        height: 417px;
        overflow-y: auto;
      }
      .xianshi {
        flex: 1;
        height: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        padding: 10px 15px;
        .top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          .le {
            .text {
              color: @fontcolor;
            }
          }
          .ri {
            width: 80px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            background: rgba(43, 83, 229, 0.1);
            border-radius: 4px 4px 4px 4px;
            color: @fontcolor;
          }
        }
        .tag {
          :deep(.el-tag) {
            margin: 0 10px 10px 0;
          }
        }
      }
    }
  }
}
</style>
