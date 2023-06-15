import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

import addTaskLogo from '../assets/addtask-img.svg'

import styles from './NewTask.module.css'

type Props = {
  onClick: (taskName: string) => void
}

export function NewTask({ onClick }: Props) {
  const [newTask, setNewTask] = useState('')  

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onClick(newTask)
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório.')
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
      <input
        placeholder='Write an new task here'
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <footer>
        <button type='submit'>
          Add
          <img src={addTaskLogo} alt='Adicionar tarefa' />
        </button>
      </footer>
      </form>
    </div>
  )
}