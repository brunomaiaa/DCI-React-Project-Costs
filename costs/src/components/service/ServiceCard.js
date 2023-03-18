import React from 'react'
import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

export default function ServiceCard({id, name, cost, description, handleRemove}) {

const remove = (e) =>{

}

  return (
    <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Total cost:</span>€{cost}
        </p>
        <p>
            <span>Description:</span>{description}
        </p>
        <div className={styles.project_card_actions}>
            <button pnClick={remove}>
            <BsFillTrashFill/>
            Delete
            </button>
            


        </div>
    </div>
  )
}
