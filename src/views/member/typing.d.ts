export interface TableData {
  id: number // id
  last_login_at: string // 最后登录时间
  is_online: number // 是否在线
  true_name: string // 真实姓名
  mobile: string // 手机号
  name: string // 姓名/账号
  company: string // 公司
  role_slugs: string // 角色
  role_ids: string // 角色
  status: number // 状态
  mobile: string // 手机号
  account_ids: (string | number)[] // 授权的账号
  dept: { id: number; department_name: string } // 部门
}

export interface accountData {
  id: number // id
  nick_name: string // 昵称
  platform: string // 平台
  img: string // 头像
  platforms: string // 平台
  platform: string // 平台
  dept?: { id: number; department_name: string } // 部门
  account_ids: (string | number)[] // 授权的账号
}
