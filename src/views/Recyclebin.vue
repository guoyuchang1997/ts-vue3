<template>
  <div class="accountinfo">
    <div class="group">
      <div class="le flex">
        <div class="gr">
          <el-select v-model="group" class="m-2 fs-xs" placeholder="选择分组" size="large">
            <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="sea">
          <Inputsea
            v-model="search"
            :iconleft="'icon-a-23'"
            :iconright="'icon-sousuo'"
            :placeholder="'搜索或新建搜索条件'"
            :width="'410px'"
            :height="'40px'"
            @enter="enter"
          />
        </div>
        <div class="titer">
          <el-date-picker
            v-model="Time"
            prefix-icon="false"
            type="datetimerange"
            range-separator="→"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </div>
        <p class="huifu" @click="getEditInfo({ type: 3 })"><huifu-icon></huifu-icon>全部恢复</p>
        <p class="huifu" @click="getEditInfo({ type: 4 })"><i class="iconfont icon-shanchu"></i>清空回收站</p>
        <p class="tips"
          ><el-icon><WarningFilled /></el-icon>回收站中的数据保存30天后会自动清空</p
        >
      </div>
      <div class="ri"><i class="iconfont icon-shuaxin fs-xxl"></i></div>
    </div>
    <Recyle @edit="getEditInfo" />
    <recyclebinEdit v-model:is-show="editShow" :title="editTitle" :edit-info="editInfo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Inputsea from '~/Searchbox/Search.vue'
import Recyle from '~/account/Recycle.vue'
import recyclebinEdit from '~/account/recyclebinEdit.vue'
import huifuIcon from '@/assets/svg/recyclebin/huifu.svg'

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
 * 时间选择
 */
const Time = ref()

/**
 * 编辑弹窗
 */
const editTitle = ref('全部恢复')
const editShow = ref(false)

const editInfo = ref({
  id: 1,
  name: '123456',
  type: 1, // 1恢复 2删除 3全部恢复 4清空回收站
})

/**
 * 获取编辑弹窗信息
 * @param {object} info  入参
 */
const getEditInfo = info => {
  editInfo.value = info
  editTitle.value = { 1: '恢复', 2: '删除', 3: '全部恢复', 4: '清空回收站' }[info.type]
  editShow.value = true
}
</script>

<style lang="less" scoped>
.iconfontm {
  margin-right: 5px;
}
.accountinfo {
  // height: 110px;
  width: 100%;
  // padding-bottom: 10px;
  background-color: @mlcolor;

  .group {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
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
    margin-right: 10px;
  }
  .open {
    padding-left: 10px;
  }
  .conten {
    height: 38px;
    line-height: 38px;
  }
  :deep(.titer) {
    .el-date-editor {
      width: 216px;
      height: 40px;
      background: #ffffff;
      border-radius: 6px 6px 6px 6px;
      box-shadow: unset;
    }
  }
  .huifu {
    margin-left: 10px;
    width: 104px;
    height: 40px;
    background: #ffffff;
    border-radius: 6px 6px 6px 6px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    font-weight: 400;
    svg {
      margin-right: 5px;
      vertical-align: text-bottom;
      color: #333;
      width: 16px;
      height: 16px;
    }
    .iconfont {
      margin-right: 5px;
    }
  }
  .tips {
    font-size: 14px;
    color: #ff7b00;
    display: flex;
    align-items: center;
    flex: 1;
    .el-icon {
      margin-left: 10px;
      margin-right: 5px;
    }
  }
  .ri {
    .icon-shuaxin {
      display: inline-block;
      width: 40px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      background: #ffffff;
      border-radius: 8px 8px 8px 8px;
    }
  }
}
</style>
