import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ProductKeys } from 'frontend/common/services/config/query-key-factory'

import { TResponse } from '@/front-interfaces'
import { getAllProducts } from '@/front-services'
import { IProduct } from '@/shared/interfaces/product'

type TQueryFnData = IProduct[]
type TError = AxiosError<TResponse<IProduct[]>>

export const useAllProducts = () => {
  return {
    ...useQuery<TQueryFnData, TError>(ProductKeys.all, getAllProducts)
  }
}
