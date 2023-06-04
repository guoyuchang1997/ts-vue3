export type Title = {
  /**
   * icon图标
   */
  icon: String;
  /**
   * 列表头
   */
  text?: String;
  /**
   * 路由
   */
  router: String;
  /**
   * 显示
   */
  mate: String
};
export type Icon = {
  /**
   * title 图标
   */
  headline: String;
  /**
   * 标题
   */
  title: String;
};
export const commonmin_Commonly = [
  '账号',
  '快速',
  '回收'
]
export const commonmax_Commonly = [
  '账号管理',
  '快速启动',
  '回收站'
]
export const titlelist: Title[] = [
  {
    icon: "icon-zhanghao",
    router: '/',
    mate: 'Account'
  },
  {
    icon: "icon-a-ixintucom1",
    router: '/',
    mate: 'fast'
  },
  {
    icon: "icon-a-huishou1",
    router: '/',
    mate: 'Recycling'
  },
];


export const commonmin_application = [
  '代理',
  '插件',
  '同步',
  '推广',
]
export const commonmax_application = [
  '代理管理',
  '代理管理',
  '窗口同步',
  '推广奖励',
]
export const applicationlist: Title[] = [
  {
    icon: "icon-daili",
    router: '/',
    mate: 'agency'
  },
  {
    icon: "icon-chajian",
    router: '/',
    mate: 'plugin'
  },
  {
    icon: "icon-a-guanli1",
    router: '/',
    mate: 'window'
  },
  {
    icon: "icon-tuiguang",
    router: '/',
    mate: 'promotion'
  },
]

export const commonmax_automation = [
]
export const commonmin_automation = [
]

export const automationlist: Title[] = [
  {
    icon: "icon-a-api1",
    text: "API",
    router: '/',
    mate: 'api'
  },
  {
    icon: "icon-rpa",
    text: "RPA",
    router: '/',
    mate: 'rpa'
  },
];

export const commonmax_teamlist = [
  '费用管理',
  '成员管理',
  '部门管理',
  '角色管理',
]
export const commonmin_teamlist = [
  '费用',
  '成员',
  '部门',
  '角色'
]

export const teamlist:Title[]  = [
  {
    icon: "icon-a-feiyong",
    router: '/management',
    mate: 'expense'
  },
  {
    icon: "icon-chengyuan",
    router: '/management',
    mate: 'member'
  },
  {
    icon: "icon-bumen",
    router: '/management',
    mate: 'department'
  },
  {
    icon: "icon-juese",
    router: '/management',
    mate: 'role'
  },
];