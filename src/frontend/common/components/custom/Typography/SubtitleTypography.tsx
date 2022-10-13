import {
  TTypographySize,
  TTypographyWeight
} from '@/front-interfaces/components/typography.interface'
import { getTypographySize, getTypographyWeight } from '@/front-utils/typography.util'
import { FC, PropsWithChildren } from 'react'

export const SubtitleTypography: FC<PropsWithChildren<SubtitleTypographyProps>> = ({
  variant,
  fontSize,
  fontWeight,
  children
}) => {
  const size = getTypographySize(fontSize || 16)
  const weight = getTypographyWeight(fontWeight || 'normal')

  switch (variant) {
    case 'p':
      return <p className={`${size} ${weight}`}>{children}</p>
    case 'span':
      return <span className={`${size} ${weight}`}>{children}</span>
    default:
      return <p className={`${size} ${weight}`}>{children}</p>
  }
}

export type SubtitleTypographyProps = {
  variant?: 'span' | 'p'
  fontSize?: TTypographySize
  fontWeight?: TTypographyWeight
}
