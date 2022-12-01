import { About, Categories, MainLayout } from '@/front-components'

import { HomeHeader } from './components/HomeHeader'

export const HomeView = () => {
  return (
    <>
      <HomeHeader />
      <MainLayout>
        <Categories />
        <About />
      </MainLayout>
    </>
  )
}
