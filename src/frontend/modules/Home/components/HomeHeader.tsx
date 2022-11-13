import { Button } from '@/front-components'
import { useProductsContext } from '@/front-contexts'

export const HomeHeader = () => {
  const { newProduct } = useProductsContext()

  return (
    <header className="bg-[#191919] px-6 py-28">
      <div className="flex justify-center mb-4 gap-2">
        <span style={{ letterSpacing: 10 }} className="text-subtitle">
          NEW
        </span>
        <span style={{ letterSpacing: 10 }} className="text-subtitle">
          PRODUCT
        </span>
      </div>
      <h1 className="text-white text-center mb-6 text-4xl font-bold">{newProduct?.name}</h1>
      <p className="text-subtitle text-center mb-7">{newProduct?.description}</p>
      <div className="flex justify-center">
        <Button
          variant="base"
          text="SEE PRODUCTS"
          link={{ href: `/products/${newProduct?.slug}` }}
        />
      </div>
    </header>
  )
}
