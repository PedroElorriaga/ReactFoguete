import styles from './Header.module.css'

import todoLogoFoguete from '../assets/todo-logo.svg'
import todoLogo from '../assets/todo-logo-2.svg'

export default function Header() {

    return (
        <header className={styles.header}>
            <h1 className={styles.logoSvgs}>
                <img className={styles.logoFoguetinho} src={todoLogoFoguete} />
                <img className={styles.logo} src={todoLogo} />
            </h1>
        </header>
    )
}