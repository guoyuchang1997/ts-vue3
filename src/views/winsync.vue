<template>
  <!-- page:窗口同步 -->
  <div class="winsync">
    <!-- 顶部  -->
    <div class="header">
      <div class="header-left">
        <button class="resetting-btn"> <i></i> 启动同步Ctrl+Alt+S</button>
        <button class="resetting-btn"> <i></i> 重启同步Ctrl+Alt+R</button>
      </div>
      <div class="header-right"> <i class="iconfont" style="margin-right: 5px">&#xe609;</i> 快捷键设置 </div>
    </div>
    <!-- 主要内容 -->
    <div class="content">
      <div class="content-left">
        <!-- 表单 -->
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed="left" type="selection" width="50" />
            <el-table-column prop="serialNumber" label="序号" width="160">
              <template #default="{ row }">
                {{ row.serialNumber }} <i class="iconfont icon-fenxiang fs-xs font-color" style="margin-left: 5px"></i
              ></template>
            </el-table-column>
            <el-table-column label="分组">
              <template #default="{ row }">
                {{ row.group }}
              </template>
            </el-table-column>
            <el-table-column label="名称">
              <template #default="{ row }">
                <i class="iconfont icon-windows iconmar font-color"></i>
                {{ row.name }}
                <i class="iconfont icon-edit"></i>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注" />
            <el-table-column prop="status" label="状态">
              <template #default="{ row }">
                <div style="display: flex; align-items: center">
                  <img
                    style="width: 16px; height: 16px; margin-right: 10px"
                    src="@/assets/img/winsync/icon-start.webp"
                    alt=""
                  />
                  {{ row.status }}
                </div>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="140">
              <template #default="{ row }">
                <div class="controls" style="display: flex">
                  <div class="item1">
                    <el-popover placement="top-start" trigger="hover" content="显示窗口">
                      <template #reference>
                        <img src="@/assets/img/winsync/icon-window.webp" alt="" />
                      </template>
                    </el-popover>
                  </div>
                  <div class="item2">
                    <el-popover placement="top-start" trigger="hover" content="设为主控">
                      <template #reference>
                        <img src="@/assets/img/winsync/icon-control.webp" alt="" />
                      </template>
                    </el-popover> </div
                ></div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- TODO:这里没准会有一个分页器 -->
      </div>
      <!-- 操作台 -->
      <!--      <div class="content-right">
        <!~~ 标题 ~~>
        <div class="title">
          <span>操作台</span>
          <img src="@/assets/img/winsync/icon-popUp.webp" alt="" />
        </div>
        <div class="container">
          <!~~ 切换按钮 ~~>
          <ul class="switch-btn" @click="operatingSwitch">
            <li :class="{ active: switchStatus === 1 }">窗口管理</li>
            <li :class="{ active: switchStatus === 2 }">文本管理</li>
          </ul>
          <!~~ 窗口管理容器 ~~>
          <div class="window-container" v-if="switchStatus === 1">
            <!~~ 控制类型按钮容器 ~~>
            <div class="btn-box1">
              <button class="resetting-btn">
                <img src="@/assets/img/winsync/icon-uniformSize.webp" alt="" />
                统一大小
              </button>
              <button class="resetting-btn">
                <img src="@/assets/img/winsync/icon-winSync.webp" alt="" />
                显示窗口
              </button>
            </div>
            <p class="window-setting-title">窗口设置</p>
            <!~~ 窗口设置表单 ~~>
            <div class="window-setting">
              <div class="window-setting-t">
                <span>显示器：</span>
                <el-select v-model="displayValue">
                  <el-option label="内置屏幕（1920*1080）" value="1" />
                </el-select>
              </div>
              <div class="window-setting-b">
                <el-switch v-model="isArrangement" />
                <span>根据现实器的分辨率自动排列所选窗口</span>
              </div>
            </div>
            <!~~ 位置参数容器 ~~>
            <div class="position-parameter">
              <div class="row1">
                <span>起始位置</span>
                <div>
                  <span>X</span>
                  <el-input />
                </div>
                <div>
                  <span>Y</span>
                  <el-input />
                </div>
              </div>
              <div class="row2">
                <span>窗口大小</span>
                <div>
                  <span>宽</span>
                  <el-input />
                </div>
                <div>
                  <span>高</span>
                  <el-input />
                </div>
              </div>
              <div class="row3">
                <span>窗口偏移</span>
                <div>
                  <span>X</span>
                  <el-input />
                </div>
                <div>
                  <span>Y</span>
                  <el-input />
                </div>
              </div>
            </div>
            <button class="custom-permutation">自定义排列</button>
          </div>
          <!~~ 文本管理容器 ~~>
          <div class="text-container" v-if="switchStatus === 2">
            <div class="line1">
              <span>刷新当前页面</span>
              <span>关闭所有页面</span>
            </div>
            <div class="line2">
              <span>键入速度：</span>
              <el-input type="number" />
              <span>ms&#x3000;数值越小,键入速度越快</span>
            </div>
            <div class="line3">
              <p>键盘键入速度：</p>
              <div class="input-box">
                <el-input placeholder="请输入网址" />
                <span>当前页打开</span>
              </div>
            </div>
            <div class="line4">
              <p>文本输入：</p>
              <el-input v-model="test" :rows="6" type="textarea" placeholder="请输入文本内容，每行一个文本：" />
              <div class="buttons">
                <span>顺序输入</span>
                <span>随机输入</span>
              </div>
            </div>
            <button class="custom-permutation"> <i class="iconfont icon-yuanquanjiahao fs-xl"></i> 添加更多文本</button>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
const test = ref('')
// 是否选中 ‘根据现实器的分辨率自动排列所选窗口’
const isArrangement = ref(false)
// 显示器参数下拉框的值
const displayValue = ref('1')
const tableData = reactive([
  {
    serialNumber: '1',
    group: '未分组',
    name: '辰链',
    remark: '杭州辰链信息科技有限公司',
    status: '被控窗口',
  },
  {
    serialNumber: '2',
    group: '未分组',
    name: '辰链',
    remark: '杭州辰链信息科技有限公司',
    status: '被控窗口',
  },
  {
    serialNumber: '3',
    group: '未分组',
    name: '辰链',
    remark: '杭州辰链信息科技有限公司',
    status: '被控窗口',
  },
  {
    serialNumber: '4',
    group: '未分组',
    name: '辰链',
    remark: '杭州辰链信息科技有限公司',
    status: '被控窗口',
  },
  {
    serialNumber: '5',
    group: '未分组',
    name: '辰链',
    remark: '杭州辰链信息科技有限公司',
    status: '被控窗口',
  },
])

// 操作台切换状态 1：窗口管理 2：文本管理
const switchStatus = ref(1)
/**
 * 操作台切换
 */
const operatingSwitch = () => {
  // 别问 问就是懒得写事件代理和判断了 只要需求不改 这玩法没啥问题
  switchStatus.value = switchStatus.value === 1 ? 2 : 1
}
// 分页器数据
const changePage = reactive({
  currentPage: 1,
  total: 380,
  page_size: 10,
})
/**
 * 处理当前页码变化的方法
 * @param {number} data - 当前页码的值
 * @returns {void}
 */
const handleCurrentChange = (data: number) => {
  changePage.currentPage = data
}
/**
 *处理当前页码变化的方法
 * @param {number} data - 当前页码的值
 * @returns {void}
 */
const handleSizeChange = (data: number) => {
  changePage.page_size = data
}
</script>

<style scoped lang="less">
.winsync {
  height: 100%;
  background: #f6f6f6;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .header-left {
      display: flex;
      align-items: center;
      button {
        font-size: 12px;
        font-weight: 350;
        border-radius: 8px;
        padding: 14px 10px;
        &:nth-child(1) {
          margin-right: 10px;
          background: #2d5aff;
          color: #fff;
        }
        &:nth-child(2) {
          background: #fff;
          color: #999;
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      color: #2b53e5;
      cursor: pointer;
      font-size: 12px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    height: 92.5%;
    background: #f6f6f6;
    .content-left {
      width: 100%;
      padding: 10px 10px 0 10px;
      background: #fff;
      .table {
        :deep(.el-table) {
          border-radius: 10px 10px 0 0;
        }
        :deep(.cell) {
          // text-align: center;
          display: flex;
          align-items: center;
          .controls {
            display: flex;
            gap: 0 10px;
            img {
              width: 18px;
              height: 18px;
              // css 滤镜变灰
              filter: grayscale(100%);
              cursor: pointer;
            }
          }
          .icon-edit {
            display: none;
            margin-left: 5px;
            font-size: 12px;
            color: #2b53e5;
          }
        }

        :deep(.el-button) {
          height: 28px;
          border-radius: 6px;

          & > span {
            justify-content: center;
          }
        }

        :deep(.el-table__header-wrapper) {
          .el-table__header {
            height: 50px;

            .el-table__cell {
              background-color: #fbfbfc;
              font-weight: normal;
              color: #333333;

              &.is-leaf {
                border-bottom: 0;
              }

              &:first-child {
                border-top-left-radius: 10px;
              }

              &:last-child {
                border-top-right-radius: 10px;
              }
            }
          }
        }

        :deep(.el-table__body-wrapper) {
          .el-table__body {
            .el-table__cell {
              font-weight: 350;
              color: #333333;
              height: 68px;
            }

            .el-table__row.hover-row {
              background-color: #f1f4ff;

              & > td.el-table__cell {
                background-color: #f1f4ff;
              }

              .icon-edit {
                opacity: 1;
              }
            }
            .el-table__row:hover {
              .icon-edit {
                display: block;
              }
              .controls {
                img {
                  filter: grayscale(0%);
                }
              }
            }

            tr td.el-table-fixed-column--right,
            tr td.el-table-fixed-column--left {
              background-color: transparent;
            }
          }
        }
      }
    }
    .content-right {
      min-width: 338px;
      height: 100%;
      border: 1px solid #cad8ff;
      background: #fff;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f4f6ff;
        padding: 15px 20px;
        span {
          font-size: 14px;
          font-weight: 500;
          color: #333333;
        }
        img {
          width: 14px;
          height: 14px;
          cursor: pointer;
        }
      }
      .container {
        width: 100%;
        padding: 10px 20px;

        .switch-btn {
          display: flex;
          justify-content: space-between;
          width: 100%;
          border-radius: 4px;
          padding: 5px;
          background: #f4f6ff;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 28px;
            border-radius: 4px;
            cursor: pointer;
          }
          .active {
            background: #fff;
            color: #2d5aff;
          }
        }
        .window-container {
          .btn-box1 {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 144px;
              height: 28px;
              border: 1px solid #cad8ff;
              border-radius: 4px;
              font-size: 12px;
              color: #386bf3;
              img {
                width: 12px;
                height: 12px;
                margin-right: 3px;
              }
            }
          }
          .window-setting-title {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }
          .window-setting {
            margin-top: 15px;
            .window-setting-t {
              display: flex;
              align-items: center;
              :deep(.el-select) {
                width: 100%;
              }
              span {
                font-size: 12px;
                font-weight: 400;
                color: #333333;
                white-space: nowrap;
              }
            }
            .window-setting-b {
              display: flex;
              align-items: center;
              justify-content: end;
              margin-top: 10px;
              span {
                font-size: 12px;
                font-weight: 400;
                color: #333333;
                margin-left: 5px;
              }
            }
          }
          .position-parameter {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
            padding: 15px 27px 15px 15px;
            background: #f9f9f9;
            :deep(.el-input) {
              width: 58px;
              height: 30px;
              margin-left: 6px;
            }
            .row1,
            .row2,
            .row3 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 12px;
              color: #333;
              div {
                display: flex;
                align-items: center;
              }
            }
          }
          .custom-permutation {
            width: 100%;
            height: 40px;
            margin-top: 30px;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            background: #2b53e5;
            cursor: pointer;
          }
        }

        .text-container {
          .line1 {
            display: flex;
            gap: 0 20px;
            padding: 15px 0;
            span {
              font-size: 12px;
              font-weight: 400;
              color: #2b53e5;
              cursor: pointer;
            }
          }
          .line2 {
            display: flex;
            align-items: center;
            :deep(.el-input) {
              width: 60px;
              height: 40px;
              margin-right: 5px;
            }
            span {
              font-size: 12px;
              white-space: nowrap;
            }
            span:first-child {
              color: #333333;
            }

            span:last-child {
              color: #999;
            }
          }
          .line3 {
            margin-top: 15px;
            p {
              margin-bottom: 10px;
              font-size: 12px;
              font-weight: 400;
              color: #333333;
              line-height: 17px;
            }
            .input-box {
              display: flex;
              align-items: center;
              span {
                margin-left: 10px;
                color: #faad3c;
                font-size: 12px;
                font-weight: 400;
                white-space: nowrap;
              }
              :deep(.el-input) {
                width: 208px;
              }
            }
          }
          .line4 {
            position: relative;
            margin-top: 15px;
            p {
              margin-bottom: 10px;
              font-size: 12px;
              font-weight: 400;
              color: #333333;
            }
            .buttons {
              position: absolute;
              bottom: 10px;
              right: 32px;
              span {
                font-size: 12px;
                font-weight: 400;
                color: #2b53e5;
                cursor: pointer;
                // 选中最后一个span
                &:last-child {
                  margin-left: 20px;
                }
              }
            }
            :deep(.el-textarea__inner) {
              resize: none;
            }
          }
          .custom-permutation {
            width: 100%;
            height: 40px;
            margin-top: 30px;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            background: #2b53e5;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
