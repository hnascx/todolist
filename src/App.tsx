import { useState } from 'react'

import Header from './components/Header'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { TaskCount } from './components/TaskCount'
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

  function handleDeleteTask(taskToDelete: Item) {
    const taskWithoutDeletedOne = list.filter(list => {
      return list !== taskToDelete
    })

    setList(taskWithoutDeletedOne)
  }

  function allTasksCount(Tasks: Item[]) {
    return Tasks.length
  }

  function allTasksCountValue() {
    const tasksCount = allTasksCount(list);
    
    return tasksCount
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask onClick={handleAddTask} />
          <TaskCount onTasksCount={allTasksCountValue}/>
          <main>
            {list.map((item, index) => (
              <Tasks 
                key={index}
                item={item}
                onDelete={handleDeleteTask}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}