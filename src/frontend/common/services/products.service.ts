import { AxiosError } from 'axios'

import { IProduct } from '@/shared/interfaces/product'

import { ServiceResponse } from '../interfaces/services'

import HttpRequest from './http-request.service'

class ProductService extends HttpRequest {
  async getAll(): Promise<ServiceResponse<IProduct[] | null>> {
    this.configRequest({ endpoint: 'http://localhost:8080/api/products/all' })

    try {
      const res = await this.get<IProduct[]>()

      return new ServiceResponse(res.data, res)
    } catch (error) {
      if (error instanceof AxiosError) {
        return new ServiceResponse(null, error.response!)
      }

      return new ServiceResponse(null, null)
    }
  }
}

export const productService = new ProductService()
