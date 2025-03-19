import styled from "styled-components";


export const CountdownContanier = styled.main`
    display: flex;
    gap: 1rem;
    padding: 4rem 0;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8rem;
        height: 12.25rem;
        background-color: ${props => props.theme["gray-700"]};
        border-radius: 8px;
        font-size: 8rem;
        font-family: 'Roboto Mono', sans-serif;
        font-weight: bold;
        color: ${props => props.theme["gray-100"]};
    }

    & span {
        color: ${props => props.theme["green-500"]};
        font-size: 9rem;
        font-family: 'Roboto Mono', sans-serif;
        font-weight: bold;
        box-sizing: initial;
        margin: 0 -8px;
    }

`