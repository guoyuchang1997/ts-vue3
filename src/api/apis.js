export default {
  // 账号管理
  getplatform: 'GET,/api/v1/users/platform', // 平台

  // 成员
  memberList: 'GET,/api/v1/users', // 成员列表
  // 部门树
  departList: 'GET,/api/v1/users/department',
  // 账号管理
  accountList: 'GET,/api/v1/users/account/list', // 列表
  memberadds: 'POST,/api/v1/users/company/configureaccounts', // 成员授权
  getplaturl: 'GET,api/v1/users/customplatform', // 自定义平台
  addplaturl: 'POST,api/v1/users/customplatformedit', // 添加自定义平台
  deleplaturl: 'DEL,api/v1/users/customplatformedit', // 删除自定义平台
  getaccountlist: 'GET,api/v1/users/account/list', // 平台列表
  CancelStartarget: 'PUT,api/v1/users/account/curd', // 设置星标
  CancelStartargets: 'POST,api/v1/users/account/batchstar', // 批量设置星标
  // 平台代理
  getPlatformProxySummary: 'GET,/api/v1/users/device/vcnpsummary', // 平台代理统计信息
  getPlatformProxyList: 'GET,/api/v1/users/device/vcnplist', // 平台代理列表
  delPlatformProxy: 'DEL,/api/v1/users/device/vcnp', // 删除平台代理
  batchDelPlatformProxy: 'POST,/api/v1/users/device/batchdelete', // 批量删除平台代理
}
