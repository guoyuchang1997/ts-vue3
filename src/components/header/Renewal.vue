<template>
  <!-- 更新中心面板 -->
  <div class="renewal">
    <div class="content">
      <div class="title">
        <span>更新中心</span>
        <span>全部下载</span>
      </div>
      <ul>
        <li
          v-for="(item, index) in infoList"
          :key="index"
          :class="{
            'type-0': item.type === '0',
            'type-1': item.type === '1',
          }"
        >
          <h1>{{ item.title }} <span>NEW</span> </h1>
          <div class="html-box" v-html="item.description"></div>
          <div class="buttons-box">
            <button>跳过</button>
            <button>下载更新</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO:补充类型约定
const infoList = reactive([
  {
    title: '浏览器下载',
    type: '0',
    description: `<p style='margin-top:10px;'>云登浏览器1.1.35版本更新说明：</p> <p  style='margin-top:10px;'>-修复近期已知问题</p> <p style='color:red; margin-top:10px;'>现在更新，即可获得最新的功能</p>`,
  },
  {
    title: '补丁版本',
    type: '1',
    description: '<p>浏览器下载</p>',
  },
])
</script>

<style lang="less" scoped>
.renewal {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 378px;
  max-height: 499px;
  padding-top: 30px;
  z-index: 1000;
  .content {
    padding: 20px;
    background: @cbcolor;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
      span:first-child {
        font-size: @font-size-lg;
        font-weight: 400;
        // TODO:cssVolume 左侧标题文本颜色
        color: #333;
      }
      span:last-child {
        font-size: @font-size-xs;
        font-weight: 400;
        // TODO:cssVolume 右侧下载按钮颜色
        color: #2d5aff;
        cursor: pointer;
      }
    }
    ul {
      max-height: 424px;
      overflow-y: auto;
      padding: 0 3px;
      // 纤细淡色滚动条
      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #ccd6f8;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #f0f2fc;
      }
      li {
        margin-bottom: 10px;
        padding: 15px;
        border-bottom: 6px solid #fff;
        border-radius: 8px;
        h1 {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          // TODO:cssVolume 更新列表项标题颜色
          color: #333;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            width: 37px;
            height: 19px;
            font-size: @font-size-xs;
            color: #fff;
            border-radius: 4px;
            background: #ec5b56;
          }
        }
        .html-box {
          margin-top: 11px;
        }
        .buttons-box {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
          button {
            font-size: @font-size-xs;
            font-weight: 400;
            border: none;
            border-radius: 6px;
            background: none;
            cursor: pointer;
          }
          button:first-child {
            color: #999999;
          }
          button:last-child {
            width: 80px;
            height: 32px;
            margin-left: 20px;
            color: #fff;
            font-size: @font-size-xs;
            font-weight: 400;
          }
        }
      }

      .type-0 {
        background: #f4f6fe;
        border-bottom: 6px solid #d4dbfc;
        .buttons-box {
          button:last-child {
            background: #2d5aff;
          }
        }
      }
      .type-1 {
        background: #f2f9ec;
        border-bottom: 6px solid #bbde5e;
        .buttons-box {
          button:last-child {
            background: #acd746;
          }
        }
      }
    }
  }
}
</style>
