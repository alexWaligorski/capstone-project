import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --yellow: #F6C10A;
  --orange: #EB6734;
  --blue: #034A8A;
  --brown: #914C27;
  --white: #ffffff;
  --black: #000000;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--blue)
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
