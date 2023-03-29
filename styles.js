import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }

  p {
    margin: 0;
  }

  li {
  list-style: none;
}

ul {
margin: 0;
padding: 0;
}

`;
