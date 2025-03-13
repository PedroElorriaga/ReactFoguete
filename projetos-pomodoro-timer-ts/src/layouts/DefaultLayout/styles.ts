import styled from "styled-components";

export const LayoutContanier = styled.div`
    height: 46.5rem;
    width: 70rem;
    background-color: ${props => props.theme["gray-800"]};
    display: flex;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    
`