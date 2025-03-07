import Header from './components/Header.tsx'
import Form from './components/Form.tsx'
import Task from './components/Task.tsx'

import styles from './App.module.css'
import './global.css'

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Form />
                <Task />
            </div>
        </>
    )
}


export default App