import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post(props) {
    // STATE Fica a nivel de escopo do componente, ou seja, adiciona o comentario somente no "Post" atual
    const [comentarios, setComentarios] = useState(props.comentarios || [])
    const [conteudoComentario, setConteudoComentario] = useState('')

    // Usando biblioteca date-fns
    const formatarDataString = format(new Date(props.postadoEm), "d 'de' MMM 'de' yyy 'as' HH'h'", {
        locale: ptBr
    })

    const calcularTempoDeEnvio = (data = props.postadoEm) => formatDistanceToNow(new Date(data), {
        locale: ptBr,
        addSuffix: true
    })

    function handleSubmitFormulario() {
        event.preventDefault()
        if (!conteudoComentario.trim()) return

        const novoComentario = {
            idComentario: comentarios.length + 1,
            autor: {
                nome: 'Pedro Elorriaga',
                avatar: 'https://github.com/pedroElorriaga.png'
            },
            postadoEm: Date.now(),
            conteudo: conteudoComentario
        }

        setComentarios([...comentarios, novoComentario])
        setConteudoComentario('')
    }

    function deleteComentario(idComentario) {
        // Imutabilidade, no react nunca mudamos uma informação, sempre criamos uma nova informação
        const listaSemComentarioDeletado = comentarios.filter(comentario => {
            if (comentario.idComentario != idComentario) return comentario
        })

        setComentarios(listaSemComentarioDeletado)
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
                    onChange={(e) => { setConteudoComentario(e.target.value), e.target.setCustomValidity('') }}
                    placeholder='Que imagem incrivel !!'
                    onInvalid={(e) => console.log(e.target.setCustomValidity('O preenchimento é obrigatório'))}
                    required
                />

                <div className={styles.botaoMagico}>
                    <button type='submit'>Enviar</button>
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
                    />
                )
            }) : null}
        </article>
    )
}
