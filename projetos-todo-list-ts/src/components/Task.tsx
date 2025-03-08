import styles from './Task.module.css'

import clipboard from '../assets/clipboard.svg'
import { GoTrash } from "react-icons/go";

interface TaskType {
    tasks: string[]
}

export default function Task({ tasks }: TaskType) {

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
                {tasks.length <= 0 ? (
                    <div className={styles.nonTasks}>
                        <img src={clipboard} />
                        <h1>Você ainda não tem tarefas cadastradas</h1>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                ) : tasks.map((task, index) => {
                    return (
                        <div className={styles.onTasks}>
                            <div>
                                <input type="checkbox" className={styles.checkboxTasks} id={String(index + 1)} />
                                <label htmlFor={String(index + 1)}>{task}</label>
                            </div>
                            <a><GoTrash /></a>
                        </div>
                    )
                })}

            </div>
        </article >
    )
}