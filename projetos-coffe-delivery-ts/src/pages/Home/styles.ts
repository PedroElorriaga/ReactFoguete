import styled from "styled-components";


export const HomeBrandContanier = styled.main`
    display: flex;
    height: 34rem;
    padding: 8rem 20rem;
    justify-content: space-between;
    margin: 0;

    img {
        height: 22.5rem;
        width: 29.75rem;
    }
`

export const ArticleContanier = styled.article`
    display: flex;
    flex-direction: column;

`

export const BrandContent = styled.div`
    width: 38.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        margin: 0;
        color: ${props => props.theme["base-title"]};
        font-size: 3.35rem;
    }

    p {
        font-size: 1.5rem;
        color: ${props => props.theme["base-subtitle"]};
    }

`

export const BenefitsContent = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 39rem;
    gap: 1rem;
    padding: 3rem 0;

    p {
        color: ${props => props.theme["base-text"]};
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        gap: 1rem;
        flex: 1 1 calc(50% - 1rem); /* Garante que cada item ocupe 50% da largura */

        & span {
            color: ${props => props.theme["white"]};
            border-radius: 50%;
            height: 32px;
            width: 32px;
            display: flex;
            align-items: center;
            justify-content: center; 
            flex-shrink: 0; /* Evita que o círculo encolha */
        }
    }
`

const BenefitsCirclesColors = {
    darkYellow: 'yellow-dark',
    yellow: 'yellow',
    gray: 'base-text',
    purple: 'purple'
} as const

interface BenefitsCirclesColorsProps {
    benefitscirclescolors: keyof typeof BenefitsCirclesColors
}

export const BenefitsCircles = styled.span<BenefitsCirclesColorsProps>`
    background-color: ${props => props.theme[BenefitsCirclesColors[props.benefitscirclescolors]]};
`