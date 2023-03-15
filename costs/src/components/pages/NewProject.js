import React from 'react'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'

export default function Newproject() {

  const navigate = useNavigate() // This is a hook that allows us to redirect the user to another page

  function createPost(project) {
    // initialize costand services
    project.costs = 0
    project.services = []

    fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        // redirect the user to the project page
        navigate('/projects', { message: 'Project created successfully'})
        // redirect the user to the project page



      }
      )
      .catch((err) => console.log(err))


  }


  return (
    <div className={styles.newproject_container}>
      <h1>Create a new Project</h1>
      <p>Create your project and then add the services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
    </div>
  )
}
