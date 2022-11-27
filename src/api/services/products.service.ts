import { HttpStatusCodes } from '@/api-constants/status-codes'
import { ServiceResponse } from '@/api-interfaces/utils.interface'
import { ProductRepository } from '@/api-repositories/products.repository'
import { IProduct, TCategory } from '@/shared/interfaces/product'
import { TMongoId } from '@/shared/interfaces/utils'

export class ProductService {
  static async getAllProducts(): Promise<ServiceResponse<IProduct[]>> {
    const productRepository = new ProductRepository()
    const products = await productRepository.find<IProduct>()

    return new ServiceResponse(products, 'OK', HttpStatusCodes.OK)
  }

  static async getProductById(id: TMongoId): Promise<ServiceResponse<IProduct>> {
    const productRepository = new ProductRepository()
    const product = await productRepository.findOneById<IProduct>(id)

    return new ServiceResponse(product, 'OK', HttpStatusCodes.OK)
  }

  static async getProductsByCategory(category: TCategory): Promise<ServiceResponse<IProduct[]>> {
    const productRepository = new ProductRepository()
    const products = await productRepository.find<IProduct>({ category: category })

    return new ServiceResponse(products, 'OK', HttpStatusCodes.OK)
  }
}
