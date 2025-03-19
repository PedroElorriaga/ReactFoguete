import styled from "styled-components";

export const MainContanier = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    width: 41rem;

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

        &:focus {
            outline: 0;
            box-shadow: transparent;
        }

        &[type="reset"] {
            background-color: ${props => props.theme["red-700"]};

            &:hover {
                background-color: ${props => props.theme["red-500"]};
            }

            &:focus {
                outline: 0;
                box-shadow: transparent;
            }
        }
    }
`