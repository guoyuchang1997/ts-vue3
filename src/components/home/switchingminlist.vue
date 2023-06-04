<template>
  <div class="minlist">
    <el-button class="fs-lg zoom"><i class="iconfont icon-yuanquanjiahao fs-26"></i></el-button>
    <div class="toggle">
      <i class="iconfont icon-a-shouhui1 fs-sm pointer" @click="emit('changelistwidht')"></i>
    </div>
    <div class="down" ref="Downs">
      <Shrink
        :titlelist="Comtitlelist"
        :headline="CommonlyTitle"
        :isshwo="Commonly"
        @openoff="Commonlyoff"
      />
      <Shrink
        :titlelist="Applicationlist"
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
      <Shrink :titlelist="Teamlist" :headline="teamTitle" @openoff="teamoff" :isshwo="team" />
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
import useStore from '@/store/index.js'
import { Title, Icon ,teamlist,titlelist,commonmin_teamlist,commonmin_Commonly,commonmin_application,applicationlist,automationlist} from "~/home/title";
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
const {useLeftList}  = useStore()
const calculation = (item?: string) => {
  if (Downs.value) {
    setTimeout(() => {
      listheight.value.height = Downs.value.clientHeight;
      listheight.value.bodyheight = document.body.clientHeight - 200;
      // console.log(
      //   "调用了",
      //   listheight.value.bodyheight < listheight.value.height,
      //   listheight.value.bodyheight,
      //   listheight.value.height
      // );
      if (listheight.value.bodyheight < listheight.value.height) {
        if (!Commonly.value && item !== "Commonly" && !titlelist.some((item) => item.mate === useLeftList.name)) {
          Commonly.value = true;
        } else if (!application.value && item !== "application" && !applicationlist.some((item) => item.mate === useLeftList.name)) {
          application.value = true;
        } else if (!automation.value && item !== "automation" && !automationlist.some((item) => item.mate === useLeftList.name)) {
          automation.value = true;
        } else if (!team.value && item !== "team" && !applicationlist.some((item) => item.mate === useLeftList.name)) {
          team.value = true;
        } else if (!safety.value && item !== "safety") {
          safety.value = true;
        }
      }
    }, 100);
  }
};
onMounted(() => {
  calculation()
})
/**
 * 下拉列表
 */
const Commonly = ref<boolean>(false);
const Commonlyoff = () => {
  Commonly.value = !Commonly.value;
  calculation("Commonly");
};
const Comtitlelist = titlelist.map((v, index) => {
  v.text = commonmin_Commonly[index]
  return v
})
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
const Applicationlist = applicationlist.map((v, index) => {
  v.text = commonmin_application[index]
  return v
})
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
const Teamlist = teamlist.map((v, index) => {
  v.text = commonmin_teamlist[index]
  return v
})
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
