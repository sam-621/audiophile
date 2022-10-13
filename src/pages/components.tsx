import { Button } from '@/front-components/custom/Button/Button'
import { Input } from '@/front-components/custom/Input/Input'
import { Typography } from '@/front-components/custom/Typography/Typography'

export const Components = () => {
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
      <div className="flex gap-5 mt-7">
        <Typography variant="h1" fontSize={30} fontWeight="bold">
          HEADPHONES
        </Typography>
        <Typography variant="h2" fontSize={30} fontWeight="bold">
          XX99 Mark II Headphones
        </Typography>
        <Typography variant="h3" fontSize={14} fontWeight="bold">
          HEADPHONES
        </Typography>

        <Typography variant="p" fontSize={14} fontWeight="bold">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </Typography>

        <Typography variant="span" fontSize={14} fontWeight="bold">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </Typography>
      </div>
    </div>
  )
}

export default Components
