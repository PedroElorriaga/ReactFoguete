import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

const formatarData = (dateString) => {
    const data = new Date(dateString)
    const dataAgora = new Date();
    const dataEmSeg = Math.floor((dataAgora - data) / 1000)

    if (dataEmSeg < 60) return `Há ${dataEmSeg}s atrás`

    const dataEmMin = Math.floor(dataEmSeg / 60)
    if (dataEmMin < 60) return `Há ${dataEmMin}m atrás`

    const dataEmHoras = Math.floor(dataEmMin / 60)
    if (dataEmHoras < 24) return `Há ${dataEmHoras}h atrás`

    const dataEmDias = Math.floor(dataEmHoras / 24)
    return `Há ${dataEmDias}d atrás`
}

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                    <Avatar
                        avatar={props.autor.avatar}
                    />
                    <div className={styles.autorInfo}>
                        <strong>{props.autor.nome}</strong>
                        <span>{props.autor.cargo}</span>
                    </div>
                </div>

                <time dateTime={props.postadoEm}>{formatarData(props.postadoEm)}</time>
            </header>

            <div className={styles.conteudo}>
                <p>{props.conteudo}</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Comentar sobre</strong>

                <textarea placeholder='Que imagem incrivel !!' />

                <div className={styles.botaoMagico}>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
            {props.comentarios ? props.comentarios.map(prop => {
                return (
                    <Comment
                        nome={prop.autor.nome}
                        avatar={prop.autor.avatar}
                        postadoEm={formatarData(prop.postadoEm)}
                        conteudo={prop.conteudo}
                    />
                )
            }) : null}
        </article>
    )
}
