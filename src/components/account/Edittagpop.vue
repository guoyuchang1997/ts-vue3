<template>
  <Popup v-model:isShow="getIsShow" width="800px" title="账号标签管理">
    <template #main>
      <div class="maintitle flex">
        <div class="le">
          总共有5个标签
        </div>
        <div class="xuanze">
          <el-input v-model="seatch" type="text" class="fs-xs" placeholder="搜索对应分组序号">
            <template #suffix>
              <div class="btn pointer">
                <i class="iconfont icon-sousuo fs-sm"></i>
              </div>
            </template>
          </el-input>
        </div>
      </div>
      <div class="conten">
        <div class="item flex pointer fs-xs">
          <div class="checker"> <span :class="{ active: false }"></span> </div>
          无标签账号<span>(23)</span>
        </div>
        <div class="item items flex pointer fs-xs active">
          <div class="checker"> <span :class="{ active: true }"></span> </div>
          无标签账号 <span>(22)</span> <i class="iconfont icon-zhanghudongtaijilu fs-xs"></i>
          <i class="iconfont icon-close2"></i>
        </div>
        <div class="item items flex pointer fs-xs">
          <div class="checker"> <span :class="{ active: false }"></span> </div>
          无标签账号 <span>(22)</span> <i class="iconfont icon-zhanghudongtaijilu fs-xs"></i>
          <i class="iconfont icon-close2"></i>
        </div>
      </div>

    </template>
    <template #footer>
      <div class="footer flex">
        <div class="top flex">
          <div class="le flex pointer">
            <div class="checker "> <span :class="{ active: true }"></span> </div> <span>全选</span>
          </div>
          <span>已选择<span class="color">5</span>个标签</span>
        </div>
        <div class="right flex">
          <div class="btn pointer fs-lg">
            添加标签
          </div>
          <div class="btn dele pointer fs-lg">
            删除标签
          </div>

        </div>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed } from 'vue'

interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
})
const emits = defineEmits(['update:isShow'])
/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})
const seatch = ref()
</script>

<style scoped lang="less">
.iconfont {
  padding-left: 5px;
}

.checker {
  margin-right: 5px;
}

.maintitle {
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;

  .le {
    color: #CCCCCC;
    font-size: 14px;
  }
}

.xuanze {
  .iconfont {
    padding-left: unset;
  }

  :deep(.el-input) {
    .el-input__wrapper {
      width: 240px;
    }

    height: 32px;
    display: flex;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 16px;

    .el-input__wrapper {
      border-radius: 16px;
      padding-right: unset;
    }
  }

  .btn {
    width: 48px;
    height: 32px;
    background: #2b53e5;
    border-radius: 16px;

    .icon-sousuo {
      color: #fff;
    }
  }
}

.conten {
  width: 740px;
  height: 200px;
  background: #FFFFFF;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #CCCCCC;
  padding: 20px;
  display: flex;
  gap: 10px 15px;

  .item {
    height: 30px;
    padding: 0 5px;
    line-height: 30px;
    border-radius: 4px;
    border: 1px solid #CCCCCC;
    color: #ccc;

    >span {
      padding-left: 5px;
    }
  }

  .items {
    border: 1px solid #333333;
    color: #333;

    &.active {
      border: 1px solid #2B53E5;
      background: rgba(43, 83, 229, 0.05);
      color: #2B53E5;
    }
  }
}

.footer {
  margin-top: -15px;
  justify-content: space-between;

  .le {
    margin-right: 10px;
  }


  .color {
    color: #2B53E5;
  }

  .right {

    .btn {
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: #2B53E5;
      color: #fff;
      border-radius: 8px 8px 8px 8px;
      margin-right: 10px;
    }

    .dele {
      background-color: red;
    }
  }
}
</style>
