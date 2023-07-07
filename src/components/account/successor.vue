<template>
  <Popup v-model:isShow="getIsShow" title="选择交接人" width="800px" verify="确定" @sbmit="sbmit">
    <template #main>
      <div class="main">
        <div class="le">
          <div class="top">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="所有成员" name="first"
                ><Successor v-model:all="allValue" @change="changeMemberlist">
                  <template #main>
                    <div
                      v-for="item in Memberlist"
                      :key="item.id"
                      class="talist pointer"
                      :class="{ active: newMemberlist.findIndex(newItem => newItem.id === item.id) !== -1 }"
                      @click="addMemberlist(item)"
                      >{{ item.name }}</div
                    >
                  </template>
                </Successor>
              </el-tab-pane>
              <el-tab-pane label="部门" name="second"
                ><Successor> <template #main> 2</template> </Successor></el-tab-pane
              >
              <el-tab-pane label="角色" name="third"
                ><Successor> <template #main>3 </template> </Successor></el-tab-pane
              >
            </el-tabs></div
          >
        </div>
        <div class="ri">
          <div class="top">
            <div class="l">已选择成员</div>
            <div class="r pointer" @click="newMemberlist = []">清空已选</div>
          </div>
          <div class="conten">
            <el-tag
              v-for="tag in newMemberlist"
              :key="tag.id"
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
    </template>
  </Popup>
</template>

<script setup lang="ts" name="successor">
import Popup from '~/Popuplayer/index.vue'
import type { TabsPaneContext } from 'element-plus'
import { computed, ref } from 'vue'
import Successor from '~/account/successorsof.vue'

const activeName = ref('first')

/**
 * 点击回调
 * @param tab 代理
 * @param event e
 */
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
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
// 是否全选
const allValue = ref(false)

/**
 * 提交表单
 */
const sbmit = () => {}
const Memberlist = ref([
  { name: '鸡哥哥一号', id: 1 },
  { name: '鸡哥哥二号', id: 2 },
  { name: '鸡哥哥三号', id: 3 },
  { name: '鸡哥哥四号', id: 4 },
  { name: '鸡哥哥五号', id: 5 },
  { name: '鸡哥哥六号', id: 6 },
  { name: '鸡哥哥七号', id: 7 },
  { name: '鸡哥哥八号', id: 8 },
  { name: '鸡哥哥九号', id: 9 },
  { name: '鸡', id: 10 },
  { name: '鸡哥', id: 11 },
  { name: '鸡哥', id: 12 },
  { name: '鸡哥哥一', id: 13 },
  { name: '鸡', id: 14 },
  { name: '鸡哥哥一号', id: 15 },
  { name: '鸡哥哥一号', id: 17 },
  { name: '鸡哥哥一号', id: 18 },
  { name: '鸡哥哥一号', id: 19 },
  { name: '鸡哥哥一号', id: 20 },
  { name: '鸡哥哥一号', id: 21 },
  { name: '鸡哥哥一号', id: 22 },
  { name: '鸡哥哥一号', id: 23 },
  { name: '鸡哥哥一号', id: 24 },
])
const newMemberlist = ref([])
/**
 * 点击
 * @param item 每一项
 */
const addMemberlist = (item: any) => {
  const existingItemIndex = newMemberlist.value.findIndex(newItem => newItem.id === item.id)

  if (existingItemIndex === -1) {
    newMemberlist.value.push(item)
  } else {
    newMemberlist.value.splice(existingItemIndex, 1)
  }
}
/**
 * 移除标签
 * @param tag 标签
 */
const deleclase = tag => {
  newMemberlist.value = newMemberlist.value.filter(item => item.id !== tag.id)
}
/**
 * 选择状态
 */
const changeMemberlist = () => {
  newMemberlist.value = allValue.value ? Memberlist.value : []
}
</script>

<style scoped lang="less">
.main {
  margin-top: 20px;
  display: flex;
  margin-bottom: 40px;
  height: 424px;
  .le {
    width: 320px;

    background: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 8px;
    margin-right: 10px;
    .top {
      padding: 20px;
      padding-top: 10px;
    }
  }
  .ri {
    flex: 1;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 8px;
    padding: 14px 20px 20px;
    .top {
      display: flex;
      justify-content: space-between;
      .r {
        width: 80px;
        height: 28px;
        background: rgba(43, 83, 229, 0.1);
        border-radius: 8px 8px 8px 8px;
        line-height: 28px;
        text-align: center;
        color: #2b53e5;
        font-size: 14px;
      }
    }
    .conten {
      width: 370px;
      height: 354px;
      margin-top: 8px;
      border-radius: 8px 8px 8px 8px;
      opacity: 1;
      border: 1px solid #cccccc;
      padding: 20px;
      :deep(.is-closable) {
        margin: 0 10px 10px 0;
      }
    }
  }
}
.talist {
  margin-top: 10px;
  &.active {
    color: #2b53e5;
  }
}
</style>
