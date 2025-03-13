import styled from "styled-components";

export const MainContanier = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    width: 41rem;

    header {
        font-weight: 500;
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
            width: 239px;
        }

        &[type="text"]::placeholder {
            color: ${props => props.theme["gray-500"]};
        }

        &[type="text"]:focus {
            outline: 0;
            box-shadow: 0 0 0 0 transparent;
            color: ${props => props.theme["gray-100"]};
        }

        &[type="time"] {
            width: 60px;
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
        color: ${props => props.theme["gray-300"]};
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`