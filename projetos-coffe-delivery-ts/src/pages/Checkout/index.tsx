import { useContext, useState } from "react";
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
import { useForm } from "react-hook-form";

import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const onSubmitFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'CEP é obrigatório').max(8),
    street: zod.string().min(1, 'Rua é obrigatória'),
    number: zod.string().min(1, 'Número da residência é obrigatório'),
    neighborhood: zod.string().min(1, 'Bairro é obrigatório'),
    city: zod.string().min(1, 'Cidade é obrigatória'),
    uf: zod.string().min(2, 'Cidade é obrigatória').max(2),

})

type FormInfo = zod.infer<typeof onSubmitFormValidationSchema>

export default function Checkout() {
    const [paymenytType, setPaymenytType] = useState<'pix' | 'cash' | 'credit' | null>(null)

    const { register } = useForm<FormInfo>({
        resolver: zodResolver(onSubmitFormValidationSchema)
    })

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
                    <OrderFormContent id="addressOrder">
                        <h3><span><MapPinLine size={23} /></span>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        <OrderFormInputsContent>
                            <input id="cep" type="text" placeholder="CEP" {...register('cep')} />
                            <input id="street" type="text" placeholder="Rua" {...register('street')} />
                            <input id="number" type="number" placeholder="Número" {...register('number')} />
                            <input id="complement" type="text" placeholder="Complemento" />
                            <input id="neighborhood" type="text" placeholder="Bairro" {...register('neighborhood')} />
                            <input id="city" type="text" placeholder="Cidade" {...register('city')} />
                            <input id="uf" type="text" placeholder="UF" {...register('uf')} />
                        </OrderFormInputsContent>
                    </OrderFormContent>
                    <OrderFormPaymentContent>
                        <h3><span><CurrencyDollarSimple size={23} /></span>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        <PaymentTypesContent>
                            {/* FORMA INTERESANTE DE CLASSIFICAR SELECIONADOS */}
                            <button onClick={() => setPaymenytType('credit')} className={paymenytType === 'credit' ? 'selected' : ''}>
                                <span><CreditCard size={17} /></span>
                                CARTÃO DE CRÉDITO
                            </button>
                            <button onClick={() => setPaymenytType('cash')} className={paymenytType === 'cash' ? 'selected' : ''}>
                                <span><Money size={17} /></span>
                                DINHEIRO
                            </button>
                            <button onClick={() => setPaymenytType('pix')} className={paymenytType === 'pix' ? 'selected' : ''}>
                                <span><PixLogo size={17} /></span>
                                PIX
                            </button>
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
                            <button type="submit" form="addressOrder" disabled={!paymenytType}>CONFIRMAR PEDIDO</button>
                        </OrderTotalPricingContent>
                    </OrderPricingDetailContent>
                </OrderDetailContent>
            </CheckoutContanier>
        </>
    )
}