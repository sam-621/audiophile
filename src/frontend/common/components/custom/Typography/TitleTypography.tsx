import {
  TTypographySize,
  TTypographyVariants,
  TTypographyWeight
} from '@/front-interfaces/components/typography.interface'
import { getTypographySize, getTypographyWeight } from '@/front-utils/typography.util'
import { FC, PropsWithChildren } from 'react'

export const TitleTypography: FC<PropsWithChildren<TitleTypographyProps>> = ({
  variant,
  fontSize,
  fontWeight,
  children
}) => {
  console.log({
    fontSize
  })

  const size = getTypographySize(fontSize || 16)
  const weight = getTypographyWeight(fontWeight || 'normal')

  switch (variant) {
    case 'h1':
      return <h1 className={`${size} ${weight}`}>{children}</h1>
    case 'h2':
      return <h2 className={`${size} ${weight}`}>{children}</h2>
    case 'h3':
      return <h3 className={`${size} ${weight}`}>{children}</h3>
    default:
      return <h2 className={`${size} ${weight}`}>{children}</h2>
  }
}

export type TitleTypographyProps = {
  variant?: TTypographyVariants
  fontSize?: TTypographySize
  fontWeight?: TTypographyWeight
}
