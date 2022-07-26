import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        list-style: none;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    .container {
        width: 100%;
        max-width: 124.6rem;
        padding: 0 1.5rem;
        margin: 0 auto;
    }
`;