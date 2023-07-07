import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'accoun',
          component: () => import('@/views/account.vue'),
          meta: {
            menu: 'accoun',
          },
        },
        {
          path: '/management',
          name: 'management',
          component: () => import('@/views/management.vue'),
          meta: {
            menu: 'management',
          },
        },
        {
          path: '/expense',
          name: 'expense',
          component: () => import('@/views/expense/index.vue'),
          meta: {
            menu: 'expense',
          },
        },
        // 自有代理
        {
          path: '/own-proxy',
          name: 'ownProxy',
          component: () => import('@/views/ownProxy/index.vue'),
          meta: {
            menu: 'ownProxy',
          },
        },
        {
          // 平台代理
          path: '/plat-proxy',
          name: 'platProxy',
          component: () => import('@/views/platProxy/index.vue'),
          meta: {
            menu: 'platform',
          },
        },
        {
          // 代理续费
          path: '/proxy-renewal',
          name: 'proxyRenewal',
          component: () => import('@/views/proxyRenewal/index.vue'),
          children: [
            {
              path: '/proxy-renewal/step-1',
              name: 'selectPlan',
              component: () => import('@/views/proxyRenewal/selectPlan.vue'),
              meta: {
                menu: 'platform',
              },
            },
            {
              path: '/proxy-renewal/step-2',
              name: 'orderInfo',
              component: () => import('@/views/proxyRenewal/orderInfo.vue'),
              meta: {
                menu: 'platform',
              },
            },
            {
              path: '/proxy-renewal/step-3',
              name: 'success',
              component: () => import('@/views/proxyRenewal/success.vue'),
              meta: {
                menu: 'platform',
              },
            },
          ],
          meta: {
            menu: 'platform',
          },
        },
        {
          // 三方代理
          path: '/tripartite-proxy',
          name: 'tripartiteProxy',
          component: () => import('@/views/thirdPartyProxy/index.vue'),
          meta: {
            menu: 'tripartite',
          },
        },
        {
          // 插件中心
          path: '/plugin-center',
          name: 'pluginCenter',
          component: () => import('@/views/pluginsCenter/index.vue'),
          meta: {
            menu: 'pluginCenter',
          },
        },
        {
          // 插件分类
          path: '/all-sort',
          name: 'allSort',
          component: () => import('@/views/pluginsCenter/allSort/index.vue'),
          meta: {
            menu: 'pluginCenter',
          },
        },
        {
          // 插件详情
          path: '/plugin-detail',
          name: 'pluginDetail',
          component: () => import('@/views/pluginsCenter/detail/index.vue'),
          meta: {
            menu: 'pluginCenter',
          },
        },
        {
          // 我的插件
          path: '/my-plugin',
          name: 'myPlugin',
          component: () => import('@/views/pluginsCenter/myPlugin/index.vue'),
          meta: {
            menu: 'pluginCenter',
          },
        },
        {
          // 窗口同步
          path: '/winsync',
          name: 'winsync',
          component: () => import('@/views/winsync.vue'),
          meta: {
            menu: 'winsync',
          },
        },
        {
          // 推广奖励
          path: '/extend',
          name: 'extend',
          component: () => import('@/views/extend.vue'),
          meta: {
            menu: 'extend',
          },
        },
        {
          // 回收站
          path: '/Recyclebin',
          name: 'Recyclebin',
          component: () => import('@/views/Recyclebin.vue'),
          meta: {
            menu: 'Recyclebin',
          },
        },
        {
          // api
          path: '/api',
          name: 'api',
          component: () => import('@/views/api.vue'),
          meta: {
            menu: 'api',
          },
        },
        {
          // rpa
          path: '/rpa',
          name: 'rpa',
          component: () => import('@/views/rpa.vue'),
          meta: {
            menu: 'rpa',
          },
        },
        {
          // 所有成员
          path: '/member',
          name: 'member',
          component: () => import('@/views/member/index.vue'),
          meta: {
            menu: 'member',
          },
        },
        {
          // 申请审批
          path: '/apply-approval',
          name: 'Applypproval',
          component: () => import('@/views/applyApproval/index.vue'),
          meta: {
            menu: 'Applypproval',
          },
        },
        {
          // 流程管理
          path: '/Processmanagement',
          name: 'Processmanagement',
          component: () => import('@/views/rpa/Processmanagement.vue'),
          meta: {
            menu: 'Processmanagement',
          },
        },
        {
          // 流程市场
          path: '/Processmarket',
          name: 'Processmarket',
          component: () => import('@/views/rpa/processMarket/Processmarket.vue'),
          meta: {
            menu: 'Processmarket',
          },
        },
        {
          // 计划管理
          path: '/Planmanagement',
          name: 'Planmanagement',
          component: () => import('@/views/rpa/programManagement/Planmanagement.vue'),
          meta: {
            menu: 'Planmanagement',
          },
        },
        {
          // 任务日志
          path: '/Tasklog',
          name: 'Tasklog',
          component: () => import('@/views/rpa/taskLog/Tasklog.vue'),
          meta: {
            menu: 'Tasklog',
          },
        },
        {
          // 部门管理
          path: '/department',
          name: 'department',
          component: () => import('@/views/department/index.vue'),
          meta: {
            menu: 'department',
          },
        },
        {
          // 角色管理
          path: '/role',
          name: 'role',
          component: () => import('@/views/role/index.vue'),
          meta: {
            menu: 'role',
          },
        },
        {
          // 登录日志
          path: '/loginlog',
          name: 'loginlog',
          component: () => import('@/views/loginlog.vue'),
          meta: {
            menu: 'loginlog',
          },
        },
        {
          // 操作日志
          path: '/operationlog',
          name: 'operationlog',
          component: () => import('@/views/operationlog.vue'),
          meta: {
            menu: 'operationlog',
          },
        },
        {
          // 权限日志
          path: '/authoritylog',
          name: 'authoritylog',
          component: () => import('@/views/authoritylog.vue'),
          meta: {
            menu: 'authoritylog',
          },
        },
        {
          // 成员登录控制
          path: '/control',
          name: 'control',
          component: () => import('@/views/control.vue'),
          meta: {
            menu: 'control',
          },
        },
        {
          // 登录请求
          path: '/request',
          name: 'request',
          component: () => import('@/views/request.vue'),
          meta: {
            menu: 'request',
          },
        },
        {
          // 设置
          path: '/setup',
          name: 'setup',
          component: () => import('@/views/setup.vue'),
          meta: {
            menu: 'setup',
          },
        },
        {
          // 设置
          path: '/foundaccount',
          name: 'foundaccount',
          component: () => import('~/foundaccount/index.vue'),
          meta: {
            menu: 'foundaccount',
          },
        },
        {
          // 帮助中心
          path: '/help',
          name: 'help',
          component: () => import('@/views/help/index.vue'),
          meta: {
            menu: 'help',
          },
        },
        {
          // 设置
          path: '/setting',
          name: 'setting',
          component: () => import('@/views/setting/index.vue'),
          meta: {
            menu: 'setting',
          },
        },
        {
          // 帮助中心
          path: '/messagesting',
          name: 'messagesting',
          component: () => import('@/views/messagesting.vue'),
          meta: {
            menu: 'messagesting',
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('~/login/index.vue'),
    },
    {
      // 指纹页面
      path: '/zw',
      name: 'zw',
      component: () => import('@/views/fingerprint.vue'),
      meta: {
        menu: 'zw',
      },
    },
  ],
})
export default router
