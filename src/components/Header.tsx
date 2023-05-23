import styles from './Header.module.css'

import todoLogo from '../assets/todolist-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo todo" />
    </header>
  )
}

export default Header