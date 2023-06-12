import { useState } from 'react'

import Header from './components/Header'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { TaskCount } from './components/TaskCount'
import { Tasks } from './components/Tasks'
import { TasksEmpty } from './components/TasksEmpty'
import { Item } from './types/Item'

import './global.css'

export function App() {
  const [list, setList] = useState<Item[]>([])

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

  function handleCheckboxChange(itemId: number, isChecked: boolean) {
    const updatedList = list.map(item => {
      if (item.id === itemId) {
        return { ...item, done: isChecked };
      }
      return item;
    });
    setList(updatedList);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask onClick={handleAddTask} />
          <TaskCount onTasksCount={allTasksCountValue} tasks={list} onCheckboxChange={handleCheckboxChange}/>
          <main>
            {list.length === 0 ? <TasksEmpty/> : list.map((item, index) => (
              <Tasks 
                key={index}
                item={item}
                onDelete={handleDeleteTask}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}