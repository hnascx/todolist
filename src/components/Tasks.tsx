import { Trash } from 'phosphor-react'

import styles from './Tasks.module.css'
import task from '../assets/task-logo.svg'


export function Tasks() {
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