import { CategoryCard } from '../items'

export const Category = () => {
  return (
    <section className="grid gap-16 mt-20 md:flex md:justify-center">
      <CategoryCard product="headphones" />
      <CategoryCard product="speakers" />
      <CategoryCard product="earphones" />
    </section>
  )
}
