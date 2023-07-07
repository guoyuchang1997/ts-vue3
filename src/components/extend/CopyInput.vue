<template>
  <!-- 带有复制功能的输入框 -->
  <div class="copyInput">
    <!-- <p>您的{{ data.title }}</p> -->
    <p>您的推广链接</p>
    <div class="inputBox">
      <input type="text" placeholder="登陆后查看邀请信息" value="123000" readonly />
      <button>
        <slot></slot>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// export default {
//   data() {
//     return {}
//   },
//   props: ['data'],
//   methods: {
//     /**复制链接*/
//     copyLink() {
//       this.copyToClipboard(this.data.value)
//       this.$message({
//         message: `复制${this.data.title}成功`,
//         type: 'success',
//       })
//     },
//     /**将文本复制到剪切板
//      * @param {String} text 要复制的文本
//      */
//     copyToClipboard(text) {
//       const input = document.createElement('input')
//       input.style.position = 'fixed'
//       input.style.opacity = 0
//       input.value = text
//       document.body.appendChild(input)
//       input.select()
//       document.execCommand('copy')
//       document.body.removeChild(input)
//     },
//   },
//   mounted() {},
// }
</script>

<style lang="less" scoped>
.copyInput {
  margin-bottom: 15px;
  p {
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
  .inputBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    input {
      border: 1px solid #2b53e5;
      border-radius: 8px;
      font-size: 14px;
      padding: 10px;
      width: 88%;
    }
    button {
      width: 11%;
      height: 40px;
      background: #2b53e5;
      border: none;
      border-radius: 8px 8px 8px 8px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
