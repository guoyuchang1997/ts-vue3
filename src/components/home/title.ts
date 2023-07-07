export type Title = {
  /**
   * icon图标
   */
  icon: string
  /**
   * 列表头
   */
  text?: string
  /**
   * 路由
   */
  router: string
  /**
   * 显示
   */
  mate: string
  /**
   * 子集
   */
  children?: object
  /**
   * 名称
   */
  name: string
}
export type Icon = {
  /**
   * title 图标
   */
  headline: string
  /**
   * 标题
   */
  title: string
}
export const commonmin_Commonly = ['账号', '快速', '回收']
export const commonmax_Commonly = ['账号管理', '快速启动', '回收站']
export const titlelist: Title[] = [
  {
    icon: 'icon-zhanghao',
    router: '/',
    mate: 'accoun',
    name: '账号管理',
  },
  {
    icon: 'icon-1huojian',
    router: '/',
    mate: 'Quickstart',
    name: '快速启动',
  },
  {
    icon: 'icon-a-huishou1',
    router: '/Recyclebin',
    mate: 'Recyclebin',
    name: '回收站',
  },
]

export const commonmin_application = ['插件', '同步', '推广']
export const commonmax_application = ['插件中心', '窗口同步', '推广奖励']
export const applicationlist: Title[] = [
  {
    icon: 'icon-chajian',
    router: '/plugin-center',
    mate: 'plugin',
    name: '插件中心',
  },
  {
    icon: 'icon-a-tongbu1',
    router: '/winsync',
    mate: 'winsync',
    name: '窗口同步',
  },
  {
    icon: 'icon-tuiguang',
    router: '/extend',
    mate: 'extend',
    name: '推广奖励',
  },
]

export const commonmax_automation = []
export const commonmin_automation = []

export const automationlist: Title[] = [
  {
    icon: 'icon-a-api1',
    text: 'API',
    router: '/foundaccount',
    mate: 'api',
    name: 'API',
    children: [
      { headline: 'icon-rpa', title: 'RPA' },
      [
        {
          icon: 'icon-liucheng1',
          router: '/Processmanagement',
          mate: 'Processmanagement',
          text: 'RPA流程管理',
        },
        {
          icon: 'icon-a-liucheng11',
          router: '/Processmarket',
          mate: 'Processmarket',
          text: 'RPA流程市场',
        },
        {
          icon: 'icon-jihua1',
          router: '/Planmanagement',
          mate: 'Planmanagement',
          text: '计划管理',
        },
        {
          icon: 'icon-a-renwu11',
          router: '/Tasklog',
          mate: 'Tasklog',
          text: '任务日志',
        },
      ],
    ],
  },
]

export const commonmax_teamlist = ['费用管理', '部门管理', '角色管理']
export const commonmin_teamlist = ['费用', '部门', '角色']

export const teamlist: Title[] = [
  {
    icon: 'icon-a-feiyong',
    router: '/expense',
    mate: 'expense',
    name: '费用管理',
    children: [
      { headline: 'icon-chengyuan', title: '成员管理' },
      [
        {
          icon: 'icon-a-cy11',
          router: '/member',
          mate: 'member',
          text: '所有成员',
        },
        {
          icon: 'icon-a-sp11',
          router: '/apply-approval',
          mate: 'Applypproval',
          text: '申请审批',
        },
      ],
    ],
  },
  {
    icon: 'icon-bumen',
    router: '/department',
    mate: 'department',
    name: '部门管理',
  },
  {
    icon: 'icon-juese',
    router: '/role',
    mate: 'role',
    name: '角色管理',
  },
]
export const commonmax_management = ['登录日志', '操作日志', '权限日志', '成员登录控制', '登录请求', '账号设置']
export const commonmin_management = ['登录', '操作', '权限', '控制', '登录', '设置']
export const management: Title[] = [
  {
    icon: 'icon-denglu',
    router: '/loginlog',
    mate: 'loginlog',
    name: '登录日志',
  },
  {
    icon: 'icon-bianji',
    router: '/operationlog',
    mate: 'operationlog',
    name: '操作日志',
  },
  {
    icon: 'icon-quanxian',
    router: '/authoritylog',
    mate: 'authoritylog',
    name: '权限日志',
  },
  {
    icon: 'icon-chengyuan1',
    router: '/control',
    mate: 'control',
    name: '成员登录控制',
  },
  {
    icon: 'icon-qingqiu',
    router: '/request',
    mate: 'request',
    name: '登录请求',
  },
  {
    icon: 'icon-a-shezhi1',
    router: '/setup',
    mate: 'setup',
    name: '账号设置',
  },
]
export const commonmax_agency = ['平台代理', '自有代理', '三方代理']
export const commonmin_agency = ['平台', '自有', '三方']
export const agency: Title[] = [
  {
    icon: 'icon-a-pingtai1',
    router: '/plat-proxy',
    mate: 'platform',
    name: '平台代理',
  },
  {
    icon: 'icon-zhanghao',
    router: '/own-proxy',
    mate: 'ownProxy',
    name: '自有代理',
  },
  {
    icon: 'icon-bumen',
    router: '/tripartite-proxy',
    mate: 'tripartite',
    name: '三方代理',
  },
]
