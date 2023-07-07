<template>
  <!-- 加入或创建公司 -->
  <div class="join-create">
    <!-- 插槽 -->
    <slot></slot>
    <div class="join-create-box">
      <div class="join-create-left">
        <img src="@/assets/img/setUp/avater-joinCreatingPosters.webp" alt="" />
      </div>
      <div class="join-create-right">
        <!-- 加入新团队 -->
        <div class="item join-create-right-top" @click="emit('ShowJoinTeam')">
          <div class="join-create-right-top-left">
            <h1> <span style="color: #2d5aff">加入</span>新团队</h1>
            <p>点击即可填写信息，加入您的团队</p>
          </div>
          <div class="join-create-right-top-right" style="transform: rotate(270deg)">
            <i class="iconfont">&#xe642;</i>
          </div>
        </div>
        <!-- 创建新团队 -->
        <div class="item join-create-right-bottom" @click="emit('ShowCreatedTeam')">
          <div class="join-create-right-top-left">
            <h1> <span style="color: #f1840d">创建</span>新团队</h1>
            <p>创建团队后，你将成为团队Boss，可添加环境，成员等</p>
          </div>
          <div class="join-create-right-top-right" style="transform: rotate(270deg)">
            <span class="iconfont">&#xe642;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['ShowCreatedTeam', 'ShowJoinTeam'])
</script>

<style scoped lang="less">
.join-create {
  .join-create-box {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 10px 0;
    .join-create-left {
      img {
        width: 165px;
      }
    }
    .join-create-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 555px;
        height: 120px;
        display: flex;
        border: 1px solid #dddddd;
        border-radius: 4px 4px 4px 4px;
        padding: 30px;
        cursor: pointer;
        .join-create-right-top-left {
          h1 {
            font-size: 28px;
            font-weight: 700;
            line-height: 41px;
            span {
              color: #ff6e6e;
            }
          }
          p {
            margin-top: 16px;
            font-size: 16px;
            font-weight: 350;
            color: #3d3d3d;
            line-height: 23px;
          }
        }
      }
    }
  }
  .iconfont {
    font-size: 30px;
  }
}
</style>
