import styles from './NewTask.module.css'
import addTaskLogo from '../assets/addtask-img.svg'

/* Mudar a estrutura e utilizar section com input e button invés da estrutura abaixo? */
export function NewTask() {
  return (
    <form className={styles.newTask}>
    <textarea
      placeholder='Adicione uma nova tarefa'
    />
    <footer>
      <button>
        Criar
        <img src={addTaskLogo} alt='Adicionar tarefa' />
      </button>
    </footer>
  </form>
  )
}

export default NewTask