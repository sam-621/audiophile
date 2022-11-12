import axios from 'axios'

import { IProduct } from '@/shared/interfaces/product'

export const getAllProducts = async (): Promise<IProduct[]> => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/products/all`)

  return res.data
}
