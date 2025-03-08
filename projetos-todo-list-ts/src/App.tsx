import Header from './components/Header.tsx'
import Form from './components/Form.tsx'
import Task from './components/Task.tsx'

import styles from './App.module.css'
import './global.css'

const tasks: string[] = [
    'Lavar roupa', 'Cozinhar'
]

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Form />
                <Task
                    tasks={tasks}
                />
            </div>
        </>
    )
}


export default App