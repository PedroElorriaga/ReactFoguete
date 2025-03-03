import styles from './Header.module.css'

import foguetinhoLogo from '../assets/foguetinho-logo.svg'

export function Header() {

    return (
        <header className={styles.header}>
            <img src={foguetinhoLogo}></img>
            <strong>Feed do Foguetinho</strong>
        </header>
    )
}
