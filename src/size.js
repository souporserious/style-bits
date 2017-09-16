// @flow
import { spacingValue } from './utils'

type Props = {
  width: string | number,
  height: string | number,
  minWidth: string | number,
  minHeight: string | number,
  maxWidth: string | number,
  maxHeight: string | number,
}

function size({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  ...styles
}: Props) {
  const props = { width, height, minWidth, minHeight, maxWidth, maxHeight }
  Object.keys(props).forEach(key => {
    const value = props[key]
    if (typeof value !== 'undefined') {
      styles[key] = spacingValue(value)
    }
  })
  return styles
}

export default size
