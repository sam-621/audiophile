export interface IProduct {
  slug: string
  name: string
  image: TImage
  category: TCategory
  categoryImage: TImage
  new: boolean
  price: number
  description: string
  features: string
  includes: TIncludes[]
  gallery: TGallery
  others: TOthers[]
}

export type TCategory = 'earphones' | 'headphones' | 'speakers'

export type TImage = {
  mobile: string
  tablet: string
  desktop: string
}

export type TIncludes = {
  quantity: number
  item: string
}

export type TOthers = {
  slug: string
  name: string
  image: TImage
}

export type TGallery = {
  first: TImage
  second: TImage
  third: TImage
}
