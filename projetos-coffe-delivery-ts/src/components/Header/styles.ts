import styled from "styled-components";

export const HeaderContanier = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    height: 6.5rem;
`

export const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
        display: flex;
        align-items: center;
        height: 2.5rem;
        gap: 0.25rem;
        text-decoration: none;
        background-color: ${props => props.theme["purple-light"]};
        color: ${props => props.theme["purple-dark"]};
        padding: 0.5rem;
        border-radius: 8px;

        transition: all 0.2s;

        & span {
            color: ${props => props.theme["purple"]};
        }

        &:hover {
            background-color: ${props => props.theme["purple"]};
            color: ${props => props.theme["white"]};

            & span {
                color: ${props => props.theme["white"]};
            }
        }
    }

    & .cartLink {
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};

        &:hover {
            background-color: ${props => props.theme["yellow"]};
            color: ${props => props.theme["white"]};

            & span {
                color: ${props => props.theme["white"]};
            }
        }
    }
`