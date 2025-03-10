import Header from './components/Header.tsx'
import Form from './components/Form.tsx'
import Task from './components/Task.tsx'

import styles from './App.module.css'
import './global.css'
import { useState } from 'react'

const tasks: string[] = [
    'Lavar roupa', 'Cozinhar'
]

function App() {
    const [tasksState, setTasksState] = useState(tasks)


    function setTaskOnState(newTask: string) {
        setTasksState([...tasksState, newTask])
    }

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Form
                    onSetTaskOnState={setTaskOnState}
                />
                <Task
                    tasks={tasksState}
                />
            </div>
        </>
    )
}


export default App