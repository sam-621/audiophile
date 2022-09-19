import { Button } from '@/components/custom/Button/Button'

export const Home = () => {
  return (
    <div>
      <div className="flex gap-5 mb-5">
        <Button variant="base" text="See Product" />
        <Button variant="outlined" text="See Product" />
        <Button variant="text" text="See Product" />
      </div>
      <div className="flex gap-5">
        <Button variant="base" text="See Product" link={{ href: '/' }} />
        <Button variant="outlined" text="See Product" link={{ href: '/' }} />
        <Button variant="text" text="See Product" link={{ href: '/' }} />
      </div>
    </div>
  )
}

export default Home
