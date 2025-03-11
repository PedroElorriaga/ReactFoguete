import styles from './Form.module.css'

import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent, useState } from 'react'


interface TaskType {
    id: number,
    task: string
}

interface FormProps {
    tasks: TaskType[]
    onSetTaskOnState: (newTask: TaskType) => void
}

export default function Form({ onSetTaskOnState, tasks }: FormProps) {
    const [taskInput, setTaskInput] = useState('')

    function handleSubmitTask(event: FormEvent) {
        event.preventDefault()
        if (!taskInput.trim()) return

        const newTask = {
            id: Math.max(...tasks.flatMap((task) => task.id), 0) + 1,
            task: taskInput
        }

        onSetTaskOnState(newTask)
        setTaskInput('')
    }

    function handleChangeTaskValue(event: ChangeEvent<HTMLInputElement>) {
        setTaskInput(event.target.value)
    }

    return (
        <form onSubmit={handleSubmitTask} className={styles.form}>
            <input
                type='text'
                placeholder='Adicione uma nova tarefa'
                value={taskInput}
                onChange={handleChangeTaskValue}
            />
            <button className={styles.criarTarefaBtn} type='submit'>
                Criar
                <img src={plus} />
            </button>
        </form>
    )
}