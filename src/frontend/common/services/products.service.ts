import { ServiceResponse } from '@/front-interfaces/services/http-request.interface'
import { IProduct } from '@/shared/interfaces/product.interface'
import { TEntityWithId } from '@/shared/interfaces/utils'
import { AxiosError } from 'axios'
import HttpRequest from './http-request.service'

class ProductService extends HttpRequest {
  async getAll(): Promise<ServiceResponse<TEntityWithId<IProduct>[] | null>> {
    this.configRequest({ endpoint: '/api/products/all' })

    try {
      const res = await this.get<TEntityWithId<IProduct>[]>()

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
