export interface TableListItem {
  id: number;
  departmentName: string; // 部门名称
  departmentNum: number; // 人数
  divisionManager: string; // 部门经理
  children?: TableListItem[]; // 子部门
}