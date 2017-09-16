import { darken, getLuminance, lighten, parseToRgb } from 'polished'

import colors from './colors'

export const spacing = 8
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

export function anyDefined(...args) {
  return args.some(arg => arg !== undefined && arg !== null)
}

export function spacingValue(val: string | number): string | number {
  return typeof val === 'number' ? val * spacing : val
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
    if (typeof side === 'string') {
      return side
    } else if (side !== null && typeof side !== 'undefined') {
      return side * spacing
    }
    return acc
  }, 0)
}

export function parseColor(color) {
  if (typeof color === 'object') {
    let parsedColor = colors[color.base] || color.base

    if (parsedColor === 'transparent') {
      return parsedColor
    }

    if (color.darken) {
      parsedColor = darken(color.darken, parsedColor)
    }

    if (color.lighten) {
      parsedColor = lighten(color.lighten, parsedColor)
    }

    if (typeof color.alpha !== 'undefined') {
      const { red, green, blue } = parseToRgb(parsedColor)
      return `rgba(${red}, ${green}, ${blue}, ${color.alpha})`
    } else {
      return parsedColor
    }
  }
  return colors[color] || color
}

export function isLightColor(color) {
  if (color === 'transparent') {
    return null
  }
  return getLuminance(parseColor(color)) > 0.5
}
