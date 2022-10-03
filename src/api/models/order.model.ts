import { IOrder, TOrderOwner, TProductOrder } from '@/shared/interfaces/order.interface'
import { TImage } from '@/shared/interfaces/product.interface'
import { model, Schema } from 'mongoose'

const orderOwnerSchema = new Schema<TOrderOwner>({
  ownerId: { type: 'ObjectId', required: true },
  name: { type: String, require: true },
  email: { type: String, require: true }
})

export const imageSchema = new Schema<TImage>({
  mobile: { type: String, required: true },
  tablet: { type: String, required: true },
  desktop: { type: String, required: true }
})

const productSchema = new Schema<TProductOrder>({
  description: { type: String, required: true },
  image: { type: imageSchema, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true }
})

export const orderSchema = new Schema<IOrder>({
  owner: {
    type: orderOwnerSchema,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  updated_at: {
    type: Date,
    required: false,
    default: new Date()
  },
  products: [
    {
      type: productSchema,
      required: true
    }
  ]
})

export const OrderModel = model<IOrder>('orders', orderSchema)
