import styled from "styled-components";

export const MainContanier = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    width: 41rem;

    header {
        font-weight: bold;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
    }

    header input {
        background: transparent;
        border: none;
        border-bottom: 2px solid ${props => props.theme["gray-500"]};
        padding: 0.5rem;
        font-weight: 500;
        color: ${props => props.theme["gray-500"]};
        margin: 0 0.5rem;

        &[type="text"] {
            flex: 1;
        }

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
            font-weight: bold;
        }

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 0 transparent;
            color: ${props => props.theme["gray-100"]};
            border-color: ${props => props.theme["green-500"]};
        }

        &[type="number"] {
            width: 4rem;
        }

        &::-webkit-calendar-picker-indicator {
            display: none !important;
        }
    }

    article {
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
    }

    button {
        width: 40.5rem;
        height: 4rem;
        background-color: ${props => props.theme["green-700"]};
        color: ${props => props.theme["gray-100"]};
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        transition: background-color 0.2s;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover {
            background-color: ${props => props.theme["green-500"]};
        }
    }
`