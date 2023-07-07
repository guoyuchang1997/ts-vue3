import { ToRef, UnwrapNestedRefs } from 'vue'

export interface SearchData {
  proxyType: string | number
  keyword: string
}

export interface UseSearch {
  handleSearch: (data: SearchData) => void
  proxyType: ToRef<UnwrapNestedRefs<SearchData>['proxyType']>
  keyword: ToRef<UnwrapNestedRefs<SearchData>['keyword']>
}

export interface Tag {
  name: string
  type: string
}

export interface TableData {
  id: number
  name: string
  ip: string
  address: string
  type: number
  account: string
  state: number
  remark: string
  tags: Tag[]
}
