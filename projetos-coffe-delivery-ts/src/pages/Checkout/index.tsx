import { useContext } from "react";
import Header from "../../components/Header";
import {
    CheckoutContanier,
    OrderContent,
    OrderFormContent,
    OrderFormInputsContent,
    OrderFormPaymentContent,
    PaymentTypesContent,
    OrderDetailContent,
    OrderPricingDetailContent,
    CoffeOrderDetailContent,
    CoffeQuantityContent,
    OrderTotalPricingContent
} from './styles';
import {
    MapPinLine,
    CurrencyDollarSimple,
    Money,
    CreditCard,
    PixLogo,
    Minus,
    Plus,
    Trash
} from '@phosphor-icons/react';
import { ItensContext } from "../../context/ItensContext";


export default function Checkout() {
    const { itensInTheCart,
        removeItemInTheCart,
        updateItemInTheCart } = useContext(ItensContext)

    const sumOfTotalItens = () => {
        let sumItens = 0.0
        itensInTheCart.map(item => {
            sumItens += item.coffes.coffePrice * item.coffeQuantity
        })

        return sumItens
    }

    const handleRemoveItem = (id: number) => {
        removeItemInTheCart(id)
    }

    const handleUpdateItem = (id: number, increment: boolean = false) => {
        updateItemInTheCart(id, increment)
    }

    return (
        <>
            <Header />
            <CheckoutContanier>
                <OrderContent>
                    <h2>Complete seu pedido</h2>
                    <OrderFormContent>
                        <h3><span><MapPinLine size={23} /></span>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        <OrderFormInputsContent>
                            <input id="cep" type="text" placeholder="CEP" />
                            <input id="street" type="text" placeholder="Rua" />
                            <input id="number" type="number" placeholder="Número" />
                            <input id="complement" type="text" placeholder="Complemento" />
                            <input id="neighborhood" type="text" placeholder="Bairro" />
                            <input id="city" type="text" placeholder="Cidade" />
                            <input id="uf" type="text" placeholder="UF" />
                        </OrderFormInputsContent>
                    </OrderFormContent>
                    <OrderFormPaymentContent>
                        <h3><span><CurrencyDollarSimple size={23} /></span>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        <PaymentTypesContent>
                            <button><span><CreditCard size={17} /></span>CARTÃO DE CRÉDITO</button>
                            <button><span><Money size={17} /></span>DINHEIRO</button>
                            <button><span><PixLogo size={17} /></span>PIX</button>
                        </PaymentTypesContent>
                    </OrderFormPaymentContent>
                </OrderContent>
                <OrderDetailContent>
                    <h2>Cafés selecionados</h2>
                    <OrderPricingDetailContent>
                        {itensInTheCart.map(item => {
                            return (
                                <CoffeOrderDetailContent>
                                    <img src={item.coffes.coffeImage} />
                                    <CoffeQuantityContent>
                                        <h4>{item.coffes.coffeTitle}</h4>
                                        <div className="itensButons">
                                            <div className="counterWrapper">
                                                <button><Minus size={15} onClick={() => handleUpdateItem(item.coffes.id)} /></button>
                                                <p>{item.coffeQuantity}</p>
                                                <button><Plus size={15} onClick={() => handleUpdateItem(item.coffes.id, true)} /></button>
                                            </div>
                                            <button className="removeItem"
                                                onClick={() => handleRemoveItem(item.coffes.id)}>
                                                <span><Trash size={15} /></span>
                                                REMOVER
                                            </button>
                                        </div>
                                    </CoffeQuantityContent>
                                    <h5>R$<span>{(item.coffeQuantity * item.coffes.coffePrice).toFixed(2).replace('.', ',')}</span></h5>
                                </CoffeOrderDetailContent>
                            )
                        })}
                        <OrderTotalPricingContent>
                            <div>Total de itens<span>R$ {sumOfTotalItens().toFixed(2).replace('.', ',')}</span></div>
                            <div>Entrega<span>R$ 5,00</span></div>
                            <div className="totalOrder">Total<span>R$ {(sumOfTotalItens() + 5).toFixed(2).replace('.', ',')}</span></div>
                            <button>CONFIRMAR PEDIDO</button>
                        </OrderTotalPricingContent>
                    </OrderPricingDetailContent>
                </OrderDetailContent>
            </CheckoutContanier>
        </>
    )
}