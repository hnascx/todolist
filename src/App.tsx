import Header from './components/Header'
import NewTask from './components/NewTask'
import styles from './App.module.css'
import TaskCount from './components/TaskCount'
import Tasks from './components/Tasks'
import { TasksType } from './components/Tasks'

import './global.css'

export const tasks: TasksType[] = [
  {
    id: 1,
    content: 'Lorem ipsum dolor.'
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet.'
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask />
          <TaskCount />
          <main>
            {tasks.map(task => {
              return (
                <Tasks
                  id={task.id}
                  content={task.content}
                />
              )
            })}
          </main>
        </div>
      </div>
    </div>
  )
}