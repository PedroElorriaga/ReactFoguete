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

export default function Checkout() {

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
                        <CoffeOrderDetailContent>
                            <img src="/coffe-cuban.svg" />
                            <CoffeQuantityContent>
                                <h4>Cubano</h4>
                                <div className="itensButons">
                                    <div className="counterWrapper">
                                        <button><Minus size={15} /></button>
                                        <p>1</p>
                                        <button><Plus size={15} /></button>
                                    </div>
                                    <button className="removeItem"><span><Trash size={15} /></span>REMOVER</button>
                                </div>
                            </CoffeQuantityContent>
                            <h5>R$<span>9,90</span></h5>
                        </CoffeOrderDetailContent>
                        <CoffeOrderDetailContent>
                            <img src="/coffe-cuban.svg" />
                            <CoffeQuantityContent>
                                <h4>Cubano</h4>
                                <div className="itensButons">
                                    <div className="counterWrapper">
                                        <button><Minus size={15} /></button>
                                        <p>1</p>
                                        <button><Plus size={15} /></button>
                                    </div>
                                    <button className="removeItem"><span><Trash size={15} /></span>REMOVER</button>
                                </div>
                            </CoffeQuantityContent>
                            <h5>R$<span>9,90</span></h5>
                        </CoffeOrderDetailContent>
                        <OrderTotalPricingContent>
                            <div>Total de itens<span>R$ 9,90</span></div>
                            <div>Entrega<span>R$ 5,00</span></div>
                            <div className="totalOrder">Total<span>R$ 14,90</span></div>
                            <button>CONFIRMAR PEDIDO</button>
                        </OrderTotalPricingContent>
                    </OrderPricingDetailContent>
                </OrderDetailContent>
            </CheckoutContanier>
        </>
    )
}