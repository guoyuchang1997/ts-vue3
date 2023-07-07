<template>
  <div class="page-content">
    <div class="table-wrapper">
      <transition mode="out-in" name="fade-transform">
        <el-table ref="tableRef" :data="accountlist.data" height="calc(100vh - 270px)" style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column fixed type="selection" width="54" />

          <el-table-column v-if="stateishow[0].c1" width="140" label="序号" prop="id" :align="'center'"
            show-overflow-tooltip>
            <template #default="scope">
              {{ scope.row.id }} <i class="iconfont icon-fenxiang fs-xs font-color"></i>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[1].c1" width="110" label="分组">
            <template #default="scope">
              {{ scope.row.group || '暂无分组' }}
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[2].c1" width="110" label="名称" show-overflow-tooltip>
            <template #default="scope">
              <div class="tagfa flex">
                <div class="ellipsis">
                  <p>
                    <img style="width: 15px;" v-if="scope.row.platform"
                      :src="scope.row.platform?.parent?.platform_icon_comp" alt="">
                    <img style="width: 15px;" v-else src="https://www.yunlogin.com/favicon.ico" alt="" />
                    {{ scope.row.nick_name }}
                  </p>
                </div>
                <div class="ri"> <i class="iconfont icon-edit" @click="openpopup('opennamepop')"></i></div>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[3].c1" label="账号/密码" show-overflow-tooltip>
            <template #default="scope">
              <div class="tagfa flex">
                <div class="ellipsis">
                  <p>{{ scope.row.platform_username }}{{ scope.row.platform_username ? '/' : '无' }}
                    {{ scope.row.platform_password }}</p>
                </div>
                <div class="ri">
                  <i class="iconfont icon-edit" @click="openpopup('Accountediting')"></i>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[4].c1" width="200" label="ip" show-overflow-tooltip>
            <template #default="scope">
              <p><i class="iconfont icon-dizhi"></i>192.168.175.1.140<i class="iconfont icon-edit"
                  @click="openpopup('editagency')"></i></p>
              <p class="zmhttp fs-xs"><i class="iconfont fs-xs" :class="scope.row.icon"></i> 芝麻http|CN- 浙江杭州 </p>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[5].c1" label="备注" width="160" show-overflow-tooltip>
            <template #default="scope">
              <div class="tagfa flex">
                <div class="ellipsis warpno">{{ scope.row.remark || '无' }}</div>
                <div class="ri">
                  <i class="iconfont icon-edit" @click="openpopup('remark')"></i>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[6].c1" width="200" label="标签">
            <template #default="scope">
              <div class="tagfa flex" :class="{ active: convertTagsToArray(scope.row.tags_name).length === 0 }">
                <div class="tags ellipsistag" style="display: flex; gap: 8px 5px; flex-wrap: wrap">
                  <el-tag class="marb" v-for="(tag, index) in convertTagsToArray(scope.row.tags_name)" :key="index"
                    :type="tagrandom[tagcolorlist[index]]">{{
                      tag
                    }}</el-tag>
                  <div v-if="convertTagsToArray(scope.row.tags_name).length === 0">无</div>
                </div>
                <div class="ri">
                  <i class="iconfont icon-edit" @click="openpopup('opentag')"></i>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[7].c1" label="授权人" show-overflow-tooltip>
            <template #default="scope">
              <div class="tagfa flex" style="line-height: 55px;">
                <div class="tags Linefeed ellipsis">
                  <span v-for="item in convertTagsToArray(scope.row.users_name
                  )">{{ item }}&nbsp;</span>
                  <span v-if="convertTagsToArray(scope.row.users_name).length === 0">无</span>
                </div>
                <div class="ri">
                  <i class="iconfont icon-edit" @click="openpopup('successor')"></i>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[8].c1" label="创建时间" show-overflow-tooltip>
            <template #default="scope">
              <p>{{ scope.row.created_at }}</p>
            </template>
          </el-table-column>
          <el-table-column v-if="stateishow[9].c1" label="设置星标" show-overflow-tooltip>
            <template #default="scope">
              <!-- <i class="iconfont icon-shoucang fs-24"></i> -->
              <img v-if="scope.row.is_star_tag !== 1" style="width: 24px;" src="@/assets/img/account/shoucang.webp"
                alt="">
              <img v-else style="width: 24px;" src="@/assets/img/account/shoucang2.webp" alt="">
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="200">
            <template #header>
              <div class="hander flex">
                <div class="le">操作</div>
                <el-popover :width="150" placement="bottom-start" popper-class="action-popover" trigger="click">
                  <el-checkbox style="padding-left: 15px;margin-bottom: 5px;" v-for="item in stateishow" :key="item.id"
                    :label="item.text" v-model="item.c1" />

                  <template #reference>
                    <i class="iconfont icon-a-shezhi1"></i>
                  </template>
                </el-popover>
              </div>
            </template>
            <template #default="scope">
              <div class="martopbtn">
                <div class="topbtn fs-base">
                  <i class="iconfont icon-anquan1 error"></i>
                  <el-button @click="router.push('zw')" type="primary" style="margin-bottom: 6px;">
                    <img src="@/assets/img/account/suo.png" class="image" alt="" />
                    <div class="qidong"><img class="iconimage" src="@/assets/img/account/liulanqi.png" alt="" />
                      <span style="margin-top: 2px;">启动</span>
                    </div>
                  </el-button>
                  <el-popover :width="150" placement="bottom-start" popper-class="action-popover" trigger="click">
                    <div id="opts" @click="newaccount" class="opts pointer">
                      <i class="iconfont icon-edit"></i>
                      <span class="text">修改</span>
                    </div>
                    <div @click="openpopup('deleaccount')" id="opts" class="opts pointer">
                      <i class="iconfont icon-shanchu"></i>
                      <span class="text">删除</span>
                    </div>
                    <div @click="openpopup('Accountediting')" id="opts" class="opts pointer">
                      <i class="iconfont icon-zhanghao1"></i>
                      <span class="text">修改账号</span>
                    </div>
                    <div id="opts" @click="openpopup('fingerprints')" class="opts pointer">
                      <i class="iconfont icon-zhiwen"></i>
                      <span class="text">修改指纹</span>
                    </div>
                    <div @click="openpopup('editagency')" id="opts" class="opts pointer">
                      <i class="iconfont icon-a-daili1"></i>
                      <span class="text">修改代理</span>
                    </div>
                    <template #reference>
                      <i class="iconfont icon-more1"></i>
                    </template>
                  </el-popover>
                </div>
                <p class="fs-xs topcolor ellipsis">03/14&nbsp;15:35:56</p>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </transition>

    </div>
    <div class="pagination-wrapper">
      <Paging :current-page="changePage.currentPage" :page-sizes="[5, 10, 20, 30, 40]" :total="changePage.total"
        :page_size="changePage.page_size" @current-change="handleCurrentChange" @handleSizeChange="handleSizeChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Paging from '~/paging.vue'
import router from '@/router/index'
import useStore from '@/store/index'
import { convertTagsToArray, tagrandom, User } from '@/hooks/regular'
type Account = {
  name: string;
  id: number;
  dev: boolean;
};



type Props = {
  /**
   * 平台列表
   */
  accountlist: { data: Account[] } | (() => void);
  /**
   * 分页
   */
  changePage: {
    currentPage: number;
    total: number;
    page_size: number;
  };
}
withDefaults(defineProps<Props>(), {

})
const { useLeftList } = useStore()
const emit = defineEmits(['handleCurrentChange', 'handleSizeChange', 'openoff', 'multipleSelectionlist'])
const tagcolorlist = ref()
/**
 * 处理当前页码变化的方法
 * @param {number} data - 当前页码的值
 * @returns {void}
 */
const handleCurrentChange = (data: number) => {
  console.log(data);
  emit('handleCurrentChange', data)
}
/**
 *处理当前页码变化的方法
 * @param {number} data - 当前页码的值
 * @returns {void}
 */
const handleSizeChange = (data: number) => {
  console.log(data);
  emit('handleSizeChange', data)
}
/**
 * 点击创建新的账号
 */
const newaccount = () => {
  router.push('/foundaccount')
  useLeftList.changemate('')
  useLeftList.changeCurrentname('新建浏览器')
  sessionStorage.setItem('userStoreName', 'aa')
}
/**
 * 选择发生变化时触发
 */
const handleSelectionChange = (val: User[]) => {
  emit('multipleSelectionlist', val)
}


/**
 * 弹窗
 * @param data 打开弹窗
 */
const openpopup = (data: string) => {
  emit('openoff', data)
}

const stateishow = ref([
  {
    c1: true,
    text: "序号",
    id: 0,
  },
  {
    c1: true,
    text: "分组",
    id: 1,
  },
  {
    c1: true,
    text: "名称",
    id: 2,
  },
  {
    c1: true,
    text: "账号密码",
    id: 3,
  },
  {
    c1: true,
    text: "IP",
    id: 4,
  },
  {
    c1: true,
    text: "备注",
    id: 5,
  },
  {
    c1: true,
    text: "标签",
    id: 6,
  },
  {
    c1: true,
    text: "授权人",
    id: 7,
  },
  {
    c1: true,
    text: "创建时间",
    id: 8,
  },
  {
    c1: true,
    text: "设置星标",
    id: 9,
  },
])
const initpage = () => {
  tagcolorlist.value = Array.from({ length: 10 }, () => Math.floor(Math.random() * 5))
}
onMounted(() => {
  initpage()
})
</script>

<style scoped lang="less">
@import './accmain.less';

.tags {
  height: 55px;

  :deep(.el-tag) {
    height: 22px !important;
    transform: scale(0.9);
    font-weight: 500;
  }


}

.hander {
  justify-content: space-around;
}

.table-wrapper {
  // height: calc(100vh - 250px);
  // overflow-y: auto;
  padding: 10px;
}

.opts:hover {
  color: @fontactive;
}

.opts {
  padding: 16px 10px 0;

  >i {
    padding-right: 5px;
  }
}

.opts:nth-child(1) {
  padding-top: unset;
  padding-top: 7px;
}

.opts:nth-child(6) {
  padding-top: unset;
  padding-bottom: 7px;
}

.pagination-wrapper {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
}

.zmhttp {
  color: #999999;
}

.iconmar {
  padding-right: 5px;
}

.tagfa {
  align-items: flex-start;

  &.active {
    .tags {
      height: unset;
    }
  }

  .warpno {
    word-wrap: break-word;
  }
}

.iconimage {
  // width: 19px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
}

.qidong {
  display: flex;
  align-items: center;
}

:deep(.el-table) {
  --el-table-row-hover-bg-color: #F1F4FF;
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(43, 83, 229, 0.2);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(43, 83, 229, 0.2);

  border-radius: 10px;
  //box-shadow: 0px 0px 10px 0px rgb(43 83 229 / 20%);

  .el-table__header-wrapper tr th.el-table-fixed-column--left.is-last-column::before,
  .el-table__body-wrapper tr td.el-table-fixed-column--left.is-last-column::before {
    box-shadow: var(--el-table-fixed-left-column);
  }

  .el-table__header-wrapper tr th.el-table-fixed-column--right.is-first-column::before,
  .el-table__body-wrapper tr td.el-table-fixed-column--right.is-first-column::before {
    box-shadow: var(--el-table-fixed-right-column);
  }

  .el-table__header-wrapper {
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

  .el-table__body-wrapper {
    .el-table__body {
      .el-table__cell {
        font-family: Source Han Sans CN-Normal, Source Han Sans CN, serif;
        font-weight: 350;
        color: #333333;
      }

      .el-table__row.hover-row {
        .icon-edit {
          opacity: 1;
        }
      }
    }
  }
}

.iconfont {
  margin-left: 5px;
}
</style>
