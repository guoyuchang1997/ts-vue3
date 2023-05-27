import { type } from "os";

/**
 * 平台设备
 */
export interface Itltle {
  /**
   * 标题
   */
  name: string;
  /**
   * 宽度
   */
  width: string;
  /**
   * 代理名称
   */
  code: string;
  /**
   * 渲染类型
   */
  tpl?: string;
}
export interface Idev extends Itltle {
  /**
   * 这是头部
   */
  title: string
}
export interface Itltles {
  /**
   * 设备id
   */
  id: Number | string;
  [key: string]: any;
}
export const information = [
  {
    name: "用户名",
    width: "150px",
    code: "device_name",
  },
  {
    name: "企业登录密码",
    width: "120px",
    code: "device_name",
  },
  {
    name: "角色",
    width: "80px",
    code: "device_name",
  },
  {
    name: "部门",
    width: "80px",
    code: "device_name",
  },
  {
    name: "姓名",
    width: "120px",
    code: "device_name",
  },
  {
    name: "联系方式",
    width: "160px",
    code: "device_name",
  },
];
// ?????
export const inviteCol = {
  0: [
    {
      name: "申请时间",
      width: "20%",
      code: "updated_at",
    },
    {
      name: "姓名",
      width: "30%",
      code: "name",
    },
    {
      name: "联系方式",
      width: "30%",
      code: "mobile",
      tpl: "hl",
    },
    {
      name: "操作",
      width: "160px",
      code: "id",
      tpl: "action",
    },
  ],
  1: [
    {
      name: "申请时间",
      width: "10%",
      code: "created_at",
    },
    {
      name: "姓名",
      width: "10%",
      code: "name",
    },
    {
      name: "联系方式",
      width: "10%",
      code: "mobile",
      tpl: "hl",
    },
    {
      name: "所在部门",
      width: "10%",
      code: "user",
      tpl: "departement",
    },
    {
      name: "角色",
      width: "10%",
      code: "user",
      tpl: "role",
    },
    {
      name: "操作人",
      width: "10%",
      code: "admin",
      tpl: "true_name",
    },
    {
      name: "操作时间",
      width: "10%",
      code: "updated_at",
    },
  ],
  2: [
    {
      name: "申请时间",
      width: "10%",
      code: "created_at",
    },
    {
      name: "姓名",
      width: "15%",
      code: "name",
    },
    {
      name: "联系方式",
      width: "15%",
      code: "mobile",
    },
    {
      name: "拒绝原因",
      width: "15%",
      code: "reason",
      tpl: "invite-remark",
    },
    {
      name: "操作人",
      width: "10%",
      code: "admin",
      tpl: "true_name",
    },
    {
      name: "操作时间",
      width: "10%",
      code: "updated_at",
    },
  ],
};

// 角色列表模型
export const roleCol = [
  {
    name: "角色",
    width: "10%",
    code: "role_slug",
    tpl: "role",
  },
  {
    name: "角色成员",
    width: "30%",
    code: "users_name",
    tpl: "member",
  },
  {
    name: "描述",
    width: "25%",
    code: "role_desc",
    tpl: "desc",
  },
  {
    name: "操作",
    width: "20%",
    code: "id",
    tpl: "action",
  },
];

// 代理列表模型(平台代理)
export const deviceCol = [
  {
    name: "代理名称",
    width: "10%",
    code: "device_name",
    tpl: "device_name",
    title: '123213'
  },
  {
    name: "IP",
    width: "10%",
    code: "ip_address",
    tpl: "dev_ip",
  },
  {
    name: "绑定账号",
    width: "10%",
    code: "account",
    tpl: "accounts",
  },
  {
    name: "IP地址",
    width: "10%",
    code: "vtype_text",
    tpl: "types",
  },
  {
    name: "代理机型",
    width: "10%",
    code: "device_model",
    tpl: "typejx",
  },
  {
    name: "代理标签",
    width: "10%",
    code: "tag_names",
    tpl: "tag_names",
  },
  {
    name: "自动续费",
    width: "120px",
    code: "auto_renew",
    tpl: "desc",
  },
  {
    name: "代理状态",
    width: "120px",
    code: "status_text",
    tpl: "status",
  },
  {
    name: "代理到期时间",
    width: "140px",
    code: "expired_time",
    tpl: "expTime",
  },
  {
    name: "最后登录时间",
    width: "10%",
    code: "updated_at",
  },
  {
    name: "操作",
    width: "180px",
    code: "id",
    tpl: "action",
  },
];
// 自有代理
export const customerDeviceCol = [
  {
    name: "代理名称",
    width: "10%",
    code: "device_name",
    tpl: "device_name",
  },
  {
    name: "代理信息",
    width: "10%",
    code: "host",
    tpl: "action2",
  },
  {
    name: "绑定账号",
    width: "10%",
    code: "account",
    tpl: "deviceaccount",
  },
  {
    name: "代理归属",
    width: "10%",
    code: "device_attribution",
    tpl: "type",
  },
  {
    // 自有代理不需要
    name: "代理功能",
    width: "10%",
    code: "is_proxy_text",
    tpl: "functi",
  },
  {
    name: "代理标签",
    width: "10%",
    code: "tag_names",
    tpl: "tag_names",
  },
  // {
  //     name: "自动续费",
  //     width: "80px",
  //     code: 'auto',
  //     tpl: "desc"
  // },
  {
    name: "代理状态",
    width: "80px",
    code: "status",
    tpl: "statuss",
  },

  {
    name: "最后登录时间",
    width: "10%",
    code: "last_login",
    tpl: "action2",
  },
  {
    name: "操作",
    width: "100px",
    code: "id",
    tpl: "action2",
  },
];
// 单个代理添加
export const addcustomer = [
  {
    name: "代理名称",
    width: "25%",
    code: "device_name",
  },
  {
    name: "代理地址或域名",
    width: "25%",
    code: "device_name",
  },
  {
    name: "端口",
    width: "25%",
    code: "device_name",
  },
  {
    name: "检测结果",
    width: "25%",
    code: "device_name",
  },
];

export const account = [
  {
    name: "所属平台/自定义网址",
    width: "150px",
    code: "device_name",
  },
  {
    name: "账号名称",
    width: "120px",
    code: "device_name",
  },
  {
    name: "登录账号",
    width: "120px",
    code: "device_name",
  },
  {
    name: "登录密码",
    width: "120px",
    code: "device_name",
  },
  {
    name: "Cookie",
    width: "160px",
    code: "device_name",
  },
  {
    name: "代理类型",
    width: "160px",
    code: "device_name",
  },
  {
    name: "设备代理信息",
    width: "160px",
    code: "device_name",
  },
  {
    name: "UA",
    width: "160px",
    code: "device_name",
  },
  {
    name: "标签",
    width: "160px",
    code: "device_name",
  },
  {
    name: "授权成员",
    width: "160px",
    code: "device_name",
  },
];
