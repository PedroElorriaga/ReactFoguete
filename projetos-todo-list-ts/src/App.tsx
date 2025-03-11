import Header from './components/Header.tsx'
import Form from './components/Form.tsx'
import { Task, TaskType } from './components/Task.tsx'

import styles from './App.module.css'
import './global.css'
import { useState } from 'react'

const tasks: TaskType[] = [
    {
        id: 1,
        task: 'Estudar React'
    },
    {
        id: 2,
        task: 'Ler Spin Selling'
    },
    {
        id: 3,
        task: 'Jogo domingo'
    }
]

function App() {
    const [tasksState, setTasksState] = useState(tasks)


    function setTaskOnState(newTask: TaskType) {
        setTasksState([...tasksState, newTask])
    }

    function deleteTask(id: number) {
        const listWithoutDeleted = tasksState.filter(task => {
            if (task.id != id) return task
        })

        setTasksState(listWithoutDeleted)
    }

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Form
                    tasks={tasksState}
                    onSetTaskOnState={setTaskOnState}
                />
                <Task
                    tasks={tasksState}
                    onDeleteTask={deleteTask}
                />
            </div>
        </>
    )
}


export default App