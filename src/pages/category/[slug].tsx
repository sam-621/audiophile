import { ProductService } from '@/api-services/products.service'
import { NavSection } from '@/front-components'
import { ProductsProvider } from '@/front-contexts'
import { PathPages } from '@/front-interfaces'
import { getProductCategoryName } from '@/front-utils'
import { IProduct, ProductCategory } from '@/shared/interfaces/product'
import { CategoryView } from 'frontend/modules/category'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const CategoryPage: NextPage<Props> = ({ products, title }) => {
  return (
    <ProductsProvider products={products}>
      <NavSection />
      <CategoryView title={title} />
    </ProductsProvider>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const categories: ProductCategory[] = [
    ProductCategory.EARPHONES,
    ProductCategory.HEADPHONES,
    ProductCategory.SPEAKERS
  ]
  const paths: PathPages = categories.map(category => ({
    params: {
      slug: category
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const { slug } = context.params as Params

  const { data } = await ProductService.getProductsByCategory(slug)

  const productsByCategory = data.map(product => ({ ...product, _id: product._id.toString() }))

  return {
    props: {
      products: productsByCategory,
      title: getProductCategoryName(slug)
    }
  }
}

type Params = ParsedUrlQuery & {
  slug: ProductCategory
}

type Props = {
  products: IProduct[]
  title: string
}

export default CategoryPage
