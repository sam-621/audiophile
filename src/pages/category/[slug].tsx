import { ProductService } from '@/api-services/products.service'
import { PathPages } from '@/front-interfaces'
import { IProduct, TCategory } from '@/shared/interfaces/product'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const CategoryPage: NextPage<Props> = ({ products }) => {
  return <h1>Categories</h1>
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
      products: productsByCategory
    }
  }
}

type Params = ParsedUrlQuery & {
  slug: TCategory
}

type Props = {
  products: IProduct[]
}

export default CategoryPage
