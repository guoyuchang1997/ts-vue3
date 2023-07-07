export interface Tab {
  label: string
  value: number
}

export interface PendingApprovalTable {
  id: number
  applicationTime: string // 申请时间
  name: string // 姓名
  mobile: string // 手机号
}

export interface AlreadyPassedTable {
  id: number
  applicationTime: string // 申请时间
  name: string // 姓名
  mobile: string // 手机号
  department: string // 部门
  role: string // 角色
  operator: string // 操作人
  operationTime: string // 操作时间
}

export interface RejectedTable {
  id: number
  applicationTime: string // 申请时间
  name: string // 姓名
  mobile: string // 手机号
  rejectReason: string // 驳回原因
  operator: string // 操作人
  operationTime: string // 操作时间
}
