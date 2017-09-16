// @flow
import { spacingValue } from './utils'

type Props = {
  position?: 'absolute' | 'fixed' | 'relative' | 'static',
  top?: string | number,
  right?: string | number,
  bottom?: string | number,
  left?: string | number,
  zIndex?: string | number,
}

function position({
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  ...styles
}: Props) {
  if (position) {
    styles.position = position
  }

  if (typeof top !== 'undefined') {
    styles.top = spacingValue(top)
  }

  if (typeof right !== 'undefined') {
    styles.right = spacingValue(right)
  }

  if (typeof bottom !== 'undefined') {
    styles.bottom = spacingValue(bottom)
  }

  if (typeof left !== 'undefined') {
    styles.left = spacingValue(left)
  }

  if (typeof zIndex !== 'undefined') {
    styles.zIndex = zIndex
  }

  return styles
}

export default position
