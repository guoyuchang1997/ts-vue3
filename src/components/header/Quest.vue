<template>
  <!-- 任务面板 -->
  <div class="quest">
    <div class="content">
      <!-- 任务列表 -->
      <ul>
        <li></li>
      </ul>
      <!-- 空任务列表状态 -->
      <div class="no-item">
        <div class="no-item-left">
          <img src="@/assets/img/c-header/avater-noQuest.webp" alt="空任务状态" />
        </div>
        <div class="no-item-right">
          <p>暂无任务</p>
          <p>任务运行将会在此处展示进度</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.quest {
  position: absolute;
  width: 372px;
  padding-top: 30px;
  top: 20px;
  left: -148px;
  z-index: 1000;
  .content {
    background: @cbcolor;
    border-radius: 10px;
    .no-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px 45px;
      border-radius: 10px;
      background: @tcolor;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
      .no-item-left {
        img {
          width: 75px;
          height: 75px;
        }
      }
      .no-item-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 52px;
        p:first-child {
          font-size: 16px;
          font-weight: 350;
          //TODO:cssVariables
          color: #666666;
        }
        p:last-child {
          font-size: 14px;
          font-weight: 350;
          //TODO:cssVariables
          color: #999999;
        }
      }
    }
  }
}
</style>
