import { HttpStatusCodes } from '@/api-constants/status-codes'
import { AddToCartInput } from '@/api-interfaces/cart.interfaces'
import { ServiceResponse } from '@/api-interfaces/utils.interface'
import { UserRepository } from '@/api-repositories/user.repository'
import { getTotalCartPrice } from '@/api-utils/payment'
import { IUser } from '@/shared/interfaces/user'

export class CartService {
  static async add(input: AddToCartInput) {
    const { products, id: userId } = input
    const userRepository = new UserRepository()
    const currentUser = await userRepository.findOneById<IUser>(userId)
    const newCartProducts = [...products, ...currentUser.cart.products]
    const newCartAmount = getTotalCartPrice(newCartProducts)

    const newUser: IUser = {
      ...currentUser,
      cart: {
        amount: newCartAmount,
        products: newCartProducts
      }
    }

    const userUpdated = await userRepository.update<IUser>(userId, newUser)

    return new ServiceResponse(userUpdated, 'USER CART UPDATED', HttpStatusCodes.OK)
  }
}
