import styles from './Task.module.css'

import clipboard from '../assets/clipboard.svg'
import { GoTrash } from "react-icons/go";
import { useState } from 'react';

export interface TaskType {
    id: number,
    task: string
}

interface TaskProps {
    tasks: TaskType[]
    onDeleteTask: (id: number) => void
}

export function Task({ tasks, onDeleteTask }: TaskProps) {
    const [countTaskState, setcountTaskState] = useState(0)

    function handleDeleteTasks(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()

        const parentDiv = event.currentTarget.closest('div')
        const idOnLabel = Number(parentDiv?.querySelector('label')?.htmlFor)

        onDeleteTask(idOnLabel)
        setcountTaskState(countTaskState - 1)
    }

    function updateCheckedTasks() {
        const checkBoxesElement = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
        const checkBoxCount = Array.from(checkBoxesElement).filter(checkbox => checkbox.checked).length;

        setcountTaskState(checkBoxCount)
    }

    return (
        <article>
            <header className={styles.tasksHeader}>
                <div className={styles.tasksActive}>
                    Tarefas criadas
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.tasksDone}>
                    Concluídas
                    {tasks.length <= 0 ? (
                        <span>0</span>
                    ) : (
                        <span>{countTaskState} de {tasks.length}</span>
                    )}

                </div>
            </header>
            <div className={styles.tasksList}>
                {tasks.length <= 0 ? (
                    <div className={styles.nonTasks}>
                        <img src={clipboard} />
                        <h1>Você ainda não tem tarefas cadastradas</h1>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                ) : tasks.map(taskMap => {
                    return (
                        <div className={styles.onTasks} key={taskMap.id}>
                            <div>
                                <input type="checkbox" className={styles.checkboxTasks} id={String(taskMap.id)} onChange={updateCheckedTasks} />
                                <label htmlFor={String(taskMap.id)}>{taskMap.task}</label>
                            </div>
                            <a onClick={handleDeleteTasks}><GoTrash /></a>
                        </div>
                    )
                })}

            </div>
        </article >
    )
}