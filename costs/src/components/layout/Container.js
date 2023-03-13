import styles from './Container.module.css'

import React from 'react'

export default function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
    </div>
  )
}
