import { useEffect, useState } from 'react'

import React from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


export default function ProjectForm({ btnText}) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
  fetch('http://localhost:5000',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then((resp) => resp.json())
.then((data) => {
  setCategories(data)
})
.catch(err => console.log(err))
  }, [])




  return (
    <form className={styles.form}>
        <Input type="text" text="Project name" name="name" placeholder="Enter project name"/>
        <Input type="number" text="Project budget" name="budget" placeholder="Enter the total budget"/>
        
        <Select name="category_id" text="Select the category" options={categories}/>
       <SubmitButton text={btnText} />

    </form>
  )
}
