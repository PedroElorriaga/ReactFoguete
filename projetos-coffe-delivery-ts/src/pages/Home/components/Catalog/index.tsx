import { useEffect, useState } from "react";
import {
    CatalogContanier,
    CatalogContent,
    CoffeCard,
    CoffeTag,
    CoffeContent,
    CoffePricingContent,
    CoffePricingCartContent
} from "./styles"
import { ShoppingCart, Minus, Plus } from "@phosphor-icons/react";


interface CoffeStockType {
    id: number,
    coffeTitle: string,
    coffeDescription: string,
    coffePrice: string,
    coffeTags: string[],
    coffeImage: string
}

const coffeStock: CoffeStockType[] = [
    {
        id: 1,
        coffeTitle: 'Expresso Americano',
        coffeDescription: 'Expresso diluído, menos intenso que o tradicional',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL'],
        coffeImage: '/coffe-americano.svg'
    },
    {
        id: 2,
        coffeTitle: 'Expresso Tradicional',
        coffeDescription: 'O tradicional café feito com água quente e grãos moídos',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL'],
        coffeImage: '/coffe-traditional.svg'
    },
    {
        id: 3,
        coffeTitle: 'Expresso Cremoso',
        coffeDescription: 'Café expresso tradicional com espuma cremosa',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL'],
        coffeImage: '/coffe-express.svg'
    },
    {
        id: 4,
        coffeTitle: 'Expresso Gelado',
        coffeDescription: 'Bebida preparada com café expresso e cubos de gelo',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL', 'GELADO'],
        coffeImage: '/coffe-gelado.svg'
    },
    {
        id: 5,
        coffeTitle: 'Café com Leite',
        coffeDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL', 'COM LEITE'],
        coffeImage: '/coffe-milk.svg'
    },
    {
        id: 6,
        coffeTitle: 'Latte',
        coffeDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL', 'COM LEITE'],
        coffeImage: '/coffe-latte.svg'
    },
    {
        id: 7,
        coffeTitle: 'Capuccino',
        coffeDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL', 'COM LEITE'],
        coffeImage: '/coffe-capuccino.svg'
    },
    {
        id: 8,
        coffeTitle: 'Mocaccino',
        coffeDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
        coffePrice: '9,90',
        coffeTags: ['TRADICIONAL', 'COM LEITE'],
        coffeImage: '/coffe-mocaccino.svg'
    },
    {
        id: 9,
        coffeTitle: 'Cubano',
        coffeDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        coffePrice: '9,90',
        coffeTags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        coffeImage: '/coffe-cuban.svg'
    },
    {
        id: 10,
        coffeTitle: 'Irlandês',
        coffeDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        coffePrice: '9,90',
        coffeTags: ['ESPECIAL', 'ALCOÓLICO'],
        coffeImage: '/coffe-irland.svg'
    }
]

interface ItemCartState {
    coffes: CoffeStockType,
    coffeQuantity: number
}

export default function Catalog() {
    const [qntdItemCart, setQntditemCart] = useState<ItemCartState[]>([])

    useEffect(() => {
        const newCoffeStock = coffeStock.map(item => {
            return { coffes: item, coffeQuantity: 1 }
        })

        setQntditemCart(newCoffeStock)
    }, [])

    const handleMinusClickItem = (id: number) => {
        setQntditemCart(state =>
            state.map(item => {
                if (item.coffes.id === id) {
                    return item.coffeQuantity > 1
                        ? { ...item, coffeQuantity: item.coffeQuantity - 1 }
                        : item
                }
                return item
            })
        )
    }

    const handlePlusClickItem = (id: number) => {
        setQntditemCart(state =>
            state.map(item => {
                if (item.coffes.id === id) {
                    return item.coffeQuantity < 10
                        ? { ...item, coffeQuantity: item.coffeQuantity + 1 }
                        : item
                }
                return item
            })
        )
    }

    return (
        <>
            <CatalogContanier>
                <h2>Nossos cafés</h2>
                <CatalogContent>
                    {coffeStock.map(item => {
                        return (
                            <CoffeCard key={item.id}>
                                <img src={item.coffeImage} />
                                <CoffeTag>
                                    {item.coffeTags.map(tag => {
                                        return (
                                            <span>{tag}</span>
                                        )
                                    })}
                                </CoffeTag>
                                <CoffeContent>
                                    <h3>{item.coffeTitle}</h3>
                                    <p>{item.coffeDescription}</p>
                                </CoffeContent>
                                <CoffePricingContent>
                                    <h4>R$<span>{item.coffePrice}</span></h4>
                                    <CoffePricingCartContent>
                                        <div className="counterWrapper">
                                            <button onClick={() => handleMinusClickItem(item.id)}><Minus size={15} /></button>
                                            {qntdItemCart.map(itemCart => {
                                                if (itemCart.coffes.id === item.id) return (
                                                    <p>{itemCart.coffeQuantity}</p>
                                                )
                                            })}
                                            <button onClick={() => handlePlusClickItem(item.id)}><Plus size={15} /></button>
                                        </div>
                                        <button className="addToCart"><ShoppingCart weight="fill" size={23} /></button>
                                    </CoffePricingCartContent>
                                </CoffePricingContent>
                            </CoffeCard>
                        )
                    })}
                </CatalogContent>
            </CatalogContanier>
        </>
    )
}