import { useState } from 'react'

import Header from './components/Header'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { TaskCount } from './components/TaskCount'
import { Tasks } from './components/Tasks'
import { TasksEmpty } from './components/TasksEmpty'
import { Task } from './types/Task'

import './global.css'

export function App() {

  const [task, setTask] = useState<Task[]>([])

  function handleAddTask(taskName: string) {
    let newTask = [...task];
    newTask.push({
      id: task.length + 1,
      task: taskName,
      concluded: false,
    })

    setTask(newTask)
  } 
  
  function handleDeleteTask(taskToDelete: Task) {
    const taskWithoutDeletedOne = task.filter(task => {
      return task !== taskToDelete
    })

    setTask(taskWithoutDeletedOne)
  }

  function allTasksCount(Tasks: Task[]) {
    return Tasks.length
  }

  function allTasksCountValue() {
    const tasksCount = allTasksCount(task);
    
    return tasksCount
  }

  function handleCheckboxChange(taskId: number, isChecked: boolean) {
    const updatedTaskList = task.map(item => {
      if (item.id === taskId) {
        return { ...item, concluded: isChecked };
      }

      return item;
    });
    
    setTask(updatedTaskList);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask onClick={handleAddTask} />
          <TaskCount onTasksCount={allTasksCountValue} tasks={task} onCheckboxChange={handleCheckboxChange}/>
          <main>
            {task.length === 0 ? <TasksEmpty/> : task.map((task, index) => (
              <Tasks 
                key={index}
                task={task}
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