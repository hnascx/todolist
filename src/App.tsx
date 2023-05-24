import Header from './components/Header'
import NewTask from './components/NewTask'
import styles from './App.module.css'
import TaskCount from './components/TaskCount'
import Tasks from './components/Tasks'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask />
          <TaskCount />
          <Tasks />
        </div>
      </div>
    </div>
  )
}