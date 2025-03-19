import styled from "styled-components"

export const FormContanier = styled.header`
    font-weight: bold;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;

    input {
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
`