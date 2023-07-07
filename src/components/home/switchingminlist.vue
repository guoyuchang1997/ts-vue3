<template>
  <div class="minlist">
    <!-- <el-button class="fs-lg zoom" @click="newaccount"><i class="iconfont icon-yuanquanjiahao"></i></el-button> -->
    <div @click="newaccount" class="zoom">
      <img src="@/assets/img/account/tianjia.webp" alt="">
    </div>
    <div class="down" ref="Downs">
      <Shrink :titlelist="Comtitlelist" :headline="CommonlyTitle" :isshwo="Commonly" @openoff="Commonlyoff" />
      <Shrink :titlelist="Agency" :headline="agencyTitle" :isshwo="agencysw" @openoff="agencyoff" />
      <Shrink :titlelist="Applicationlist" :headline="applicationTitle" @openoff="applicationoff" :isshwo="application" />
      <Shrink :titlelist="automationlist" :headline="automationTitle" @openoff="automationoff" :isshwo="automation" />
      <Shrink :titlelist="Teamlist" :headline="teamTitle" @openoff="teamoff" :isshwo="team" />
      <Shrink :titlelist="Management" :headline="safetyTitle" @openoff="safetyff" :isshwo="safety" />
    </div>
    <div class="fotter pointer">
      <i class="iconfont icon-a-135 fs-sm"></i>
      <div class="fs-xs">更多</div>
    </div>
    <div class="position">
      <div class="main">
        <div class="conten pointer" @click="drawershow">
          <i class="iconfont icon-xiaoxi fs-lg"></i>
          <div class="image fs-xs">消息</div>
          <span class="xiaoxi" v-if="message"></span>
        </div>
        <div class="conten pointer height" @click="gohelp">
          <i class="iconfont icon-bangzhu2 fs-lg"></i>
          <div class="image fs-xs">帮助</div>
        </div>
        <div class="conten pointer">
          <i class="iconfont icon-shezhi fs-lg"></i>
          <div class="image fs-xs">设置</div>
        </div>
      </div>
    </div>
    <div class="ishow" @click="emit('changelistwidht')">
      <img src="@/assets/img/account/zhankaiss.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Shrink from '~/home/shrink.vue'
import useStore from '@/store/index.js'
import { inject } from 'vue'
import {
  Icon,
  management,
  commonmin_management,
  teamlist,
  titlelist,
  commonmin_teamlist,
  commonmin_Commonly,
  commonmin_application,
  applicationlist,
  automationlist,
  agency,
  commonmin_agency,
} from '~/home/title'
const emit = defineEmits<{
  (e: 'changelistwidht'): void
}>()
/**
 * 消息
 */
const message = ref<Boolean>(true)
const newaccount = inject('newaccount')
const drawershow = inject('drawershow')
const gohelp = inject('gohelp')
/**
 * 元素高度
 */
interface Height {
  /**
   * 高度
   */
  clientHeight: number
}
interface bodyHeight {
  /**
   * 高度
   */
  height: number
  /**
   * body高度
   */
  bodyheight: number
}
const Downs = ref<Height>()
const listheight = ref<bodyHeight>({
  height: 0,
  bodyheight: 0,
})
const { useLeftList } = useStore()
/**
 * 折行
 * @param item 回调
 * @param callback 是否多次调
 */
const calculation = (item?: string, callback = false) => {
  setTimeout(() => {
    if (Downs.value) {
      listheight.value.height = Downs.value.clientHeight
      listheight.value.bodyheight = document.body.clientHeight - 300
      if (listheight.value.bodyheight < listheight.value.height) {
        if (!Commonly.value && item !== 'Commonly' && !titlelist.some(item => item.mate === useLeftList.name)) {
          Commonly.value = true
          callback ? calculation('Commonly', true) : ''
        } else if (!agencysw.value && item !== 'agency' && !agency.some(item => item.mate === useLeftList.name)) {
          agencysw.value = true
          callback ? calculation('agency', true) : ''
        } else if (
          !application.value &&
          item !== 'application' &&
          !applicationlist.some(item => item.mate === useLeftList.name)
        ) {
          application.value = true
          callback ? calculation('application', true) : ''
        } else if (
          !automation.value &&
          item !== 'automation' &&
          !automationlist.some(item => item.mate === useLeftList.name)
        ) {
          automation.value = true
          callback ? calculation('automation', true) : ''
        } else if (!team.value && item !== 'team' && !teamlist.some(item => item.mate === useLeftList.name)) {
          team.value = true
          callback ? calculation('team', true) : ''
        } else if (!safety.value && item !== 'safety') {
          safety.value = true
          callback ? calculation('safety', true) : ''
        }
      }
    }
  }, 320) //元素过渡有时间
}
onMounted(() => {
  calculation(undefined, true)
})
/**
 * 下拉列表
 */
const Commonly = ref<boolean>(true)
const Commonlyoff = () => {
  Commonly.value = !Commonly.value
  calculation('Commonly')
}
const Comtitlelist = titlelist.map((v, index) => {
  v.text = commonmin_Commonly[index]
  return v
})
const CommonlyTitle = ref<Icon>({
  headline: 'icon-CHANGYONG1',
  title: '常用',
})
/**
 * 应用
 */
const application = ref<boolean>(true)
const applicationoff = () => {
  application.value = !application.value
  calculation('application')
}
const applicationTitle = ref<Icon>({
  headline: 'icon-yingyong',
  title: '应用',
})
const Applicationlist = applicationlist.map((v, index) => {
  v.text = commonmin_application[index]
  return v
})
/**
 * 自动化
 */
const automation = ref<boolean>(true)
const automationoff = () => {
  automation.value = !automation.value
  calculation('automation')
}
const automationTitle = ref<Icon>({
  headline: 'icon-zidonghua',
  title: '自动',
})
/**
 * 团队列表
 */
const team = ref<boolean>(true)
const teamoff = () => {
  team.value = !team.value
  calculation('team')
}
const teamTitle = ref<Icon>({
  headline: 'icon-a-qunzu6',
  title: '团队',
})
const Teamlist = teamlist.map((v, index) => {
  v.text = commonmin_teamlist[index]
  return v
})
/**
 * 安全
 */
const safety = ref<boolean>(true)
const safetyff = () => {
  safety.value = !safety.value
  calculation('safety')
}
const safetyTitle = ref<Icon>({
  headline: 'icon-anquan',
  title: '安全',
})
const Management = management.map((v, index) => {
  v.text = commonmin_management[index]
  return v
})
/**
 * 代理
 */
const agencysw = ref<boolean>(true)
const agencyoff = () => {
  agencysw.value = !agencysw.value
  calculation('agency')
}
const agencyTitle = ref<Icon>({
  headline: 'icon-daili3',
  title: '代理',
})
const Agency = agency.map((v, index) => {
  v.text = commonmin_agency[index]
  return v
})
</script>

<style scoped lang="less">
.icon-yuanquanjiahao {
  font-size: 26px;
}

.fotter {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  background: @fontcolor;
  color: @tcolor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 8px 8px;
}

.position {
  bottom: 10px;
  left: 60px;
  padding-left: 15px;
  display: none;
  position: fixed;
  z-index: 150000;

  .main {
    width: 66px;
    height: 109px;
    background: @tcolor;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px 10px 10px 10px;
    padding-top: 12px;
    padding-left: 10px;
  }

  .conten {
    align-items: center;
    display: flex;

    &.height {
      margin: 10px 0;
    }

    >i {
      padding-right: 5px;
    }

    .xiaoxi {
      top: 12px;
      position: absolute;
      right: 41px;
      width: 5px;
      height: 5px;
      background-color: red;
      border-radius: 50% 50%;
    }
  }

  .conten:hover {
    color: @fontcolor;
  }
}

.position:hover {
  display: block;
}

.fotter:hover+.position {
  display: block;
}

.toggle {
  text-align: end;
  padding-right: 12px;
}

.zoom {
  cursor: pointer;
  width: 44px;
  height: 44px;
  margin: 13px auto 18px;
  // &.el-button {
  //   margin: 18px 20px 12px 10px;
  //   width: 44px;
  //   height: 44px;
  //   line-height: 44px;
  //   text-align: center;
  //   background: linear-gradient(98deg, #3b45fc 24%, rgba(11, 23, 252, 0.7) 69%, rgba(155, 78, 255, 0.95) 100%);
  //   border-radius: 12px 12px 12px 12px;
  // }
  // i {
  //   color: @tcolor;
  // }
}

.minlist {
  width: 100%;
}

.ishow {
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;

  >img {
    width: 8px;
    height: 45px;
  }
}
</style>
