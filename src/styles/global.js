import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${ ({ theme }) => theme.COLORS.GRAY_300};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.80);
    }
`