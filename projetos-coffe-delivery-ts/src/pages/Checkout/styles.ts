import styled from "styled-components";


export const CheckoutContanier = styled.main`
    display: flex;
    padding: 4rem 20rem;
    gap: 3rem;

    h2 {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
    }

`

export const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const OrderFormContent = styled.form`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    background-color: ${props => props.theme["base-card"]};
    height: 23.25rem;
    width: 40rem;
    padding: 2rem;

    h3 {
        color: ${props => props.theme["base-subtitle"]};
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-weight: 100;

        & span {
            color: ${props => props.theme["yellow-dark"]};
        }
    }

    p {
        margin: -0.5rem 2rem;
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
    }
`

export const OrderFormInputsContent = styled.div`
    margin-top: 2rem;   
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    input {
        background-color: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-button"]};
        height: 2.62rem;
        padding: 1rem;
        border-radius: 8px;
    }

    #cep, #number, #neighborhood{
        width: 12.5rem;
    }

    #street {
        width: 100%;
    }

    #complement {
        width: 63%;
    }

    #city {
        width: 17.25rem;
    }

    #uf {
        width: 4.75rem;
    }

`

export const OrderFormPaymentContent = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme["base-card"]};
    height: 13rem;
    width: 40rem;
    margin-top: 1rem;
    padding: 2rem;

    h3 {
        color: ${props => props.theme["base-subtitle"]};
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-weight: 100;

        & span {
            color: ${props => props.theme["purple"]};
        }
    }

    p {
        margin: -0.5rem 2rem;
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
    }
`

export const PaymentTypesContent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    gap: 0.5rem;

    button {
        cursor: pointer;
        height: 3.18rem;
        width: 12rem;
        border: 1px solid transparent;
        background-color: ${props => props.theme["base-button"]};
        border-radius: 8px;
        font-weight: 100;
        color: ${props => props.theme["base-text"]};
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;

        transition: all 0.2s;

        span {
            color: ${props => props.theme["purple"]};
        }

        &:hover {
            background-color: ${props => props.theme["purple-light"]};
            border: 1px solid ${props => props.theme["purple"]};
        }
    }

    .selected {
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme["purple"]};
    }
`

export const OrderDetailContent = styled.div`
    display: flex;
    flex-direction: column;

`

export const OrderPricingDetailContent = styled.div`
    margin-top: 1.5rem;
    width: 28rem;
    min-height: max-content;
    background-color: ${props => props.theme["base-card"]};
    border-top-right-radius: 10%;
    border-bottom-left-radius: 10%;
    padding: 2rem;

`

export const CoffeOrderDetailContent = styled.div`
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    margin-top: 1.5rem;

    img {
        height: 4rem;
        width: 4rem;
        margin-bottom: 1.5rem;
    }

    h5 {
        color: ${props => props.theme["base-text"]};
        margin-left: 2rem;
        font-size: 1.25rem;
        display: flex;
        gap: 0.25rem;
        font-weight: 600;
    }

`

export const CoffeQuantityContent = styled.div`
    display: flex;
    flex-direction: column;
    
    h4 {
        color: ${props => props.theme["base-subtitle"]};
        font-weight: normal;
    }
    
    .itensButons {
        display: flex;
        margin-top: 0.5rem;
        gap: 0.5rem;

        .removeItem {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme["base-button"]};
            color: ${props => props.theme["base-text"]};
            border: 1px solid transparent;
            border-radius: 8px;
            height: 2rem;
            width: 5.75rem;
            gap: 0.25rem;
            font-size: 0.8rem;
            cursor: pointer;

            transition: all 0.2s;

            &:hover {
                background-color: ${props => props.theme["purple-light"]};
                border: 1px solid ${props => props.theme["purple"]};
            }

            & span {
                color: ${props => props.theme["purple"]};
            }
        }
    }

    .counterWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme["base-button"]};
        width: 4.25rem;
        height: 2rem;
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

`

export const OrderTotalPricingContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1rem;

    div {
        display: flex;
        justify-content: space-between;
        color: ${props => props.theme["base-text"]};
    }

    .totalOrder {
        color: ${props => props.theme["base-subtitle"]};
        font-weight: bold;
        font-size: 1.5rem;
    }
    
    button {
        margin-top: 1rem;
        height: 2.875rem;
        border: none;
        background-color: ${props => props.theme.yellow};
        color: ${props => props.theme.white};
        font-weight: bold;
        cursor: pointer;
        border-radius: 8px;

        transition: all 0.2s;

        &:not(:disabled):hover {
            background-color: ${props => props.theme["yellow-dark"]};
        }

        &:disabled {
            cursor: not-allowed;
            background-color: ${props => props.theme["yellow-dark"]};
            opacity: 0.5;
        }
    }
`