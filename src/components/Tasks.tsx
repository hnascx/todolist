import { Trash } from 'phosphor-react'
import { useState } from 'react'

import { Item } from '../types/Item'

import styles from './Tasks.module.css'
import task from '../assets/task-logo.svg'

export function TaskCount() {
  return (
    <section className={styles.taskCount}>
      <div className={styles.createdTasks}>
        Tarefas criadas
        <div>0</div>
      </div>
      <div className={styles.concludedTasks}>
        Concluídas
        <div>0</div>
      </div>
    </section>
  )
}

type Props = {
  item: Item
}

export function Tasks({ item }: Props){
  const [isChecked, setIsChecked] = useState(item.done)

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
          //O parâmetro 'e' recebe através da variável setIsChecked o novo status de checked após a mudança
        />
        <label>{item.name}</label>
        <div className={styles.trashIcon}>
          <Trash size={18} />
        </div>
      </div>
    </section>
  )
}