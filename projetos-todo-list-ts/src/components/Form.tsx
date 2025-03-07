import styles from './Form.module.css'

import plus from '../assets/plus.svg'


export default function Form() {

    return (
        <form className={styles.form}>
            <input type='text' placeholder='Adicione uma nova tarefa' />
            <button className={styles.criarTarefaBtn} type='submit'>
                Criar
                <img src={plus} />
            </button>
        </form>
    )
}