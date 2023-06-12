import { Trash } from 'phosphor-react'

import { useState, useEffect } from 'react'
import { Item } from '../types/Item'

import styles from './Tasks.module.css'

type Props = {
  item: Item;
  onDelete: (taskToDelete: Item) => void;
  onCheckboxChange: (itemId: number, isChecked: boolean) => void;

}

export function Tasks({ item, onDelete, onCheckboxChange }: Props){
  const [isChecked, setIsChecked] = useState(item.done)

  function handleDeleteTask() {
    onDelete(item)
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedChecked = e.target.checked;
    setIsChecked(updatedChecked);
    onCheckboxChange(item.id, updatedChecked)
  }

  useEffect(() => {
    setIsChecked(item.done);
  }, [item.done]);

  return (
    <section className={styles.tasks}>
      <div className={styles.container}>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>{item.name}</label>
        <button onClick={handleDeleteTask} className={styles.trashIcon}>
          <Trash size={18} />
        </button>
      </div>
    </section>
  )
}