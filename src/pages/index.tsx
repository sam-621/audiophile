import { Button } from '@/components/custom/Button/Button'
import { Input } from '@/components/custom/Input/Input'

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
      <div className="flex gap-5 mt-7">
        <Input
          variant="text"
          type="text"
          label="Name"
          placeholder="Insert your name"
          value="sam"
          onChange={() => null}
          error="hi"
        />
        <Input
          variant="text"
          type="text"
          label="Name"
          placeholder="Insert your name"
          value="sam"
          onChange={() => null}
        />
      </div>
    </div>
  )
}

export default Home
