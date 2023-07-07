<template>
  <div class="environment">

    <div class="title">
      如果你以前通过其他的浏览器管理你的账号，现在希望把指纹信息和cookie数据导入云登浏览器
    </div>
    <div class="main">

      <div class="item flex">
        <div class="text">名称</div>
        <div class="ri"> <el-input v-model="conten" placeholder="请输入内容"></el-input></div>
        <span class="text">如手动输入，名称=输入名称+序号组成</span>
      </div>
      <div class="item flex">
        <div class="text">选择平台</div>
        <div class="ri"> <el-input readOnly placeholder="请选择平台" @click="opendev"></el-input></div>
        <div class="nuber">
          设置数量 <el-input-number v-model="num" class="mx-4" :min="1" :max="10" controls-position="right"
            @change="handleChange" />
          <span>最大设置数量30</span>
        </div>
      </div>
    </div>
    <div class="addurl">
      <div class="btn pointer">
        批量生成链接
      </div>
    </div>
    <div class="accounturl">
      <div class="flex acctext">你生成的链接为 https://www.yunlogin.com/fingerprint.html?uuid=
        <el-input v-model="conten" style="width: 120px;margin-left: 5px;" placeholder="465465">
        </el-input>
        &nbsp;&nbsp;
        s=&nbsp;<el-input v-model="conten" style="width: 120px;" placeholder="465465"></el-input>
      </div>
      <div class="flex acctext texterr">注：UUid=“这里填写你想要的账号名” s= 1~1000 等于的每一个数字表示一个账号，更改数字就可以批量去获取指纹环境
      </div>
      <div class="flex acctext ">以下链接<span class="texterr"> 30:00 </span>分钟之内有效 请您在希望采集指纹信息的浏览器中访问下述链接
      </div>
      <div class="acctext accmanin">
        <div class="mains flex">
          <div class="le">店铺001</div>
          <div class="ri"> <el-input readOnly v-model="conten" style="width:450px;margin-left: 5px;" placeholder="465465">
            </el-input>

          </div>
          <div class="btn copybtn pointer">复制链接</div>
          <div class="succerr">(已迁移)</div>
        </div>
        <div class="mains flex">
          <div class="le">店铺001</div>
          <div class="ri"> <el-input readOnly v-model="conten" style="width:450px;margin-left: 5px;" placeholder="465465">
            </el-input>

          </div>
          <div class="btn copybtn pointer">复制链接</div>
          <div class="succerr">(已迁移)</div>
        </div>
        <div class="mains flex">
          <div class="le">店铺001</div>
          <div class="ri"> <el-input readOnly v-model="conten" style="width:450px;margin-left: 5px;" placeholder="465465">
            </el-input>

          </div>
          <div class="btn copybtn pointer">复制链接</div>
          <div class="succerr">(已迁移)</div>
        </div>
        <div class="mains flex">
          <div class="le">店铺001</div>
          <div class="ri"> <el-input readOnly v-model="conten" style="width:450px;margin-left: 5px;" placeholder="465465">
            </el-input>

          </div>
          <div class="btn copybtn pointer">复制链接</div>
          <div class="succerr">(已迁移)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const conten = ref('12312321')
const num = ref()
const handleChange = () => { }
const emit = defineEmits(['opendevpop'])
const opendev = () => {
  emit('opendevpop', '23')
}

</script>

<style lang="less" scoped>
.environment {}

.title {
  width: 98%;
  margin-left: 15px;
  height: 40px;
  line-height: 40px;
  background: #F7F7F7;
  border-radius: 4px 4px 4px 4px;
  padding-left: 15px;
}

.main {
  margin-left: 15px;
  margin-top: 20px;

  .item {
    margin-bottom: 20px;

    :deep(.el-input__wrapper) {
      width: 400px;
    }

    .text {
      display: inline-block;
      margin-left: 15px;
      white-space: nowrap;
      color: #666666;
    }

    .nuber {
      margin-left: 50px;

      .el-input-number {
        margin: 0 5px;
      }

      >span {
        color: #666;
      }
    }
  }

  .text {
    width: 80px;
    text-align: end;
    margin-right: 10px;
  }

  .btn {
    width: 160px;
    height: 40px;
    background: #2D5AFF;
    border-radius: 8px 8px 8px 8px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    margin-left: 15px;
    margin-top: 40px;
    margin-bottom: 45px;
  }
}

.accounturl {
  margin-left: 15px;
 margin-bottom: 3000px;
  .acctext {
    margin-bottom: 15px;
  }

  .texterr {
    color: red;
  }

  .accmanin {
    width: 800px;
    background: rgba(43, 83, 229, 0.05);
    border-radius: 8px 8px 8px 8px;
    padding: 20px;

    .le {
      width: 120px;

    }

    .mains {
      margin-bottom: 15px;
    }

    .copybtn {
      width: 80px;
      height: 32px;
      line-height: 32px;
      background-color: #fff;
      color: #333;
      border: 1px solid #CCCCCC;
      border-radius: 4px;
      margin: unset;
      margin-left: 10px;

      &:hover {
        background-color: #2D5AFF;
        color: #F7F7F7;
      }

    }

    .succerr {
      margin-left: 15px;
      color: #2D5AFF;
    }
  }
}
</style>
