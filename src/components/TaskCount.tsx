import { useState, useEffect } from 'react'

import styles from './TaskCount.module.css'

type Props = {
  onTasksCount: () => number;
}

export function TaskCount({ onTasksCount }: Props) {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    const tasksCount = onTasksCount()
    setTaskCount(tasksCount)
  }, [onTasksCount]);

  return (
    <section className={styles.taskCount}>
      <div className={styles.createdTasks}>
        Tarefas criadas
        <div>{taskCount}</div>
      </div>
      <div className={styles.concludedTasks}>
        Concluídas
        <div>0 de {taskCount}</div>
      </div>
    </section>
  )
}