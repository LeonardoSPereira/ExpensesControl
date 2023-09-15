import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        font-family: 'Roboto Slab', serif;
    }
    
    body {
        background-color: ${ ({theme}) => theme.background2 };
        color: ${ ({theme}) => theme.text3 };
    }

    a {
        text-decoration: none;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }

`;
