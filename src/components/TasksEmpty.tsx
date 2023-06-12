import styles from './TasksEmpty.module.css'

import task from '../assets/task-logo.svg'

export function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src={task} alt="Task logo" />
      <div>
        <b>Você ainda não tem tarefas cadastradas</b>
        <div className={styles.tasksEmptyText}>
          Crie tarefas e organize seus itens a fazer
        </div>
      </div>
    </div>
  )
}