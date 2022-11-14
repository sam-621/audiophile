import { FC } from 'react'
import Image from 'next/image'

import { Button } from '../custom'

export const CategoryCard: FC<Props> = ({ product }) => {
  return (
    <div className="bg-cards rounded-lg grid pb-6 h-44">
      <div className="flex justify-center flex-col relative bottom-14">
        <div className="flex justify-center">
          <Image
            width={150}
            height={150}
            src={`/img/shared/desktop/image-category-thumbnail-${product}.png`}
          />
        </div>
        <h3 className="text-center m-0 mb-4 font-bold" style={{ letterSpacing: 1 }}>
          HEADPHONES
        </h3>
        <div className="flex justify-center">
          <Button variant="text" link={{ href: `/category/${product}` }} text="SHOP" />
        </div>
      </div>
    </div>
  )
}

type Props = {
  product: 'speakers' | 'headphones' | 'earphones'
}
