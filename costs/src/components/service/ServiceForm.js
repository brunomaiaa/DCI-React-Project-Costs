import React from 'react'
import styles from '../project/ProjectForm.module.css'
import { useState } from 'react'
import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

export default function ServiceForm({handleSubmit, btnText, projectData}) {
    const [service, setService] = useState({})


    function submit (e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    function handleChange(e) {

        setService({...service, [e.target.name]: e.target.value})
       
    }


  return (
    <form onSubmit={submit} className={styles.form}>
        <Input
        type="text"
        text="Name of the service"
        name="name"
        placeholder="Add the name of the service"
        handleOnChange={handleChange}
        />
         <Input
        type="number"
        text="Cost of the service"
        name="cost"
        placeholder="Add the cost of the service"
        handleOnChange={handleChange}
        />
         <Input
        type="text"
        text="Description of the service"
        name="description"
        placeholder="Add the description of the service"
        handleOnChange={handleChange}
        />
        <SubmitButton text={btnText}/>

    </form>
  )
}
