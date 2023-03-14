import React from 'react'
import ProjecForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

export default function Newproject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Create a new Project</h1>
      <p>Create your project and then add the services</p>
      <ProjecForm btnText="Create Project"/>
    </div>
  )
}
