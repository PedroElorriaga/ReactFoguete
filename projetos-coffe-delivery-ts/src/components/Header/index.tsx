import { HeaderContanier, NavStyle } from "./styles"
import Logo from "/logo.svg"
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <HeaderContanier>
            <NavLink to="/"><h1><img src={Logo} alt="" /></h1></NavLink>
            <NavStyle>
                <a href="">
                    <span>
                        <MapPin size={20} weight="fill" />
                    </span>
                    Barueri, SP
                </a>
                <NavLink className="cartLink" to="/checkout"><ShoppingCart size={20} weight="fill" /></NavLink>
            </NavStyle>
        </HeaderContanier>
    )
}