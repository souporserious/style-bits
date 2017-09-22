## style-bits

A collection of small opinionated functions that can be combined or used individually in your design system.

## Install

`yarn add style-bits`

`npm install style-bits --save`

## Example

```js
import {
  border,
  color,
  colors,
  elevation,
  fixVerticalRhythm,
  flex,
  isLightColor,
  parseColor,
  position,
  size,
  spacing,
  spacingBase,
  typography,
} from 'style-bits'

const App = () => (
  <div style={spacing({ padding: 2, marginBottom: 0.5 })}>
    Styled Box
  </div>
)
```
