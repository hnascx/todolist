import { Trash } from 'phosphor-react'
import { useState, FormEvent } from 'react'

import styles from './Tasks.module.css'
import task from '../assets/task-logo.svg'

interface Task {
  content: string;
}

export interface TaskType {
  id: number;
  content: Task;
}

interface TaskProps {
  task: TaskType;
}

export function Tasks({ task }: TaskProps) {
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
        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non atque pariatur molestias quos suscipit, animi totam!</label>
        <div className={styles.trashIcon}>
          <Trash size={18} />
        </div>
      </div>
      <div className={styles.container}>
        <input type="checkbox" name="" id=""/>
        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non atque pariatur molestias quos suscipit, animi totam!</label>
        <div className={styles.trashIcon}>
          <Trash size={18} />
        </div>
      </div>
    </section>
  )
}

export default Tasks