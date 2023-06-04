<template>
  <div class="maxlist">
    <el-button @click="calculation" class="fs-lg unfold"
      ><i class="iconfont icon-yuanquanjiahao"></i> 新建浏览器</el-button
    >
    <div class="toggle">
      <i class="iconfont icon-shouhui fs-sm pointer" @click="emit('changelistwidht')"></i>
    </div>
    <div class="Down" ref="Downs">
      <Down
        :titlelist="Comtitlelist"
        :headline="CommonlyTitle"
        :isshwo="Commonly"
        @openoff="Commonlyoff"
      />
      <Down
        :titlelist="Applicationlist"
        :headline="applicationTitle"
        @openoff="applicationoff"
        :isshwo="application"
      />
      <Down
        :titlelist="automationlist"
        :headline="automationTitle"
        @openoff="automationoff"
        :isshwo="automation"
      />
      <Down :titlelist="Teamlist" :headline="teamTitle" @openoff="teamoff" :isshwo="team" />
      <Down :titlelist="safetylist" :headline="safetyTitle" @openoff="safetyff" :isshwo="safety" />
    </div>
  </div>
</template>

<script setup lang="ts" name="switchingmaxlist">
import Down from "~/home/down.vue";
import useStore from '@/store/index.js'
import { Title, Icon,commonmax_Commonly,titlelist ,teamlist,commonmax_teamlist,applicationlist,commonmax_application,automationlist} from "~/home/title";
/**
 * 展开缩放
 */
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
      if (listheight.value.bodyheight < listheight.value.height) {
        if (!Commonly.value && item !== "Commonly" && !titlelist.some((item) => item.mate === useLeftList.name))  {
          Commonly.value = true;
  
        } else if (!application.value && item !== "application" && !applicationlist.some((item) => item.mate === useLeftList.name)) {
          application.value = true;
 
        } else if (!automation.value && item !== "automation" && !automationlist.some((item) => item.mate === useLeftList.name)) {
          automation.value = true;
   
        } else if (!team.value && item !== "team" && !teamlist.some((item) => item.mate === useLeftList.name)) {
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
 * 常用列表
 */
const Commonly = ref<boolean>(false);
const Commonlyoff = () => {
  Commonly.value = !Commonly.value;
  calculation("Commonly");
};
const Comtitlelist = titlelist.map((v, index) => {
  v.text = commonmax_Commonly[index]
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
  v.text = commonmax_application[index]
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
  title: "自动化",
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
  v.text = commonmax_teamlist[index]
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
