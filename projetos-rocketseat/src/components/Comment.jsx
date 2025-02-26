import styles from './Comment.module.css'

import { SlLike } from "react-icons/sl";

export function Comment(props) {
    return (
        <article>
            <div className={styles.comment}>
                <img src={props.avatar} />
                <div className={styles.conteudo}>
                    <strong className={styles.autor}>{props.autor}</strong>
                    <time>Há 10 Minutos</time>
                    <p>A foto ficou incrivel mesmo!</p>
                </div>
            </div>
            <button type='submitComment'>
                <SlLike size={15} />
                Gostei<span>5</span>
            </button>
        </article>

    )
}