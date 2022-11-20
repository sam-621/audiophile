import { About, Category, Footer, MainLayout } from '@/front-components'

import { HomeHeader } from './components/HomeHeader'

export const HomeView = () => {
  return (
    <>
      <HomeHeader />
      <MainLayout>
        <Category />
        <About />
      </MainLayout>
      <Footer />
    </>
  )
}
