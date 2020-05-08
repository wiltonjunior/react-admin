
import React from 'react'

import clsx from 'clsx'
import Dictionary from './dictionary'

const Icon = (props) => {
  const { className = '', name, id = '', color, size = 20 } = props
  const cssClass = clsx('Icon', className)
  const Image = Dictionary[name]
  if (Image) {
    const styles = {
      width: size,
      height: size,
      fill: color
    }
    return <Image id={id} className={cssClass} style={styles} />
  } else {
    return null
  }
}

export default Icon
