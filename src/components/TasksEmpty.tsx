import styles from './TasksEmpty.module.css'

import task from '../assets/task-logo.svg'

export function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src={task} alt="Task logo" />
      <div>
        <b>We still don't have any task here :(</b>
        <div className={styles.tasksEmptyText}>
          Input tasks and organize your to dos.
        </div>
      </div>
    </div>
  )
}