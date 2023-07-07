/**
 * @interface QueryData
 * @description 平台代理列表查询参数
 */
export interface QueryData {
  /**
   * @property {string} device_name 设备
   */
  device_name?: string

  /**
   * @property {number} status 设备状态
   * @description 1:即将过期, 2:已过期, 3:未绑定, 4:无标签, 5:自动续费中, 6:未自动续费
   */
  status?: number

  /**
   * @property {number} tag_id 筛选标签
   */
  tag_id?: number

  /**
   * @property {number} limt 每页条数
   */
  limit?: number

  /**
   * @property {number} page 页码
   */
  page?: number
}

/**
 * @interface TableData
 * @description 平台代理列表项
 */
export interface TableData {
  tag?: string
  /**
   * @property {number} id 记录ID
   */
  id: number

  /**
   * @property {string} device_name 设备/代理名称
   */
  device_name: string

  /**
   * @property {string} ip_address 设备/代理IP
   */
  ip_address: string

  /**
   * @property {string} region_text 设备/代理地区
   */
  region_text: string

  /**
   * @property {string} vtype_text 云厂商名称
   */
  vtype_text: string

  /**
   * @property {string[]} account 绑定的账号
   */
  account: string[]

  /**
   * @property {string[]} tag_names 标签名称集合
   */
  tags: string[]

  /**
   * @property {string} status_text 代理状态
   * @description 运行中，创建中，已停止，创建失败
   */
  status_text: string

  /**
   * @property {string} auto_renew 是否开启自动续费
   * @description 1:开启, 0:关闭
   */
  auto_renew: string

  /**
   * @property {string} expired_time 到期时间
   */
  expired_time: string

  /**
   * @property {number} time_day_num 剩余天数
   */
  time_day_num: number

  /**
   * @property {string} last_login_at 最后登录时间
   */
  last_login_at: string

  /**
   * @property {boolean} showEditName 显示，隐藏编辑设备名称
   * @description 非接口返回字段，用于控制编辑设备名称输入框的显示和隐藏
   */
  showEditName?: boolean

  /**
   * @property {boolean} showEditTags 显示，隐藏编辑标签
   * @description 非接口返回字段，用于控制编辑设备标签输入框的显示和隐藏
   */
  showEditTags?: boolean

  /**
   * @property {string} tag 标签名称
   * @description 非接口返回字段，用于编辑标签时，输入框的值
   */
  tag?: string
}

export interface Pagination {
  currentPage: number
  pageSize: number
  pageSizes: number[]
  layout: string
  total: number
}

/**
 * @interface Summary
 * @description 平台代理各种设备统计信息
 */
export interface Sunmmary {
  /**
   * @property {number} all - 全部
   */
  all: number

  /**
   * @property {number} due_soon - 即将过期
   */
  due_soon: number

  /**
   * @property {number} expired - 已过期
   */
  expired: number

  /**
   * @property {number} no_bind - 未绑定
   */
  no_bind: number

  /**
   * @property {number} no_tag - 未打标签
   */
  no_tag: number

  /**
   * @property {number} auto_renew - 自动续费中
   */
  auto_renew: number

  /**
   * @property {number} no_auto_renew - 未开启自动续费
   */
  no_auto_renew: number
}
