// @flow
type Props = {
  paddingTop?: string | number,
  paddingBottom?: string | number,
}

/**
 * Attempts to fix vertical rhythm
 * TODO: handle strings, we need to pull the unit off and apply it again
 */
function fixVerticalRhythm({ paddingTop, paddingBottom, ...styles }: Props) {
  if (styles.borderTopWidth > 0 && typeof paddingTop === 'number') {
    styles.paddingTop = paddingTop - styles.borderTopWidth
  } else {
    styles.paddingTop = paddingTop
  }

  if (styles.borderBottomWidth > 0 && typeof paddingBottom === 'number') {
    styles.paddingBottom = paddingBottom - styles.borderBottomWidth
  } else {
    styles.paddingBottom = paddingBottom
  }

  return styles
}

export default fixVerticalRhythm
