import { MainContanier } from './styles';

export default function Home() {

    return (
        <MainContanier>
            <header>
                Vou trabalhar em <input type="text" placeholder='Dê um nome para o seu projeto' /> durante <input type="time" /> minutos.
            </header>
            <article>
                <div>0</div>
                <div>0</div>
                <span>:</span>
                <div>0</div>
                <div>0</div>
            </article>
            <button>Começar</button>
        </MainContanier>
    )
}