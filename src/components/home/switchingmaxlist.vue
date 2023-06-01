<template>
  <div class="maxlist">
    <el-button class="fs-lg unfold"
      ><i class="iconfont icon-yuanquanjiahao"></i> 新建浏览器</el-button
    >
    <div class="toggle">
      <i class="iconfont icon-shouhui fs-sm pointer" @click="emit('changelistwidht')"></i>
    </div>
    <div class="Down">
      <Down :titlelist="titlelist" :headline="CommonlyTitle" :isshwo="Commonly" @openoff="Commonlyoff" />
      <Down :titlelist="applicationlist" :headline="applicationTitle" @openoff="applicationoff" :isshwo="application" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Down from "~/home/down.vue";
import { Title ,Icon} from "~/home/title";
/**
 * 展开缩放
 */
const emit = defineEmits<{
  (e: "changelistwidht"): void;
}>();

/**
 * 常用列表
 */
const Commonly = ref<boolean>(false);
const Commonlyoff = () => {
  Commonly.value = !Commonly.value;
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
