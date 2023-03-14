import React from 'react'
import styles from './Select.module.css'

export default function Select({ text, options, name, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} >
            <option>Select an option</option>
            {options.map((option) => (
                <option value={option.id} key={option.id}> 
                {option.name}</option>
            ))}
        </select>

    
    </div>
  )
}
