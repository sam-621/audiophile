import { getTypographySize, getTypographyWeight } from '@/front-utils/typography.util'
import { FC, PropsWithChildren } from 'react'

export const SubtitleTypography: FC<PropsWithChildren<Props>> = ({
  variant,
  fontSize,
  fontWeight,
  children
}) => {
  const size = getTypographySize(fontSize)
  const weight = getTypographyWeight(fontWeight)

  switch (variant) {
    case 'p':
      return <p className={`${size} ${weight}`}>{children}</p>
    case 'span':
      return <span className={`${size} ${weight}`}>{children}</span>
  }
}

type Props = {
  variant: 'span' | 'p'
  fontSize: number
  fontWeight: number
}
