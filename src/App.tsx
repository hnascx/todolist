import { useState } from 'react'

import Header from './components/Header'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { TaskCount } from './components/Tasks'
import { Tasks } from './components/Tasks'
import { Item } from './types/Item'

import './global.css'

export function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Task 1',
      done: false,
    },
    {
      id: 2,
      name: 'Task 2',
      done: true,
    },
  ])

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })

    setList(newList)
  } 

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* NewTask area */}

          <NewTask onEnter={handleAddTask} />

          {/* TaskCount area */}

          <TaskCount />
          <main>
            


            {/* Tasks area */}

            {list.map((item, index) => (
              <Tasks 
                key={index}
                item={item}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}