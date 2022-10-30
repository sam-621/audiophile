import { ServiceResponse } from '@/front-interfaces/services/http-request.interface'
import { IProduct } from '@/shared/interfaces/product.interface'
import { TEntityWithId } from '@/shared/interfaces/utils'
import HttpRequest from './http-request.service'

class ProductService extends HttpRequest {
  async getAll(): Promise<ServiceResponse<TEntityWithId<IProduct>[]>> {
    this.configRequest({ endpoint: '/api/products/all' })

    const res = await this.get<TEntityWithId<IProduct>[]>()

    return new ServiceResponse(res.data, res)
  }
}

export const productService = new ProductService()
