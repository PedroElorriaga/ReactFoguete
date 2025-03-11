import styled, { css } from "styled-components";

export type H1Variants = 'primary' | 'secondary' | 'warning'

interface H1ContanierProps {
    variant: H1Variants
}

const h1Variants = {
    primary: 'white',
    secondary: 'cyan',
    warning: 'orange'
}

export const H1 = styled.h1<H1ContanierProps>`
    font-family: sans-serif;
    height: 40px;
    margin-bottom: 20px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};


    /* Isso se chama interpolação */
    /* ${props => {
        return css`
            color: ${h1Variants[props.variant]};
        `
    }} */
`
