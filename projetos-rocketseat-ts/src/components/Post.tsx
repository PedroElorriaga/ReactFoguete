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
export interface PostType {
    id: number,
    autor: {
        nome: string,
        cargo: string,
        avatar: string
    },
    postadoEm: Date,
    conteudo: string,
    comentarios: Comentario[]
}

// Colocando as informações em post, para não precisar enviar um monte de informação na hora de chamar o componente
interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    // STATE Fica a nivel de escopo do componente, ou seja, adiciona o comentario somente no "Post" atual
    const [comentarios, setComentarios] = useState(post.comentarios || [])
    const [conteudoComentario, setConteudoComentario] = useState('')

    // Usando biblioteca date-fns
    const formatarDataString = format(new Date(post.postadoEm), "d 'de' MMM 'de' yyy 'as' HH'h'", {
        locale: ptBR
    })

    const calcularTempoDeEnvio = (data = post.postadoEm) => formatDistanceToNow(new Date(data), {
        locale: ptBR,
        addSuffix: true
    })

    // Atenção, isso é uma forma paliativa de usar o sistema de comentarios sem a necessidade do banco de dados
    function incrementarIdComentario() {
        return Math.max(
            ...comentarios.flatMap((comentario) => comentario.idComentario),
            0
        )
    }

    function handleSubmitFormulario(event: FormEvent) {
        event.preventDefault()
        if (!conteudoComentario.trim()) return

        const novoComentario = {
            idComentario: incrementarIdComentario() + 1,
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
                        avatar={post.autor.avatar}
                    />
                    <div className={styles.autorInfo}>
                        <strong>{post.autor.nome}</strong>
                        <span>{post.autor.cargo}</span>
                    </div>
                </div>

                <time title={formatarDataString} dateTime={post.postadoEm.toISOString()}>{calcularTempoDeEnvio()}</time>
            </header>

            <div className={styles.conteudo}>
                <p>{post.conteudo}</p>
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
