import styles from './TaskCount.module.css'

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

export default TaskCount