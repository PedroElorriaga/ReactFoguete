import styled from "styled-components";


export const SuccessContanier = styled.main`
    display: flex;
    padding: 8rem 20rem;
    justify-content: space-between;

    img {
        margin-top: 4rem;
    }

`

export const DeliveryInfoContanier = styled.div`
    display: flex;
    flex-direction: column;

    div {
        & h1 {
            margin: 0;
            color: ${props => props.theme["yellow-dark"]};
            font-weight: bold;
            padding: 0.5rem 0;
            font-size: 2.25rem;
        }

        & p {
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.5rem;
        }
    }

`

export const DeliveryInfoContent = styled.div`
    margin-top: 3rem;
    width: 40.875rem;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(to right,${props => props.theme["yellow"]},${props => props.theme["purple"]});

    .infosData {
        background-color: white;
        border-radius: 6px 36px;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        & p {
            color: ${props => props.theme["base-text"]};
            display: flex;
            align-items: center;
            gap: 1rem;

            & span {
                color: ${props => props.theme["white"]};
                border-radius: 50%;
                height: 38px;
                width: 38px;
                display: flex;
                align-items: center;
                justify-content: center; 
                flex-shrink: 0; /* Evita que o círculo encolha */

            }
        }

    }

`

const CirclesColors = {
    darkYellow: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple'
} as const

interface CirclesColorsProps {
    circlescolors: keyof typeof CirclesColors
}

export const CirclesColor = styled.span<CirclesColorsProps>`
    background-color: ${props => props.theme[CirclesColors[props.circlescolors]]};
`