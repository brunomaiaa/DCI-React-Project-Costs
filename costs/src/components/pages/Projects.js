import React, { useState, useEffect } from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

export default function Projects() {
  const [projects, setProjects] = useState([ ])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')




  const location = useLocation() // This is a hook
  let message = ''
  if(location.state) {
    message = location.state.message
  }

useEffect(() => {
setTimeout (
  () => {
    fetch('http://localhost:3000/db.json', { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
       })
       
       .then(resp => resp.json())
        .then(data => {
          console.log(data.projects)
          console.log("Hello")
          setProjects(data.projects)
          setRemoveLoading(true)
        }
        ).catch(err => console.log(err))
  

  }, 300)
}, [])

function removeProject(id) {
  fetch(`http://localhost:3000/api/projects/${id}`,{
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },

})
.then((resp) => resp.json())
  .then(() => {
    // console.log(data)
    setProjects(projects.filter((project) => project.id !== id))
    //message
    setProjectMessage('Project removed successfully')
  })
  .catch((err) => console.log(err))
}




  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}><h1>Projects </h1>
      <LinkButton to="/newproject" text="New Project" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard 
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category}
            key={project.id}
            handleRemove={removeProject}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && <p>No projects found</p>}

      </Container>

    </div>
  )
}
