import styles from './Task.module.css'

import clipboard from '../assets/clipboard.svg'


export default function Task() {

    return (
        <article>
            <header className={styles.tasksHeader}>
                <div className={styles.tasksActive}>
                    Tarefas criadas
                    <span>0</span>
                </div>
                <div className={styles.tasksDone}>
                    Concluídas
                    <span>0</span>
                </div>
            </header>
            <div className={styles.tasksList}>
                <img src={clipboard} />
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </article>
    )
}