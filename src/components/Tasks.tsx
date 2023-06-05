import { Trash } from 'phosphor-react'
import { useState, FormEvent } from 'react'

import styles from './Tasks.module.css'
import task from '../assets/task-logo.svg'

type Tasks = {
  content: string;
}

export function Tasks({ content }: Tasks){
  const [newTask, setNewTask] = useState([''])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setNewTask([ ...newTask, newTaskText ])
    setNewTaskText('')
  }

  return (
    <section className={styles.tasks}>
      {/* <div className={styles.tasksEmpty}>
        <img src={task} alt="Task logo" />
      <div>
        <b>Você ainda não tem tarefas cadastradas</b>
        <div className={styles.tasksEmptyText}>
          Crie tarefas e organize seus itens a fazer
        </div>
      </div>
      </div> */}
      <div className={styles.container}>
        <input type="checkbox" name="" id=""/>
        <label>{content}</label>
        <div className={styles.trashIcon}>
          <Trash size={18} />
        </div>
      </div>
    </section>
  )
}

export default Tasks