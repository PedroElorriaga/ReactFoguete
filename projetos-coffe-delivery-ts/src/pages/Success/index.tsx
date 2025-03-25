import Header from "../../components/Header";
import {
    SuccessContanier,
    DeliveryInfoContanier,
    DeliveryInfoContent,
    CirclesColor
} from "./styles"
import BannerMotorcycle from "/success-motorcycle.svg"
import { Timer, MapPin, CurrencyCircleDollar } from "@phosphor-icons/react";

export default function Success() {

    return (
        <>
            <Header />
            <SuccessContanier>
                <DeliveryInfoContanier>
                    <div>
                        <h1>Uhu! Pedido confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </div>
                    <DeliveryInfoContent>
                        <div className="infosData">
                            <p>
                                <CirclesColor circlescolors="purple"><MapPin weight="fill" size={18} /></CirclesColor>
                                <div>Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto Alegre, RS</div>
                            </p>
                            <p>
                                <CirclesColor circlescolors="yellow"><Timer weight="fill" size={18} /></CirclesColor>
                                <div>Previsão de entrega <br /><b>20 min - 30 min</b></div>
                            </p>
                            <p>
                                <CirclesColor circlescolors="darkYellow"><CurrencyCircleDollar weight="fill" size={18} /></CirclesColor>
                                <div>Pagamento na entrega <br /><b>Cartão de Crédito</b></div>
                            </p>
                        </div>
                    </DeliveryInfoContent>
                </DeliveryInfoContanier>
                <img src={BannerMotorcycle} />
            </SuccessContanier>
        </>
    )
}