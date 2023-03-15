import { useEffect, useState } from 'react'

import React from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


export default function ProjectForm({ handleSubmit, btnText, projectData}) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
  fetch('http://localhost:3000/api/categories',{
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

const submit = (e) => {
  e.preventDefault()
  // console.log(project)
  handleSubmit(project)
}

function handleChange(e) {
  setProject({ ...project, [e.target.name]: e.target.value })
  console.log(project)
}

function handleCategory(e) {
  setProject({ ...project, category: { id: e.target.value,
  name: e.target.options[e.target.selectedIndex].text },})
  console.log(project)
}

  return (
    <form onSubmit={submit} className={styles.form}>
        <Input type="text" text="Project name" name="name" placeholder="Enter project name" handleOnChange={handleChange}
        value={project.name ? project.name : ''}/>
        <Input type="number" text="Project budget" name="budget" placeholder="Enter the total budget" handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}/>
        
        <Select name="category_id" text="Select the category" options={categories} handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''} />
       <SubmitButton text={btnText} />

    </form>
  )
}
