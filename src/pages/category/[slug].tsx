import { ProductService } from '@/api-services/products.service'
import { NavSection } from '@/front-components'
import { ProductsProvider } from '@/front-contexts'
import { PathPages } from '@/front-interfaces'
import { IProduct, TCategory } from '@/shared/interfaces/product'
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
  const categories: TCategory[] = ['earphones', 'headphones', 'speakers']
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
      title: slug
    }
  }
}

type Params = ParsedUrlQuery & {
  slug: TCategory
}

type Props = {
  products: IProduct[]
  title: TCategory
}

export default CategoryPage
