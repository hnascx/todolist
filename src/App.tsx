import Header from './components/Header'
import NewTask from './components/NewTask'
import './global.css'
import styles from './App.module.css'
import TaskCount from './components/TaskCount'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask />
          <TaskCount />
        </div>
      </div>
    </div>
  )
}