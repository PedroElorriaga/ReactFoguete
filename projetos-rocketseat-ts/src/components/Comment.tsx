import { Avatar } from './Avatar';

import styles from './Comment.module.css'
import { SlLike, SlClose } from "react-icons/sl";

interface CommentProps {
    onDeleteComentario: (idComentario: number) => void,
    onincrementarLikeComentario: (idComentario: number) => void,
    idComentario: number,
    avatar: string,
    nome: string,
    conteudo: string,
    postadoEm: string,
    likeCount: number
}

export function Comment(props: CommentProps) {
    function handleDeleteComentario() {
        props.onDeleteComentario(props.idComentario)
    }

    function handleLikeComentario() {
        props.onincrementarLikeComentario(props.idComentario)
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
            <button className={styles.botaoCurtir} type='submit' onClick={handleLikeComentario}>
                <SlLike size={15} />
                Gostei<span>{props.likeCount}</span>
            </button>
        </article>

    )
}