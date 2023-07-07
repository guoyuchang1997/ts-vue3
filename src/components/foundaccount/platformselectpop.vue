<template>
  <Popup v-model:isShow="getIsShow" width="800px" verify="确定" @sbmit="sbmit" title="选择你要绑定的设备">
    <template #main>
      <div class="main" v-loading="loading">
        <el-tabs v-model="activeName" @tab-change="handleClick" class="demo-tabs">
          <el-tab-pane class="fs-lg" label="全部账号" name="first">
          </el-tab-pane>
          <el-tab-pane v-for="item in platformlist" :key="item.id" class="fs-lg" :label="item.platform_name"
            :name="item.id">
          </el-tab-pane>
          <el-tab-pane label="自定义平台" name="zidingyi">
          </el-tab-pane>
        </el-tabs>
        <div v-if="activeName !== 'zidingyi'" class="conten flex">
          <div class="biaoti">
            <div class="ti fs-base">选择平台 : </div>
            <div class="le">
              <div v-for="(item, index) in   newplatformlist[0].all_children " :key="item.id"
                @click="changepingtai(index, item.id)" class="item flex pointer" :class="{ active: tolist === index }">
                <!-- <i class="iconfont icon-a-cy1 "></i> -->
                <img class="images" :src="item.platform_icon" alt="">
                <span class="fs-xs">{{ item.platform_name }}</span>
              </div>
            </div>
          </div>
          <div class="ri">
            <div class="ti fs-base">选择站点: </div>
            <div class="contenmain">
              <div v-for=" (i, index)  in  threeplatformlist.all_children " :key="i" class="item flex pointer"
                :class="{ active: threelist === index }" @click="threeindexshow(index, i.id)">
                <span class="fs-xs">{{ i.platform_name }}&nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="conten">
          <div class="ti fs-base">默认页面 :
            <div class="url ">
              <div v-for="(item, index)  in  getplaturl " :key="item.id" class="urlselect flex pointer"
                :class="{ active: handlezidingyi === index }" @click="handlezidingyichange(index, item.id)">
                <div class="left flex">
                  <div class="image flex">
                    <img v-if="handlezidingyi === index" src="@/assets/img/account/xuanzhong.webp" alt="">
                  </div>
                  {{ item.website }}
                </div>
                <i class="iconfont icon-close2" @click.stop="deleurl(item.id)"></i>
              </div>
            </div>
            <div class="sbmit flex">
              <el-input @keyup.enter.native="addCustom" style="width: 590px;height: 40px;" v-model="seatch"
                placeholder="请输入内容"></el-input>
              <div class="sbmitbtn pointer fs-lg" @click="addCustom">
                添加
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { regUrl } from '@/hooks/regular'
import { ElMessage } from 'element-plus'

const api = inject<any>('$api')
interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
  /**
   * 平台列表
   */
  platformlist: any[]
  /**
   * 自定义平台列表
   */
  getplaturl: any[]
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
  platformlist: () => [],
  getplaturl: () => []
})
const loading = ref(false)
const emits = defineEmits(['update:isShow', 'changezidingyiurl'])
/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})

const showSuccessMessage = (message: string, type: 'success' | 'error' | 'warning') => {
  ElMessage({
    type,
    message: message,
  });
};
// 选择的id
const platformid = ref()

// 全部账号列表 
let newplatformlist = ref<any[]>([])
const tolist = ref(0)
const threelist = ref(0)
const activeName = ref('first')
// 选择站点
const threeindexshow = (index: number, id: number) => {
  threelist.value = index
  platformid.value = id
}
const threeplatformlist = ref([])
// 选择平台
const changepingtai = (index: number, id: number) => {
  tolist.value = index
  threelist.value = 0
  threeplatformlist.value = newplatformlist.value[0].all_children.find(v => {
    if (v.id === id) return v.all_children
  })
  platformid.value = id
}


// 切换tab
const handleClick = (tab: TabsPaneContext, event: Event) => {
  newplatformlist.value = []
  tolist.value = 0
  threelist.value = 0
  if (activeName.value === 'first') {
    handleplatformlist()
    return
  }
  if (activeName.value === 'zidingyi') {
    return
  }
  const newlist = props.platformlist.find(v => {
    if (v.id == activeName.value) return v
  })
  newplatformlist.value.push({
    ...newlist
  })
  changepingtai(0, newplatformlist.value[0].all_children[0].id)
  return

}
const seatch = ref()

// 全部账号调用
const handleplatformlist = () => {
  newplatformlist.value.push(
    {
      id: 10086,
      platform_name: '全部账号',
      all_children: []
    }
  )
  props.platformlist.forEach(data => {
    newplatformlist.value[0].all_children.push(...data.all_children)
  })
  changepingtai(0, newplatformlist.value[0].all_children[0].id)
}
// 自定义平台
const handlezidingyi = ref()
const handlezidingyiid = ref()
const handlezidingyichange = (index: number, id: number) => {
  handlezidingyi.value = index
  handlezidingyiid.value = id
}
const deleurl = (id: number) => {
  loading.value = true
  api.deleplaturl({ id }).then(data => {
    if (data.code === 200) {
      showSuccessMessage('删除成功', 'warning')
      emits('changezidingyiurl')
    } else {
      showSuccessMessage(data.message, 'error')
    }
  }).catch(error => {
    showSuccessMessage('服务器错误', 'error')
  }).finally(() => {
    loading.value = false
  });
}
onMounted(() => {
  handleplatformlist()
})


/**
 * 提交表单
 */
const sbmit = () => {
  if (activeName.value !== 'zidingyi') {
    console.log('选择的平台', platformid.value);
  } else {
    if (!handlezidingyiid.value) return showSuccessMessage('选择的自定义平台', 'warning')
    console.log('选择的自定义平台id', handlezidingyiid.value);
  }
}
/**
 * 提交自定义url
 */
const addCustom = async () => {
  if (!seatch.value) return showSuccessMessage('请输入网址', 'warning')
  if (!regUrl.test(seatch.value)) return showSuccessMessage('请输入正确的网址', 'warning')
  loading.value = true
  try {
    const res = await api.addplaturl({ website: seatch.value })
    if (res.code === 200) {
      showSuccessMessage('添加成功', 'success')
      emits('changezidingyiurl')
      seatch.value = ''
    } else {
      showSuccessMessage(res.message, 'error')
    }
  } catch (error) {
    showSuccessMessage('服务器错误', 'error')
  } finally {
    loading.value = false
  }


}
</script>

<style scoped lang="less">
.main {
  width: 740px;
  height: 515px;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
  border-radius: 8px 8px 8px 8px;
  margin-top: 20px;
  padding: 10px 15px;

  :deep(.el-tabs__item) {
    padding: 0 24px;
  }

  .ti {
    color: #333;
    margin-bottom: 10px;
  }

  .item {
    width: 98%;
    height: 28px;

    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    background: transparent;
    border: 1px solid transparent;
    padding-left: 10px;

    .images {
      width: 14px;
      margin-right: 5px;
    }

    &:hover {
      background: rgba(43, 83, 229, 0.05);
      border: 1px solid #2B53E5;
    }

    &.active {
      background: rgba(43, 83, 229, 0.05);
      border: 1px solid #2B53E5;
    }
  }

  .le {
    width: 210px;
    height: 392px;
    background: #FFFFFF;
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #CCCCCC;
    overflow-y: auto;
    padding: 5px;


  }

  .ri {
    flex: 1;
  }

  .contenmain {
    width: 98%;
    height: 392px;
    margin-right: 30px;
    background: #FFFFFF;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    border: 1px solid #CCCCCC;
    margin-left: 10px;
    overflow-y: auto;
    padding: 5px;
  }

  .conten {
    .url {

      width: 680px;
      height: 350px;
      margin: 5px auto 0;
      background: #FFFFFF;
      border-radius: 4px 4px 4px 4px;
      opacity: 1;
      border: 1px solid #CCCCCC;
      overflow-y: auto;
      padding: 5px;

      .urlselect {
        width: 99%;
        height: 36px;
        line-height: 36px;
        border-radius: 4px 4px 4px 4px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;

        .image {
          width: 12px;
          margin-right: 5px;

          >img {
            width: 100%;
          }
        }

        &:hover {
          background: rgba(43, 83, 229, 0.05);
          color: #2B53E5;
        }

        &.active {
          background: rgba(43, 83, 229, 0.05);
          color: #2B53E5;
        }
      }
    }

    .sbmit {
      margin-top: 10px;
      margin-left: 15px;
    }

    .sbmitbtn {
      width: 80px;
      height: 40px;
      background: #2B53E5;
      text-align: center;
      line-height: 40px;
      color: #fff;
      box-shadow: 0px 0px 20px 0px rgba(43, 83, 229, 0.2);
      border-radius: 8px 8px 8px 8px;
      margin-left: 10px;
    }
  }
}
</style>
