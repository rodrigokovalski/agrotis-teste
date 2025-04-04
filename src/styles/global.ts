import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  .flex {
    display: flex;
    width: 100%;
    
    &.-space-between {
        justify-content: space-between;
    }
  }
`;
