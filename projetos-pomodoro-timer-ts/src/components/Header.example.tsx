import { H1, H1Variants } from './Header.example.styles';

interface HeaderProps {
    variantColor?: H1Variants
}

export default function Header({ variantColor = 'primary' }: HeaderProps) {
    return (
        <H1 variant={variantColor}>HEADER</H1>
    )
}