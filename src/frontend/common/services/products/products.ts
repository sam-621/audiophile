import { ApiResponse } from '@/front-interfaces'
import { IProduct } from '@/shared/interfaces/product'

import { axiosClient } from '../config/axios'

export const getAllProducts = async (): Promise<IProduct[]> => {
  const res = await axiosClient.get<ApiResponse<IProduct[]>>(`/products/all`)

  return res.data.data
}
