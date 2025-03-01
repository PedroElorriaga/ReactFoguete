import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const postsFromApi = [
  {
    id: 1,
    autor: {
      nome: 'Pedro Elorriaga',
      cargo: 'Video Maker Pro',
      avatar: 'https://github.com/pedroElorriaga.png'
    },
    postadoEm: new Date('2025-02-26T11:30:00'),
    conteudo: 'Veja como fiz essa captura Era mais um dia da minha jornada, quando derrepente vejo um casal de pardais Ainda bem, consegui registrar este momento lindo!',
    comentarios: [
      {
        autor: {
          nome: 'Caio Henrique',
          avatar: 'https://github.com/caiodev.png'
        },
        postadoEm: new Date('2025-03-01T17:00:00'),
        conteudo: 'Caramba, ficou incrivel mesmo!!'
      },
      {
        autor: {
          nome: 'Julia Potassio',
          avatar: 'https://github.com/julia.png'
        },
        postadoEm: new Date('2025-02-26T21:20:00'),
        conteudo: 'Vou usar de fundo de tela hahaha'
      }
    ]
  },
  {
    id: 2,
    autor: {
      nome: 'Matheus Pimenta',
      cargo: 'Video Editor Jr',
      avatar: 'https://github.com/pimentazil.png'
    },
    postadoEm: new Date('2025-02-24T21:53:00'),
    conteudo: 'Consegui fazer um CGI desta destruição na cena, olha só como foi trabalhoso adicionar estes detalhes',
    comentarios: []
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar
          autor='Pedro Elorriaga'
          cargo='Video Maker Pro'
          avatar='https://github.com/pedroElorriaga.png'
        />
        <main>
          {postsFromApi.map(post => {
            return (
              <Post
                autor={post.autor}
                postadoEm={post.postadoEm}
                conteudo={post.conteudo}
                comentarios={post.comentarios}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
