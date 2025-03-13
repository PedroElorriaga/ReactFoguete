import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 2rem;
        margin-top: 2.5rem;
    }

    header div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    
    header div a {
        color: ${props => props.theme["gray-300"]};
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: initial;
    }

    header div svg {
        cursor: pointer;
    }

    header div .homeIcon {
        color: ${props => props.theme["green-500"]};
    }
`
