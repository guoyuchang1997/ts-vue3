<template>
  <div class="minlist">
    <el-button class="fs-lg zoom"><i class="iconfont icon-yuanquanjiahao fs-26"></i></el-button>
    <div class="toggle">
      <i class="iconfont icon-a-shouhui1 fs-sm pointer" @click="emit('changelistwidht')"></i>
    </div>
    <div class="down" ref="Downs">
      <Shrink
        :titlelist="titlelist"
        :headline="CommonlyTitle"
        :isshwo="Commonly"
        @openoff="Commonlyoff"
      />
      <Shrink
        :titlelist="applicationlist"
        :headline="applicationTitle"
        @openoff="applicationoff"
        :isshwo="application"
      />
      <Shrink
        :titlelist="automationlist"
        :headline="automationTitle"
        @openoff="automationoff"
        :isshwo="automation"
      />
      <Shrink :titlelist="teamlist" :headline="teamTitle" @openoff="teamoff" :isshwo="team" />
      <Shrink
        :titlelist="safetylist"
        :headline="safetyTitle"
        @openoff="safetyff"
        :isshwo="safety"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Shrink from "~/home/shrink.vue";
import { Title, Icon } from "~/home/title";
const emit = defineEmits<{
  (e: "changelistwidht"): void;
}>();

/**
 * 元素高度
 */
interface Height {
  /**
   * 高度
   */
  clientHeight: number;
}
interface bodyHeight {
  /**
   * 高度
   */
  height: number;
  /**
   * body高度
   */
  bodyheight: number;
}
const Downs = ref<Height>();
const listheight = ref<bodyHeight>({
  height: 0,
  bodyheight: 0,
});

const calculation = (item?: string) => {
  if (Downs.value) {
    setTimeout(() => {
      listheight.value.height = Downs.value.clientHeight;
      listheight.value.bodyheight = document.body.clientHeight - 150;
      // console.log(
      //   "调用了",
      //   listheight.value.bodyheight < listheight.value.height,
      //   listheight.value.bodyheight,
      //   listheight.value.height
      // );
      if (listheight.value.bodyheight < listheight.value.height) {
        if (!Commonly.value && item !== "Commonly") {
          Commonly.value = true;
        } else if (!application.value && item !== "application") {
          application.value = true;
        } else if (!automation.value && item !== "automation") {
          automation.value = true;
        } else if (!team.value && item !== "team") {
          team.value = true;
        } else if (!safety.value && item !== "safety") {
          safety.value = true;
        }
      }
    }, 100);
  }
};

/**
 * 下拉列表
 */
const Commonly = ref<boolean>(false);
const Commonlyoff = () => {
  Commonly.value = !Commonly.value;
  calculation("Commonly");
};
const titlelist = ref<Title[]>([]);
titlelist.value = [
  {
    icon: "icon-zhanghao",
    text: "账号",
  },
  {
    icon: "icon-a-ixintucom1",
    text: "启动",
  },
  {
    icon: "icon-a-huishou1",
    text: "回收",
  },
];
const CommonlyTitle = ref<Icon>({
  headline: "icon-CHANGYONG1",
  title: "常用",
});
/**
 * 应用
 */
const application = ref<boolean>(false);
const applicationoff = () => {
  application.value = !application.value;
  calculation("application");
};
const applicationTitle = ref<Icon>({
  headline: "icon-yingyong",
  title: "应用",
});
const applicationlist = ref<Title[]>([]);
applicationlist.value = [
  {
    icon: "icon-daili",
    text: "代理",
  },
  {
    icon: "icon-chajian",
    text: "插件",
  },
  {
    icon: "icon-a-guanli1",
    text: "同步",
  },
  {
    icon: "icon-tuiguang",
    text: "推广",
  },
];

/**
 * 自动化
 */
const automation = ref<boolean>(false);
const automationoff = () => {
  automation.value = !automation.value;
  calculation("automation");
};
const automationTitle = ref<Icon>({
  headline: "icon-zidonghua",
  title: "自动",
});
const automationlist = ref<Title[]>([]);
automationlist.value = [
  {
    icon: "icon-a-api1",
    text: "API",
  },
  {
    icon: "icon-rpa",
    text: "RPA",
  },
];
/**
 * 团队列表
 */
const team = ref<boolean>(false);
const teamoff = () => {
  team.value = !team.value;
  calculation("team");
};
const teamTitle = ref<Icon>({
  headline: "icon-a-qunzu6",
  title: "团队",
});
const teamlist = ref<Title[]>([]);
teamlist.value = [
  {
    icon: "icon-a-feiyong",
    text: "费用",
  },
  {
    icon: "icon-chengyuan",
    text: "成员",
  },
  {
    icon: "icon-bumen",
    text: "部门",
  },
  {
    icon: "icon-juese",
    text: "角色",
  },
];
/**
 * 安全
 */
const safety = ref<boolean>(false);
const safetyff = () => {
  safety.value = !safety.value;
  calculation("safety");
};
const safetyTitle = ref<Icon>({
  headline: "icon-anquan",
  title: "安全",
});
const safetylist = ref<Title[]>([]);
safetylist.value = [];
</script>

<style scoped lang="less">
.toggle {
  text-align: end;
  padding-right: 12px;
}
.zoom {
  &.el-button {
    margin: 18px 20px 12px 10px;
    width: 44px;
    height: 44px;
    text-align: center;
    background: linear-gradient(
      98deg,
      #3b45fc 24%,
      rgba(11, 23, 252, 0.7) 69%,
      rgba(155, 78, 255, 0.95) 100%
    );
    border-radius: 12px 12px 12px 12px;
  }
  i {
    color: #fff;
  }
}
.minlist {
  margin-bottom: 100vh;
  width: 100%;
}
.down {
  margin-top: 22px;
}
</style>
