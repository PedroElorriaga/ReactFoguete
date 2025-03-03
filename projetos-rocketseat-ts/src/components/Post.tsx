import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

interface Comentario {
    idComentario: number,
    autor: {
        nome: string,
        avatar: string
    },
    postadoEm: Date,
    conteudo: string,
    likeCount: number
}

// Declarando o tipo das Props do post
interface PostProps {
    autor: {
        nome: string,
        cargo: string,
        avatar: string
    },
    postadoEm: Date,
    conteudo: string,
    comentarios: Comentario[]
}

export function Post(props: PostProps) {
    // STATE Fica a nivel de escopo do componente, ou seja, adiciona o comentario somente no "Post" atual
    const [comentarios, setComentarios] = useState(props.comentarios || [])
    const [conteudoComentario, setConteudoComentario] = useState('')

    // Usando biblioteca date-fns
    const formatarDataString = format(new Date(props.postadoEm), "d 'de' MMM 'de' yyy 'as' HH'h'", {
        locale: ptBR
    })

    const calcularTempoDeEnvio = (data = props.postadoEm) => formatDistanceToNow(new Date(data), {
        locale: ptBR,
        addSuffix: true
    })

    function handleSubmitFormulario(event: FormEvent) {
        event.preventDefault()
        if (!conteudoComentario.trim()) return

        const novoComentario = {
            idComentario: comentarios.length + 1,
            autor: {
                nome: 'Pedro Elorriaga',
                avatar: 'https://github.com/pedroElorriaga.png'
            },
            postadoEm: new Date(Date.now()), //Alterado, pois Date.now() é um number e não um dado do tipo Date
            conteudo: conteudoComentario,
            likeCount: 0
        }

        setComentarios([...comentarios, novoComentario])
        setConteudoComentario('')
    }

    function handleChangeConteudoComentario(event: ChangeEvent<HTMLTextAreaElement>) {
        setConteudoComentario(event.target.value)
        event.target.setCustomValidity('')
    }

    function handleInvalidConteudoComentario(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('O preenchimento é obrigatório')
    }

    function deleteComentario(idComentario: number) {
        // Imutabilidade, no react nunca mudamos uma informação, sempre criamos uma nova informação
        const listaSemComentarioDeletado = comentarios.filter(comentario => {
            if (comentario.idComentario != idComentario) return comentario
        })

        setComentarios(listaSemComentarioDeletado)
    }

    function incrementarLikeComentario(idComentario: number) {
        const listaComComentarioAtualizado = comentarios.map(comentario =>
            comentario.idComentario == idComentario
                ? { ...comentario, likeCount: comentario.likeCount + 1 } // Uso do spread, mantendo o imutabilidadee ( Feito com ajuda de AI )
                : comentario
        )

        setComentarios(listaComComentarioAtualizado)
    }

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

                <time title={formatarDataString} dateTime={props.postadoEm.toISOString()}>{calcularTempoDeEnvio()}</time>
            </header>

            <div className={styles.conteudo}>
                <p>{props.conteudo}</p>
            </div>

            <form onSubmit={handleSubmitFormulario} className={styles.commentForm}>
                <strong>Comentar sobre</strong>

                <textarea
                    value={conteudoComentario}
                    onChange={handleChangeConteudoComentario}
                    placeholder='Que imagem incrivel !!'
                    onInvalid={handleInvalidConteudoComentario}
                    required
                />

                <div className={styles.botaoMagico}>
                    <button className={styles.botaoComentario} type='submit'>Enviar</button>
                </div>
            </form>
            {comentarios ? comentarios.map(prop => {
                return (
                    <Comment
                        key={prop.idComentario}
                        idComentario={prop.idComentario}
                        nome={prop.autor.nome}
                        avatar={prop.autor.avatar}
                        postadoEm={calcularTempoDeEnvio(prop.postadoEm)}
                        conteudo={prop.conteudo}
                        onDeleteComentario={deleteComentario}
                        likeCount={prop.likeCount}
                        onincrementarLikeComentario={incrementarLikeComentario}
                    />
                )
            }) : null}
        </article>
    )
}
