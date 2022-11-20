import { Button, Nav } from '@/front-components'
import { useProductsContext } from '@/front-contexts'

export const HomeHeader = () => {
  const { newProduct } = useProductsContext()

  return (
    <header className="bg-[#121212] h-screen mb-10 md:mb-24 lg:mb-32">
      <Nav />
      <header className="h-3/4 flex px-6 lg:px-28 xl:px-40 lg:py-0 items-center lg:justify-between">
        <div className="">
          <div className="flex justify-center lg:justify-start mb-4 gap-2">
            <span style={{ letterSpacing: 10 }} className="text-subtitle text-sm">
              NEW
            </span>
            <span style={{ letterSpacing: 10 }} className="text-subtitle text-sm">
              PRODUCT
            </span>
          </div>
          <h1 className="text-white text-center mb-6 text-4xl font-bold lg:text-start xl:text-6xl">
            {newProduct?.name}
          </h1>
          <p className="text-subtitle text-center text-base mb-7 lg:text-start">
            {newProduct?.description}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              variant="base"
              text="SEE PRODUCTS"
              link={{ href: `/products/${newProduct?.slug}` }}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/img/home/desktop/image-hero.png" alt="Hero" />
        </div>
      </header>
    </header>
  )
}
