import { useState, useEffect } from 'react'
import { Task } from '../types/Task'

import styles from './TaskCount.module.css'

type Props = {
  onTasksCount: () => number;
  tasks: Task[]; 
}

export function TaskCount({ onTasksCount, tasks }: Props) {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  useEffect(() => {
    const count = onTasksCount();
    setTaskCount(count);

    const completedCount = tasks.reduce((count, task) => {
      if (task.concluded === true) {
        return count + 1;
      }
      return count;
    }, 0);
    
    setCompletedTasksCount(completedCount);
  }, [onTasksCount, tasks]);

  return (
    <section className={styles.taskCount}>
      <div className={styles.createdTasks}>
        Created tasks
        <div>{taskCount}</div>
      </div>
      <div className={styles.concludedTasks}>
        Concluded
        <div>{completedTasksCount} de {taskCount}</div>
      </div>
    </section>
  )
}
