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
  [100]: 'font-thin',
  [200]: 'font-extralight',
  [300]: 'font-light',
  [400]: 'font-normal',
  [500]: 'font-medium',
  [600]: 'font-semibold',
  [700]: 'font-bold',
  [800]: 'font-extrabold',
  [900]: 'font-black'
}

export const getTypographySize = (size: number) => TYPOGRAPHY_SIZE[size] || 'text-base'

export const getTypographyWeight = (weight: number) => TYPOGRAPHY_WEIGHT[weight] || 'font-normal'
