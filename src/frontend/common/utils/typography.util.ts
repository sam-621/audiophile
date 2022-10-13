import { TTypographyWeight } from '@/front-interfaces/components/typography.interface'
import { THashMap } from '@/shared/interfaces/utils'

export const TYPOGRAPHY_SIZE: THashMap = {
  [12]: 'text-xs',
  [14]: 'text-sm',
  [16]: 'text-base',
  [18]: 'text-lg',
  [20]: 'text-xl',
  [24]: 'text-2xl',
  [30]: 'text-3xl',
  [36]: 'text-4xl',
  [48]: 'text-5xl',
  [60]: 'text-6xl',
  [72]: 'text-7xl',
  [96]: 'text-8xl',
  [128]: 'text-9xl'
}

export const TYPOGRAPHY_WEIGHT: THashMap = {
  ['thin']: 'font-thin',
  ['extralight']: 'font-extralight',
  ['light']: 'font-light',
  ['normal']: 'font-normal',
  ['medium']: 'font-medium',
  ['semibold']: 'font-semibold',
  ['bold']: 'font-bold',
  ['extrabold']: 'font-extrabold',
  ['black']: 'font-black'
}

export const getTypographySize = (size: number) => TYPOGRAPHY_SIZE[size] || 'text-base'

export const getTypographyWeight = (weight: TTypographyWeight) =>
  TYPOGRAPHY_WEIGHT[weight] || 'font-normal'
