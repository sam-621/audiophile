import { ICart, TCartProduct } from '@/shared/interfaces/cart.interface'
import { IUser, TAddress } from '@/shared/interfaces/user.interface'
import { model, Schema } from 'mongoose'
import { orderSchema } from './order.model'
import { imageSchema, includesSchema } from './product.model'

const cartProductSchema = new Schema<TCartProduct>({
  name: {
    type: String,
    required: true
  },
  _id: {
    type: 'ObjectId',
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  image: {
    type: imageSchema,
    required: true
  },
  category: {
    type: String,
    enum: ['earphones', 'headphones', 'speakers'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  includes: [
    {
      type: includesSchema,
      required: true
    }
  ],
  price: {
    type: Number,
    required: true
  },
  features: {
    type: String,
    required: true
  }
})

const cartSchema = new Schema<ICart>({
  amount: {
    type: Number,
    required: true
  },
  products: [{ type: cartProductSchema, required: false, default: [] }]
})

const addressSchema = new Schema<TAddress>({
  street_1: {
    type: String,
    required: true
  },
  street_2: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  }
})

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: addressSchema,
    required: false,
    default: {
      city: '',
      country_code: '',
      postal_code: '',
      street_1: '',
      street_2: ''
    }
  },
  shopping_history: [
    {
      type: orderSchema,
      required: false,
      default: []
    }
  ],
  cart: {
    type: cartSchema,
    required: false,
    default: {
      amount: 0,
      products: []
    }
  }
})

export const UserModel = model<IUser>('users', userSchema)
