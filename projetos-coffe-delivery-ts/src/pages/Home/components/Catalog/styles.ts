import styled from "styled-components"

export const CatalogContanier = styled.main`
    display: flex;
    flex-direction: column;
    padding: 8rem 20rem;

    h2 {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 2rem;
    }
`

export const CatalogContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    gap: 2rem;

`

export const CoffeCard = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme["base-card"]};
    width: 16rem;
    height: 19.5rem;
    border-top-right-radius: 10%;
    border-bottom-left-radius: 10%;
    align-items: center;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.5rem;
    }
`

export const CoffeTag = styled.div`
    display: flex;
    gap: 0.25rem;

    span {
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: 15px;
        font-weight: bold;
        margin-top: 0.75rem;
    }
    
`

export const CoffeContent = styled.div`
    color: ${props => props.theme["base-subtitle"]};
    margin-top: 1rem;
    text-align: center;

    p {
        color: ${props => props.theme["base-label"]};
        margin-top: 0.5rem;
        font-size: 0.875rem;
        padding: 0 1rem;
    }
`

export const CoffePricingContent = styled.footer`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;

    h4 {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
        font-weight: 100;

        & span {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

`

export const CoffePricingCartContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .counterWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme["base-button"]};
        width: 4.25rem;
        height: 2.25rem;
        border-radius: 8px;
        gap: 0.5rem;

        button {
            display: flex;
            align-items: center;
            background: none;
            border: none;
            color: ${props => props.theme["purple-dark"]};
            cursor: pointer;
        }
    }

    .addToCart {
        border: none;
        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme["white"]};
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        transition: all 0.2s;

        &:hover {
            background-color: ${props => props.theme["purple"]};
        }
    }

`