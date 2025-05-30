import { Avatar } from './Avatar';

import styles from './Comment.module.css'
import { SlLike, SlClose } from "react-icons/sl";

export function Comment(props) {
    function handleDeleteComentario() {
        props.onDeleteComentario(props.idComentario)
    }

    function handleLikeComentario() {
        props.onicrementarLikeComentario(props.idComentario)
    }

    return (
        <article>
            <div className={styles.comment}>
                <Avatar
                    avatar={props.avatar}
                />
                <div className={styles.conteudo}>
                    <strong className={styles.autor}>
                        {props.nome}
                        <SlClose
                            className={styles.deleteIcon}
                            onClick={handleDeleteComentario}
                        />
                    </strong>
                    <time>{props.postadoEm}</time>
                    <p>{props.conteudo}</p>
                </div>
            </div>
            <button type='submitComment' onClick={handleLikeComentario}>
                <SlLike size={15} />
                Gostei<span>{props.likeCount}</span>
            </button>
        </article>

    )
}