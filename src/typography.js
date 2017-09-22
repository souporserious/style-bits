// @flow
import { fontSizeValue, spacingBase } from './utils'

type Props = {
  fontSize?: string | number,
}

function typography({ fontSize, lineHeight, uppercase, ...styles }: Props) {
  if (typeof fontSize !== 'undefined') {
    styles.fontSize = fontSizeValue(fontSize)
  }

  if (typeof lineHeight !== 'undefined') {
    styles.lineHeight =
      typeof lineHeight === 'number'
        ? `${lineHeight * spacingBase}px`
        : lineHeight
  }

  if (uppercase) {
    styles.textTransform = 'uppercase'
    styles.letterSpacing = '0.15em'
  }

  return styles
}

export default typography
