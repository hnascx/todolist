import styles from './Header.module.css'

import todoLogo from '../assets/todolist-logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={todoLogo} alt="Logotipo todo" />
      </a>
      <h1>relax your mind, put the tasks here.</h1>
    </header>
  )
}

export default Header