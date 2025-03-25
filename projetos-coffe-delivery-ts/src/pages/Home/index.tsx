import Header from "../../components/Header";
import BannerCoffe from "/coffe-banner.svg";
import {
    HomeBrandContanier,
    ArticleContanier,
    BrandContent,
    BenefitsContent,
    BenefitsCircles
} from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

import Catalog from "./components/Catalog";

export default function Home() {

    return (
        <>
            <Header />
            <HomeBrandContanier>
                <ArticleContanier>
                    <BrandContent>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </BrandContent>
                    <BenefitsContent>
                        <p>
                            <BenefitsCircles benefitscirclescolors='darkYellow'>
                                <ShoppingCart weight="fill" size={18} />
                            </BenefitsCircles>
                            Compra simples e segura
                        </p>
                        <p>
                            <BenefitsCircles benefitscirclescolors='gray'>
                                <Package weight="fill" size={18} />
                            </BenefitsCircles>
                            Embalagem mantém o café intacto
                        </p>
                        <p>
                            <BenefitsCircles benefitscirclescolors='yellow'>
                                <Timer weight="fill" size={18} />
                            </BenefitsCircles>
                            Entrega rápida e rastreada
                        </p>
                        <p>
                            <BenefitsCircles benefitscirclescolors='purple'>
                                <Coffee weight="fill" size={18} />
                            </BenefitsCircles>
                            O café chega fresquinho até você
                        </p>
                    </BenefitsContent>
                </ArticleContanier>
                <img src={BannerCoffe} alt="" />
            </HomeBrandContanier>
            <Catalog />
        </>
    )
}