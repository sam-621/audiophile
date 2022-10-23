import { THashMap } from '@/shared/interfaces/utils'

export type TRequestOptions = {
  endpoint: string
  apiDomain?: string
  headers?: THashMap
}
