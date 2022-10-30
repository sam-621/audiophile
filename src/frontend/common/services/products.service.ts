import HttpRequest from './http-request.service'

export class ProductService extends HttpRequest {
  async getAll() {
    this.configRequest({ endpoint: '/api/products/all' })
  }
}
