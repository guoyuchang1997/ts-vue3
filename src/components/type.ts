/**
 * 角标组件
 * @param {string} number 角标数字
 * @param {string} bgColor 角标背景色
 * @param {string} top 角标距离顶部距离
 * @param {string} left 角标距离左侧距离
 */
export interface BadgeProps {
  title: string
  type: '0' | '1'
  description: string
}
