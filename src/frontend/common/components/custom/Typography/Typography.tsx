import { FC } from 'react'
import { SubtitleTypography, SubtitleTypographyProps } from './SubtitleTypography'
import { TitleTypography, TitleTypographyProps } from './TitleTypography'

export const Typography: FC<Props> = ({ variant, fontSize, fontWeight }) => {
  switch (variant) {
    case 'h1' || 'h2' || 'h3':
      return <TitleTypography variant={variant} fontSize={fontSize} fontWeight={fontWeight} />
    case 'p' || 'span':
      return <SubtitleTypography variant={variant} fontSize={fontSize} fontWeight={fontWeight} />
    default:
      return <SubtitleTypography variant="p" fontSize={fontSize} fontWeight={fontWeight} />
  }
}

type Props = TitleTypographyProps | SubtitleTypographyProps
