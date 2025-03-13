import pomodoroLogo from '../../assets/pomodoro-logo.svg';
import { CgTime, CgLoadbarDoc } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

import { HeaderContanier } from './styles';

export default function Header() {
    return (
        <>
            <HeaderContanier>
                <img src={pomodoroLogo} />
                <nav>
                    <NavLink to="/" title='Timer'><CgTime size={25} /></NavLink>
                    <NavLink to="/historic" title='Histórico'><CgLoadbarDoc size={25} /></NavLink>
                </nav>
            </HeaderContanier>
        </>

    )
}