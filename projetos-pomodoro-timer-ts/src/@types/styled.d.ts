/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}

// AQUI SOBRESCREVEMOS UMA TIPAGEM DE UMA BIBLIOTECA STYLED-COMPONENTS