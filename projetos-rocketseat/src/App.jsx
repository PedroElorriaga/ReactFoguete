import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

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
          <Post
            autor='Pedro Elorriaga'
            cargo='Video Maker Pro'
            avatar='https://github.com/pedroElorriaga.png'
            conteudo='Pedrinho agora esta desenvolvendo em React!'
          />
          <Post
            autor='Matheus Pimentel'
            cargo='Video Editor Mid'
            avatar='https://github.com/pimentazil.png'
            conteudo='Pimentazil agora esta desenvolvendo em Python!'
          />
        </main>
      </div>
    </>
  )
}

export default App
