import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${theme.colors.font};
    line-height: 1.2;
    min-width: 360px;
  }
  
    @media ${theme.media.mobile}{
      padding: 80px 0;
    }

  ul{
    list-style: none;
  }
  
`