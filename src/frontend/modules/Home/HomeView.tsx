import { About, Category, MainLayout, Nav } from '@/front-components'

import { HomeHeader } from './components/HomeHeader'

export const HomeView = () => {
  return (
    <>
      <Nav />
      <HomeHeader />
      <MainLayout>
        <Category />
        <About />
      </MainLayout>
    </>
  )
}
