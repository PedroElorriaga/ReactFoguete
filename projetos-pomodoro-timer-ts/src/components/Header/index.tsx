import pomodoroLogo from '../../assets/pomodoro-logo.svg';
import { CgTime, CgLoadbarDoc } from "react-icons/cg";

import { HeaderStyle } from './styles';

export default function Header() {
    return (
        <>
            <header>
                <img src={pomodoroLogo} />
                <div>
                    <a href="/" className='homeIcon'><CgTime size={25} /></a>
                    <a href="/historic"><CgLoadbarDoc size={25} /></a>
                </div>
            </header>
            <HeaderStyle />
        </>

    )
}