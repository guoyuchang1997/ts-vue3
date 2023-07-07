<template>
  <div class="accountinfo">
    <div class="group">
      <div class="gr">
        <el-select v-model="group" class="m-2 fs-xs" placeholder="选择分组" size="large">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="sea">
        <Inputsea v-model="search" :iconleft="'icon-a-23'" :iconright="'icon-sousuo'" :placeholder="'搜索或新建搜索条件'"
          :width="'410px'" :height="'40px'" @enter="enter" />
      </div>
      <div class="open"> <el-checkbox v-model="open" label="已打开" size="large" /></div>
      <div class="conten">（{{ conten }}）</div>
    </div>
    <div class="btn">
      <div class="left">
        <div class="title  fs-lg pointer" @click="openpop('account')">
          <i class="iconfont icon-denglu iconfontm"></i>
          <div class="text fs-xs ellipsis">批量导入</div>
        </div>
        <div v-for="(item, index) in btnlist" :key="index" class="titles  fs-lg pointer ellipsis"
          @click="openpop(item.open)">
          <i class="iconfont iconfontm" :class="item.icon"></i>
          <div class="text fs-xs ellipsis">{{ item.text }}</div>
        </div>
        <div class="dele pointer" @click="openpop('accountdeles')">
          <i class="iconfont icon-shanchu"></i>
        </div>
        <el-popover :width="160" placement="bottom-start" popper-class="action-popover" trigger="click" :popper-options="{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [10, 10],
              },
            },
          ],
        }">
          <div @click="openpop(item.open)" id="opts" class="opts pointer" v-for="(item, index) in setupxin" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <span class="text">{{ item.text }}</span>
          </div>

          <template #reference>
            <div class="dele pointer"><i class="iconfont icon-vg pointer"></i></div>
          </template>
        </el-popover>
      </div>
      <div class="right">
        <div class="dele pointer" @click="openpop('Edittagpop')"> <i class="iconfont icon-a-biaoqian1"></i> </div>
        <div class="dele pointer" @click="openpop('Refresh')"> <i class="iconfont icon-detection"></i> </div>
        <el-popover :width="160" placement="bottom-start" popper-class="action-popover" trigger="click" :popper-options="{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [10, 10],
              },
            },
          ],
        }">
          <div id="opts" class="opts pointer" v-for="(item, index) in sorts" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <span class="text">{{ item.text }}</span>
          </div>

          <template #reference>
            <div class="dele pointer"><i class="iconfont icon-paixu pointer"></i></div>
          </template>
        </el-popover>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Inputsea from '~/Searchbox/Search.vue'
// 分组选择
const group = ref()

const grouplist = ref([
  {
    value: '属性',
    label: '数值',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])
/**
 * 搜索
 */
const search = ref()
/**
 * 子组件传递搜索
 */
const enter = () => {
  // 子组件传递搜索
  console.log('回车搜索')
}
/**
 * 打开数量
 */
const open = ref()
/**
 * 打开数量
 */
const conten = ref(10)
/**
 * 二级列表按钮
 */
const btnlist = ref([
  {
    icon: 'icon-a-34341',
    text: '打开',
    open: 'zw',
  },
  {
    icon: 'icon-a-9081',
    text: '关闭',
    open: 'close',
  },
  {
    icon: 'icon-rpa1',
    text: 'RPA',
    open: 'RPA',
  },
  {
    icon: 'icon-a-tongbu1',
    text: '窗口同步',
    open: 'chuangkou',
  },
  {
    icon: 'icon-a-135',
    text: '分组',
    open: 'group',
  },
  {
    icon: 'icon-fenxiang',
    text: '分享',
    open: 'Transfer',
  },
  {
    icon: 'icon-zhuanyi',
    text: '转移',
    open: 'Transfer',
  },
  {
    icon: 'icon-daili2',
    text: '修改代理',
    open: 'editagency'
  },
  {
    icon: 'icon-bianji',
    text: '编辑备注',
    open: 'remark',
  },
])
/**
 *  排序列表
 */
const sorts = ref([
  {
    icon: 'icon-denglu',
    text: '序号正序',
  },
  {
    icon: 'icon-xuhao2',
    text: '序号倒序',
  },
  {
    icon: 'icon-chuangjian1',
    text: '创建时间正序',
  },
  {
    icon: 'icon-chuangian2',
    text: '创建时间倒序',
  },
  {
    icon: 'icon-dakai1',
    text: '打开时间正序',
  },
  {
    icon: 'icon-dakai2',
    text: '打开时间倒序',
  },
  {
    icon: 'icon-huanjing1',
    text: '环境名称正序',
  },
  {
    icon: 'icon-huanjing2',
    text: '环境名称倒序',
  },
])
/**
 * 左侧列表
 */
const setupxin = ref([
  {
    icon: 'icon-shoucang',
    text: '设置星标',
    open: 'Startarget',
  },
  {
    icon: 'icon-qingqiu',
    text: '授权',
    open: 'successor',
  },
  {
    icon: 'icon-a-biaoqian11',
    text: '设置标签',
    open: 'opentag',
  },
  {
    icon: 'icon-a-guanli1',
    text: '复制序号',
    open: 'copy',
  },
  {
    icon: 'icon-daochu',
    text: '导出',
    open: 'derive',
  },
])
const emit = defineEmits(['openoff'])
/**
 * 弹窗
 * @param data 打开弹窗
 */
const openpop = data => {
  emit('openoff', data)

}
</script>

<style lang="less" scoped>
.iconfont {
  font-weight: 500;
}

.iconfontm {
  margin-right: 5px;
}

.opts:hover {
  color: @fontactive;
}

.opts {
  padding: 13px 10px 0;

  >i {
    padding-right: 5px;
  }
}

.opts:nth-child(1) {
  padding-top: unset;
  padding-top: 7px;
}

.opts:last-child {
  padding-top: unset;
  padding-bottom: 7px;
}

.accountinfo {
  // height: 110px;
  width: 100%;
  // padding-bottom: 10px;
  background-color: @mlcolor;

  .btn {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;

    .left,
    .right {
      display: flex;
      // flex-wrap: wrap;
    }

    .title {
      width: 88px;
      height: 40px;
      padding: 0 8px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: @fontactive;
      color: @tcolor;
      border-radius: 8px 8px 8px 8px;
    }

    .titles {
      width: 88px;
      padding: 0 8px;
      height: 40px;
      background: @tcolor;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px 8px 8px 8px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .dele {
      width: 40px;
      padding: 0 10px;
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: center;
      background: @tcolor;
      border-radius: 8px 8px 8px 8px;
      margin-right: 10px;
    }

    .titles:hover,
    .dele:hover {
      color: @fontactive;
    }

    .right {
      width: 150px;
      height: 40px;
    }
  }

  .group {
    display: flex;

    :deep(.gr) {
      .el-input__wrapper {
        width: 132px;
        height: 40px;
        background: #ffffff;
        border-radius: 8px 8px 8px 8px;
        box-shadow: unset;
      }

      .el-input__wrapper input::-webkit-input-placeholder {
        color: @fontcolorbtn;
        font-size: @font-size-xs;
      }
    }
  }

  .sea {
    margin-left: 10px;
  }

  .open {
    padding-left: 10px;

    :deep(.el-checkbox__label) {
      color: #333;
    }
  }

  .conten {
    height: 38px;
    line-height: 38px;
  }
}
</style>
