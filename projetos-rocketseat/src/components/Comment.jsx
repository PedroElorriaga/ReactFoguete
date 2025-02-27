import { Avatar } from './Avatar';

import styles from './Comment.module.css'
import { SlLike } from "react-icons/sl";

export function Comment(props) {
    return (
        <article>
            <div className={styles.comment}>
                <Avatar
                    avatar={props.avatar}
                />
                <div className={styles.conteudo}>
                    <strong className={styles.autor}>{props.nome}</strong>
                    <time>{props.postadoEm}</time>
                    <p>{props.conteudo}</p>
                </div>
            </div>
            <button type='submitComment'>
                <SlLike size={15} />
                Gostei<span>5</span>
            </button>
        </article>

    )
}