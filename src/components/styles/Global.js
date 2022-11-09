import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body{
    background: ${({ theme }) => theme.colors.background};
    transition: background 1.5s;
    font-size: 1rem;
}
`;
export default GlobalStyles;
