import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'
import styles from './NewTask.module.css'
import addTaskLogo from '../assets/addtask-img.svg'

/* Mudar a estrutura e utilizar section com input e button invés da estrutura abaixo? */
export function NewTask() {
  const [content, setContent] = useState([
    '123'
  ])

  const [newContentText, setNewContentText] = useState('')
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setContent([...content, newContentText])
    setNewContentText('')
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTask}>
    <textarea
      placeholder='Adicione uma nova tarefa'
    />
    <footer>
      <button>
        Criar
        <img src={addTaskLogo} alt='Adicionar tarefa' />
      </button>
    </footer>
  </form>
  )
}

export default NewTask