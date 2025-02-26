import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                    <Avatar
                        avatar={props.avatar}
                    />
                    <div className={styles.autorInfo}>
                        <strong>{props.autor}</strong>
                        <span>{props.cargo}</span>
                    </div>
                </div>

                <time dateTime={props.time}>Publicado há 44 Minutos</time>
            </header>

            <div className={styles.conteudo}>
                <p>Veja como fiz essa captura</p>
                <p>Era mais um dia da minha jornada, quando derrepente vejo um casal de pardais</p>
                <p>Ainda bem, consegui registrar este momento lindo!</p>
                <p><a href="#">#Passaros #Paisagem</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Comentar sobre</strong>

                <textarea placeholder='Que imagem incrivel !!' />

                <div className={styles.botaoMagico}>
                    <button type='submit'>Enviar</button>
                </div>
            </form>

            <Comment
                avatar='https://github.com/caiodev.png'
                autor='Caio Henrique'
            />

            <Comment
                avatar='https://github.com/julia.png'
                autor='Julia Potassio'
            />
        </article>
    )
}
