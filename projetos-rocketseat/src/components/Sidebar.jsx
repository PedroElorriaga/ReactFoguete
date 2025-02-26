import { AvatarSidebar } from './Avatar';

import styles from './Sidebar.module.css'
import { SlEqualizer } from "react-icons/sl";

export function Sidebar(props) {

    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1610847455028-9e55e62bac33?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profiles}>
                <AvatarSidebar
                    avatar={props.avatar}
                />
                <strong>{props.autor}</strong>
                <span>{props.cargo}</span>
            </div>

            <footer>
                <a href='#'>
                    <SlEqualizer size={15} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}