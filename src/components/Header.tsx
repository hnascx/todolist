import styles from './Header.module.css'

import todoLogo from '../assets/todolist-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={todoLogo} alt="Logotipo todo" />
      </a>
    </header>
  )
}

export default Header