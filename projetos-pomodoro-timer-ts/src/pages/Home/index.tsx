import { MainContanier } from './styles';
import { Play } from "@phosphor-icons/react";

export default function Home() {

    return (
        <MainContanier>
            <form action="">
                <header>
                    <label htmlFor="text">Vou trabalhar em </label>
                    <input type="text" list="text-suggestion" id="text" placeholder='Dê um nome para o seu projeto' />
                    <datalist id="text-suggestion">
                        <option>Estudar react</option>
                    </datalist>
                    <label htmlFor="number">durante</label>
                    <input type="number" id="number" placeholder='00' />
                    <span>minutos.</span>
                </header>
                <article>
                    <div>0</div>
                    <div>0</div>
                    <span>:</span>
                    <div>0</div>
                    <div>0</div>
                </article>
                <button type='submit'><Play size={30} />Começar</button>
            </form>
        </MainContanier>
    )
}