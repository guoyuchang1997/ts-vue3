/**
 * 网址是否合规
 */
 export const regUrl = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
/**
 * 字符串转数组
 */
export const  convertTagsToArray = (tags_name: string): string[]=> {
  return tags_name ? tags_name.split(",") : [];
}
export interface User {
  date: string
  name: string
  address: string
}
export const tagrandom = ['','success','danger','info','warning']