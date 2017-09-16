// @flow
type Props = {
  borderWidth: string | number,
  borderTopWidth: string | number,
  borderRightWidth: string | number,
  borderBottomWidth: string | number,
  borderLeftWidth: string | number,
  radius: string | number,
  radiusTop: string | number,
  radiusRight: string | number,
  radiusBottom: string | number,
  radiusLeft: string | number,
}

function border({
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  radius,
  radiusTop,
  radiusRight,
  radiusBottom,
  radiusLeft,
  ...styles
}: Props) {
  if (typeof borderWidth !== 'undefined') {
    styles.borderTopWidth = borderWidth
    styles.borderRightWidth = borderWidth
    styles.borderBottomWidth = borderWidth
    styles.borderLeftWidth = borderWidth
  }

  if (typeof borderTopWidth !== 'undefined') {
    styles.borderTopWidth = borderTopWidth
  }

  if (typeof borderRightWidth !== 'undefined') {
    styles.borderRightWidth = borderRightWidth
  }

  if (typeof borderBottomWidth !== 'undefined') {
    styles.borderBottomWidth = borderBottomWidth
  }

  if (typeof borderLeftWidth !== 'undefined') {
    styles.borderLeftWidth = borderLeftWidth
  }

  if (typeof radius !== 'undefined') {
    if (radius === 'circle') {
      styles.borderRadius = '100%'
    } else if (radius === 'pill') {
      styles.borderRadius = '10em'
    } else if (radius === 'pill-left') {
      styles.borderTopLeftRadius = '10em'
      styles.borderBottomLeftRadius = '10em'
    } else if (radius === 'pill-right') {
      styles.borderTopRightRadius = '10em'
      styles.borderBottomRightRadius = '10em'
    } else {
      styles.borderTopLeftRadius = radius
      styles.borderTopRightRadius = radius
      styles.borderBottomRightRadius = radius
      styles.borderBottomLeftRadius = radius
    }
  }

  if (typeof radiusTop !== 'undefined') {
    styles.borderTopLeftRadius = radiusTop
    styles.borderTopRightRadius = radiusTop
  }

  if (typeof radiusRight !== 'undefined') {
    styles.borderTopRightRadius = radiusRight
    styles.borderBottomRightRadius = radiusRight
  }

  if (typeof radiusBottom !== 'undefined') {
    styles.borderBottomRightRadius = radiusBottom
    styles.borderBottomLeftRadius = radiusBottom
  }

  if (typeof radiusLeft !== 'undefined') {
    styles.borderTopLeftRadius = radiusLeft
    styles.borderBottomLeftRadius = radiusLeft
  }

  return styles
}

export default border
