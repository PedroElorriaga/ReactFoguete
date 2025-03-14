import styled from "styled-components";

export const HeaderContanier = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    margin-top: 2.5rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    
    nav a {
        color: ${props => props.theme["gray-100"]};
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        transition: border 0.2s;

        &:hover {
            border-bottom: 2px solid ${props => props.theme["green-500"]};
        }

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 0 transparent;
            border-bottom-color: ${props => props.theme["green-500"]};
        }

        &.active {
            color: ${props => props.theme["green-500"]};
        }
    }
`
