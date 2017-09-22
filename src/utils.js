import { getLuminance } from 'polished'

import colors from './colors'

export const spacingBase = 8
export const fontSizeBase = 16
export const fontSizeScale = [32, 24, 18, 16, 14, 11]
export const lineHeightRatio = 1.25
export const lineHeightBase = fontSizeBase * lineHeightRatio

export const alignTypes = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
}

export const justifyTypes = {
  center: 'center',
  end: 'flex-end',
  'space-around': 'space-around',
  'space-between': 'space-between',
  start: 'flex-start',
}

export function isLightColor(color) {
  if (!color || color === 'transparent') {
    return null
  }
  return getLuminance(parseColor(color)) > 0.5
}

export function isString(arg) {
  return typeof arg === 'string'
}

export function isDefined(arg) {
  return arg !== undefined && arg !== null
}

export function anyDefined(...args) {
  return args.some(isDefined)
}

export function spacingValue(val: string | number): string | number {
  return typeof val === 'number' ? val * spacingBase : val
}

export function fontSizeValue(val: string | number): string | number {
  if (val <= 9) {
    return fontSizeScale[val] || val
  } else {
    return val
  }
}

export function parseSides(...sides: Array<number | string>) {
  return sides.reduce((acc, side) => {
    if (isString(side)) {
      return side
    } else if (isDefined(side)) {
      return side * spacingBase
    }
    return acc
  }, 0)
}

export function parseColor(color) {
  return colors[color] || color
}
