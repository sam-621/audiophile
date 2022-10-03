import {
  IProduct,
  TGallery,
  TImage,
  TIncludes,
  TOthers
} from '@/shared/interfaces/product.interface'
import { model, Schema } from 'mongoose'

export const imageSchema = new Schema<TImage>({
  mobile: { type: String, required: true },
  tablet: { type: String, required: true },
  desktop: { type: String, required: true }
})

export const includesSchema = new Schema<TIncludes>({
  quantity: { type: Number, required: true },
  item: { type: String, required: true }
})

const gallerySchema = new Schema<TGallery>({
  first: {
    type: imageSchema,
    required: true
  },
  second: {
    type: imageSchema,
    required: true
  },
  third: {
    type: imageSchema,
    required: true
  }
})

const othersSchema = new Schema<TOthers>({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: {
    type: imageSchema,
    required: true
  }
})

const productSchema = new Schema<IProduct>({
  slug: {
    type: String,
    required: true
  },
  name: {
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
  categoryImage: {
    type: imageSchema,
    required: true
  },
  new: {
    type: Boolean,
    required: false,
    default: false
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: String,
    required: true
  },
  includes: [
    {
      type: includesSchema,
      required: true
    }
  ],
  gallery: {
    type: gallerySchema,
    required: true
  },
  others: [
    {
      type: othersSchema,
      required: false,
      default: []
    }
  ]
})

export const ProductModel = model<IProduct>('products', productSchema)
