<template>
  <div class="maxlist">
    <el-button class="fs-lg unfold" @click="newaccount"
      ><i class="iconfont icon-yuanquanjiahao fs-xl"></i> 新建浏览器</el-button
    >
    <div class="Down" ref="Downs">
      <Down :titlelist="Comtitlelist" :headline="CommonlyTitle" :isshwo="Commonly" @openoff="Commonlyoff" />
      <Down :titlelist="Agency" :headline="agencyTitle" :isshwo="agencysw" @openoff="agencyoff" />
      <Down :titlelist="Applicationlist" :headline="applicationTitle" @openoff="applicationoff" :isshwo="application" />
      <Down :titlelist="automationlist" :headline="automationTitle" @openoff="automationoff" :isshwo="automation" />
      <Down :titlelist="Teamlist" :headline="teamTitle" @openoff="teamoff" :isshwo="team" />
      <Down :titlelist="Management" :headline="safetyTitle" @openoff="safetyff" :isshwo="safety" />
    </div>
    <div class="fotter">
      <div @click="drawershow" class="conten pointer">
        <i class="iconfont icon-xiaoxi fs-lg"></i>
        <div class="image fs-xs">消息</div>
        <span class="xiaoxi" v-if="message"></span>
      </div>
      <div class="conten pointer" @click="gohelp">
        <i class="iconfont icon-bangzhu2 fs-lg"></i>
        <div class="image fs-xs">帮助</div>
      </div>
      <div class="conten pointer">
        <i class="iconfont icon-shezhi fs-lg"></i>
        <div class="image fs-xs">设置</div>
      </div>
    </div>
    <div class="ishow" @click="emit('changelistwidht')">
      <img src="@/assets/img/account/shouqi.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts" name="switchingmaxlist">
import Down from '~/home/down.vue'
import useStore from '@/store/index.js'
import { inject } from 'vue'
import {
  management,
  commonmax_management,
  Icon,
  commonmax_Commonly,
  titlelist,
  teamlist,
  commonmax_teamlist,
  applicationlist,
  commonmax_application,
  automationlist,
  commonmax_agency,
  agency,
} from '~/home/title'

const newaccount = inject('newaccount')
const drawershow = inject('drawershow')
const gohelp = inject('gohelp')
/**
 * 消息
 */
const message = ref<Boolean>(true)
/**
 * 展开缩放
 */
const emit = defineEmits<{
  (e: 'changelistwidht'): void
}>()

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
 * 自适应高度
 * @param item 当前点击
 * @param callback 是否回调关闭
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
 * 常用列表
 */
const Commonly = ref<boolean>(true)
const Commonlyoff = () => {
  Commonly.value = !Commonly.value
  calculation('Commonly')
}
const Comtitlelist = titlelist.map((v, index) => {
  v.text = commonmax_Commonly[index]
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
  v.text = commonmax_application[index]
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
  title: '自动化',
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
  v.text = commonmax_teamlist[index]
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
  v.text = commonmax_management[index]
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
  title: '代理管理',
})
const Agency = agency.map((v, index) => {
  v.text = commonmax_agency[index]
  return v
})
</script>

<style scoped lang="less">
.unfold {
  position: relative;
  overflow: hidden;
  &.el-button {
    margin: 18px 20px 12px 10px;
    width: 220px;
    height: 48px;
    background: linear-gradient(98deg, #3b45fc 24%, rgba(11, 23, 252, 0.7) 69%, rgba(155, 78, 255, 0.95) 100%);
    border-radius: 12px 12px 12px 12px;
    color: @tcolor;
    i {
      padding-right: 5px;
      padding-bottom: 3px;
    }
    background-size: 200% 200%;
    animation: gradient-animation 3s ease-in-out infinite;
    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: -100%;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom right, transparent, rgba(255, 255, 255, 0.4));
      opacity: 0;
      transform: translate(-50%, -50%);
      animation: scanAnimation 3s linear infinite;
      pointer-events: none;
    }
    @keyframes scanAnimation {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(135deg);
      }
      50% {
        opacity: 1;
        transform: translate(50%, 50%) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translate(150%, 150%) rotate(135deg);
      }
    }
  }
}

.toggle {
  text-align: end;
  padding-right: 12px;
}
.fotter {
  position: absolute;
  width: 210px;
  height: 50px;
  background: #f0f3ff;
  border-radius: 12px 12px 12px 12px;
  // margin-bottom: 100vh;
  bottom: 10px;
  left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .conten {
    text-align: center;
    position: relative;
  }
  .conten:hover {
    color: #3b45fc;
  }
  .xiaoxi {
    top: 3px;
    position: absolute;
    right: 5px;
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50% 50%;
  }
}
.maxlist {
  width: 100%;
  margin-bottom: 100vh;
  // position: relative;
}
.Down {
  margin: 0 20px 0 10px;
}
.ishow {
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  > img {
    width: 8px;
    height: 45px;
  }
}
</style>
