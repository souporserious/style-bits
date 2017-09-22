// @flow
import { anyDefined, parseSides } from './utils'

type Props = {
  padding: string | number,
  paddingHorizontal: string | number,
  paddingVertical: string | number,
  paddingTop: string | number,
  paddingRight: string | number,
  paddingBottom: string | number,
  paddingLeft: string | number,
  margin: string | number,
  marginHorizontal: string | number,
  marginVertical: string | number,
  marginTop: string | number,
  marginRight: string | number,
  marginBottom: string | number,
  marginLeft: string | number,
}

function spacing({
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  ...styles
}: Props) {
  if (anyDefined(padding, paddingVertical, paddingTop)) {
    styles.paddingTop = parseSides(padding, paddingVertical, paddingTop)
  }

  if (anyDefined(padding, paddingHorizontal, paddingRight)) {
    styles.paddingRight = parseSides(padding, paddingHorizontal, paddingRight)
  }

  if (anyDefined(padding, paddingVertical, paddingBottom)) {
    styles.paddingBottom = parseSides(padding, paddingVertical, paddingBottom)
  }

  if (anyDefined(padding, paddingHorizontal, paddingLeft)) {
    styles.paddingLeft = parseSides(padding, paddingHorizontal, paddingLeft)
  }

  if (anyDefined(margin, marginVertical, marginTop)) {
    styles.marginTop = parseSides(margin, marginVertical, marginTop)
  }

  if (anyDefined(margin, marginHorizontal, marginRight)) {
    styles.marginRight = parseSides(margin, marginHorizontal, marginRight)
  }

  if (anyDefined(margin, marginVertical, marginBottom)) {
    styles.marginBottom = parseSides(margin, marginVertical, marginBottom)
  }

  if (anyDefined(margin, marginHorizontal, marginLeft)) {
    styles.marginLeft = parseSides(margin, marginHorizontal, marginLeft)
  }

  return styles
}

export default spacing
