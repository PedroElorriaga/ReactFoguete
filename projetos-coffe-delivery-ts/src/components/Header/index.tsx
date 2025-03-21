import { HeaderContanier, NavStyle } from "./styles"
import Logo from "/logo.svg"
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export default function Header() {

    return (
        <HeaderContanier>
            <h1><img src={Logo} alt="" /></h1>
            <NavStyle>
                <a href="">
                    <span>
                        <MapPin size={20} weight="fill" />
                    </span>
                    Barueri, SP
                </a>
                <a className="cartLink" href=""><ShoppingCart size={20} weight="fill" /></a>
            </NavStyle>
        </HeaderContanier>
    )
}