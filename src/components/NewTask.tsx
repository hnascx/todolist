import { useState, KeyboardEvent } from 'react'

import addTaskLogo from '../assets/addtask-img.svg'

import styles from './NewTask.module.css'

type Props = {
  onEnter: (taskName: string) => void
}

export function NewTask({ onEnter }: Props) {
  const [inputText, setInputText] = useState('')

  function handleKeyUp(e: KeyboardEvent) {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
    }
  }

  return (
    <div>
      <div className={styles.newTask}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <footer>
        <button>
          Criar
          <img src={addTaskLogo} alt='Adicionar tarefa' />
        </button>
      </footer>
      </div>
    </div>
  )
}