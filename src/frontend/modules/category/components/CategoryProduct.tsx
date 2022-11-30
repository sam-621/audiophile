import { Button } from '@/front-components'
import { IProduct } from '@/shared/interfaces/product'
import { FC } from 'react'

export const CategoryProduct: FC<Props> = ({ product, index }) => {
  const isEven = (index ?? 0) % 2 === 0
  return (
    <article
      className={`flex flex-col gap-8 items-center lg:${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="flex justify-center">
        <img
          src={`/img/product-${product.slug}/desktop/image-category-page-preview.jpg`}
          alt={product.name}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-6 md:mx-24">
        <div className="flex justify-center xl:justify-start">
          <span style={{ letterSpacing: 10 }} className="text-primary text-sm -mr-[10px]">
            NEW PRODUCT
          </span>
        </div>

        <h2 className="font-semibold text-center text-3xl xl:text-left xl:text-4xl">
          {product.name.toUpperCase()}
        </h2>
        <p className="text-subtitle text-center text-base font-light xl:text-left">
          {product.description}
        </p>
        <div className="flex justify-center xl:justify-start">
          <Button variant="base" text="SEE PRODUCT" link={{ href: `/products/${product.slug}` }} />
        </div>
      </div>
    </article>
  )
}

type Props = {
  product: IProduct
  index?: number
}
