import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ProductKeys } from 'frontend/common/services/config/query-key-factory'

import { Response } from '@/front-interfaces'
import { getAllProducts } from '@/front-services'
import { IProduct } from '@/shared/interfaces/product'

type TQueryFnData = IProduct[]
type TError = AxiosError<Response<TQueryFnData>>
type TOptions = UseQueryOptions<TQueryFnData, TError, TQueryFnData, QueryKey>

export const useAllProducts = (options?: TOptions) => {
  return {
    ...useQuery<TQueryFnData, TError>(ProductKeys.all, getAllProducts, options)
  }
}
