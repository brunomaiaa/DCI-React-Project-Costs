import React from 'react'
import styles from './input.module.css'

export default function input({type, text, placeholder, name, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
    
    </div>
  )
}
