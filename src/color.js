// @flow
import { parseColor } from './utils'

type Props = {
  backgroundColor?: string | Object,
  borderColor?: string | Object,
  borderBottomColor?: string | Object,
  borderLeftColor?: string | Object,
  borderRightColor?: string | Object,
  borderTopColor?: string | Object,
  color?: string | Object,
  fill?: string | Object,
  stroke?: string | Object,
}

function color({
  backgroundColor,
  borderColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  borderTopColor,
  color,
  fill,
  stroke,
  ...styles
}: Props) {
  const colorProps = {
    backgroundColor,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderTopColor,
    color,
    fill,
    stroke,
  }
  Object.keys(colorProps).forEach(key => {
    const colorProp = colorProps[key]
    if (colorProp) {
      styles[key] = parseColor(colorProp)
    }
  })
  return styles
}

export default color
