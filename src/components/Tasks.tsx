import { Trash } from 'phosphor-react'

import { useState } from 'react'
import { Item } from '../types/Item'
import task from '../assets/task-logo.svg'

import styles from './Tasks.module.css'

type Props = {
  item: Item;
  onDelete: (taskToDelete: Item) => void;
}

export function Tasks({ item, onDelete }: Props){
  const [isChecked, setIsChecked] = useState(item.done)

  function handleDeleteTask() {
    onDelete(item)
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
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
        />
        <label>{item.name}</label>
        <button onClick={handleDeleteTask} className={styles.trashIcon}>
          <Trash size={18} />
        </button>
      </div>
    </section>
  )
}