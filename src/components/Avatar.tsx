import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
  stylescss?: string
}

export function Avatar({ stylescss, ...props }: Avatar) {
  return (
    <img
      className={stylescss || styles.avatar}
      {...props}
    />
  )
}
