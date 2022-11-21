import { Button, NavSection } from '@/front-components'
import { useProductsContext } from '@/front-contexts'

const DEFAULT_NEW_PRODUCT = 'XX99 Mark II Headphones'

export const HomeHeader = () => {
  const { newProducts } = useProductsContext()
  const newHeadphones = newProducts.find(product => product.name === DEFAULT_NEW_PRODUCT)

  return (
    <>
      <header className="bg-[#121212] h-screen mb-10 md:mb-24 lg:mb-32 ">
        <NavSection />
        <div className="h-3/4 flex px-6 lg:px-28 xl:px-40 lg:py-0 items-center lg:justify-between overflow-hidden z-50">
          <div className="z-50">
            <div className="flex justify-center lg:justify-start mb-4 gap-2">
              <span style={{ letterSpacing: 10 }} className="text-subtitle text-sm">
                NEW
              </span>
              <span style={{ letterSpacing: 10 }} className="text-subtitle text-sm">
                PRODUCT
              </span>
            </div>
            <h1 className="text-white text-center mb-6 text-4xl font-bold lg:text-start xl:text-6xl">
              {newHeadphones?.name}
            </h1>
            <p className="text-subtitle text-center text-base mb-7 lg:text-start">
              {newHeadphones?.description}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="base"
                text="SEE PRODUCT"
                link={{ href: `/products/${newHeadphones?.slug}` }}
              />
            </div>
          </div>
          <div className="absolute z-0 right-0 left-0 overflow-hidden sm:top-0 sm:bottom-0 md:h-screen lg:block lg:static lg:h-auto">
            <img src="/img/home/desktop/image-hero.png" alt="Hero" className="object-contain" />
          </div>
        </div>
      </header>
    </>
  )
}
