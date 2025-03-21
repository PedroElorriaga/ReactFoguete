import {
    CatalogContanier,
    CatalogContent,
    CoffeCard,
    CoffeTag,
    CoffeContent,
    CoffePricingContent,
    CoffePricingCartContent
} from "./styles"
import coffeTraditional from '/coffe-traditional.svg'
import { ShoppingCart } from "@phosphor-icons/react";


export default function Catalog() {

    return (
        <>
            <CatalogContanier>
                <h2>Nossos cafés</h2>
                <CatalogContent>
                    <CoffeCard>
                        <img src={coffeTraditional} />
                        <CoffeTag>
                            <span>TRADICIONAL</span>
                        </CoffeTag>
                        <CoffeContent>
                            <h3>Expresso Tradicional</h3>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </CoffeContent>
                        <CoffePricingContent>
                            <h4>R$<span>9,90</span></h4>
                            <CoffePricingCartContent>
                                <input type="number" value={1} />
                                <button><ShoppingCart weight="fill" size={23} /></button>
                            </CoffePricingCartContent>
                        </CoffePricingContent>
                    </CoffeCard>
                </CatalogContent>
            </CatalogContanier>
        </>
    )
}