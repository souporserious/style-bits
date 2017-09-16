// @flow
import { alignTypes, justifyTypes, spacingValue } from './utils'

type Props = {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline',
  basis?: number | string,
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  grow?: number,
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly',
  shrink?: number,
  wrap?: boolean,
}

function flex({
  alignItems,
  alignSelf,
  basis,
  direction,
  flexBasis,
  flexGrow,
  flexShrink,
  flexWrap,
  grow,
  justifyContent,
  shrink,
  wrap,
  ...styles
}: Props) {
  if (direction) {
    styles.flexDirection = direction
  }

  if (typeof wrap === 'undefined') {
    wrap = flexWrap
  }
  if (typeof wrap !== 'undefined') {
    styles.flexWrap =
      wrap === 'reverse' ? 'wrap-reverse' : wrap === true ? 'wrap' : 'nowrap'
  }

  if (typeof grow === 'undefined') {
    grow = flexGrow
  }
  if (typeof grow !== 'undefined') {
    styles.flexGrow = grow === true ? 1 : grow
  }

  if (typeof shrink === 'undefined') {
    shrink = flexShrink
  }
  if (typeof shrink !== 'undefined') {
    styles.flexShrink = shrink === true ? 1 : shrink
  }

  if (typeof basis === 'undefined') {
    basis = flexBasis
  }
  if (typeof basis !== 'undefined') {
    styles.flexBasis = spacingValue(basis || flexBasis)
  }

  if (justifyContent) {
    if (justifyContent === 'space-evenly') {
      styles.justifyContent = 'space-between'
      styles['&:before, &:after'] = {
        content: '""',
      }
    } else {
      styles.justifyContent = justifyTypes[justifyContent]
    }
  }

  if (alignItems) {
    styles.alignItems = alignTypes[alignItems]
  }

  if (alignSelf) {
    styles.alignSelf = alignTypes[alignSelf]
  }

  return styles
}

export default flex
