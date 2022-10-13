import { FC, PropsWithChildren } from 'react'
import { SubtitleTypography, SubtitleTypographyProps } from './SubtitleTypography'
import { TitleTypography, TitleTypographyProps } from './TitleTypography'

export const Typography: FC<PropsWithChildren<Props>> = ({
  variant,
  fontSize,
  fontWeight,
  children
}) => {
  if (variant === 'h1' || variant === 'h2' || variant === 'h3') {
    return (
      <TitleTypography variant={variant} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </TitleTypography>
    )
  }

  if (variant === 'p' || variant === 'span') {
    return (
      <SubtitleTypography variant={variant} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </SubtitleTypography>
    )
  }

  return (
    <SubtitleTypography variant="p" fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </SubtitleTypography>
  )
}

type Props = TitleTypographyProps | SubtitleTypographyProps
