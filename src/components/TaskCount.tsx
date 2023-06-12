import { useState, useEffect } from 'react'
import { Item } from '../types/Item'

import styles from './TaskCount.module.css'

type Props = {
  onTasksCount: () => number;
  tasks: Item[]; 
  onCheckboxChange: (itemId: number, isChecked: boolean) => void;
}

export function TaskCount({ onTasksCount, tasks }: Props) {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  useEffect(() => {
    const count = onTasksCount();
    setTaskCount(count);

    const completedCount = tasks.reduce((count, task) => {
      if (task.done === true) {
        return count + 1;
      }
      return count;
    }, 0);
    setCompletedTasksCount(completedCount);
  }, [onTasksCount, tasks]);

  return (
    <section className={styles.taskCount}>
      <div className={styles.createdTasks}>
        Tarefas criadas
        <div>{taskCount}</div>
      </div>
      <div className={styles.concludedTasks}>
        Concluídas
        <div>{completedTasksCount} de {taskCount}</div>
      </div>
    </section>
  )
}
