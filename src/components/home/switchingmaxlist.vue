<template>
  <div class="maxlist">
    <el-button @click="calculation" class="fs-lg unfold"
      ><i class="iconfont icon-yuanquanjiahao"></i> 新建浏览器</el-button
    >
    <div class="toggle">
      <i class="iconfont icon-shouhui fs-sm pointer" @click="emit('changelistwidht')"></i>
    </div>
    <div class="Down" ref="Downs">
      <Down :titlelist="titlelist" :headline="CommonlyTitle" :isshwo="Commonly" @openoff="Commonlyoff" />
      <Down :titlelist="applicationlist" :headline="applicationTitle" @openoff="applicationoff" :isshwo="application" />
      <Down :titlelist="automationlist" :headline="automationTitle" @openoff="automationoff" :isshwo="automation" />
      <Down :titlelist="teamlist" :headline="teamTitle" @openoff="teamoff" :isshwo="team" />
      <Down :titlelist="safetylist" :headline="safetyTitle" @openoff="safetyff" :isshwo="safety" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Down from "~/home/down.vue";
import { Title, Icon } from "~/home/title";
import Deferredexecution from '@/mixins/useDebounce'
/**
 * 展开缩放
 */
const emit = defineEmits<{
  (e: "changelistwidht"): void;
}>();


/**
 * 元素高度
 */
 interface Height{
  /**
   * 高度
   */
   clientHeight: number
}
interface bodyHeight{
   /**
   * 高度
   */
   height: number
  /**
   * body高度
   */
   bodyheight:number
}
const Downs = ref<Height>();
const listheight = ref<bodyHeight>({
  height: 0,
  bodyheight:0
});

const calculation = () => {
  if (Downs.value) {
   
    listheight.value.height = Downs.value.clientHeight;
    listheight.value.bodyheight = document.body.clientHeight - 130;
    console.log('调用了',listheight.value.bodyheight < listheight.value.height,listheight.value.bodyheight ,listheight.value.height);
    if (listheight.value.bodyheight < listheight.value.height) {
      console.log('高度过大');
      if (!Commonly.value) {
        Commonly.value = true;
        calculation(); // 重新调用函数
      } else if (!application.value) {
        application.value = true;
        calculation(); // 重新调用函数
      } else if (!automation.value) {
        automation.value = true;
        calculation(); // 重新调用函数
      } else if (!team.value) {
        team.value = true;
        calculation(); // 重新调用函数
      } else if (!safety.value) {
        safety.value = true;
        calculation(); // 重新调用函数
      }
    }
  }
};



/**
 * 常用列表
 */
const Commonly = ref<boolean>(false);
const Commonlyoff = () => {
  Commonly.value = !Commonly.value;
  Deferredexecution(calculation,0)
  
};

const titlelist = ref<Title[]>([]);
titlelist.value = [
  {
    icon: "icon-zhanghao",
    text: "账号管理",
  },
  {
    icon: "icon-a-ixintucom1",
    text: "快速启动",
  },
  {
    icon: "icon-a-huishou1",
    text: "回收站",
  },
];
const CommonlyTitle = ref<Icon>({
  headline: 'icon-CHANGYONG1',
  title:'常用'
})
/**
 * 应用
 */
const application = ref<boolean>(false);
const applicationoff = () => {
  application.value = !application.value;
  Deferredexecution(calculation,0)
};
const applicationTitle = ref<Icon>({
  headline: 'icon-yingyong',
  title:'应用'
})
const applicationlist = ref<Title[]>([]);
  applicationlist.value = [
  {
    icon: "icon-daili",
    text: "代理管理",
  },
  {
    icon: "icon-chajian",
    text: "插件中心",
  },
  {
    icon: "icon-a-guanli1",
    text: "窗口同步",
  },
  {
    icon: "icon-tuiguang",
    text: "推广奖励",
  },
];

/**
 * 自动化
 */
 const automation = ref<boolean>(false);
const automationoff = () => {
  automation.value = !automation.value;
  Deferredexecution(calculation,0)
};
const automationTitle = ref<Icon>({
  headline: 'icon-zidonghua',
  title:'自动化'
})
const automationlist = ref<Title[]>([]);
  automationlist.value = [
  {
    icon: "icon-a-api1",
    text: "API",
  },
  {
    icon: "icon-rpa",
    text: "RPA",
  }
];

/**
 * 团队列表
 */
 const team = ref<boolean>(false);
const teamoff = () => {
  team.value = !team.value;
  Deferredexecution(calculation,0)
};
const teamTitle = ref<Icon>({
  headline: 'icon-a-qunzu6',
  title:'团队'
})
const teamlist = ref<Title[]>([]);
  teamlist.value = [
  {
    icon: "icon-a-feiyong",
    text: "费用管理",
  },
  {
    icon: "icon-chengyuan",
    text: "成员管理",
  },
  {
    icon: "icon-bumen",
    text: "部门管理",
  },
  {
    icon: "icon-juese",
    text: "角色管理",
  },
];
/**
 * 安全
 */
 const safety = ref<boolean>(false);
const safetyff = () => {
  safety.value = !safety.value;
  Deferredexecution(calculation,0)
};
const safetyTitle = ref<Icon>({
  headline: 'icon-anquan',
  title:'安全'
})
const safetylist = ref<Title[]>([]);
  safetylist.value = [
  
];
</script>

<style scoped lang="less">
.unfold {
  &.el-button {
    margin: 18px 20px 12px 10px;
    width: 220px;
    height: 54px;
    background: linear-gradient(
      98deg,
      #3b45fc 24%,
      rgba(11, 23, 252, 0.7) 69%,
      rgba(155, 78, 255, 0.95) 100%
    );
    border-radius: 12px 12px 12px 12px;
    color: #fff;
    i {
      padding-right: 5px;
      padding-bottom: 3px;
    }
  }
}
.toggle {
  text-align: end;
  padding-right: 12px;
}
.maxlist {
  margin-bottom: 100vh;
  width: 100%;
}
.Down {
  margin: 10px 20px 0 10px;
}
</style>
