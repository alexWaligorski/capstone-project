import { createGlobalStyle } from "styled-components";
import { Roboto, Open_Sans } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default createGlobalStyle`

:root {
  --yellow: #F6C10A;
  --green: #007E2B;
  --yellow-hover: #fdf3d0;
  --orange: #EB6734;
  --blue: #034A8A;
  --brown: #914C27;
  --white: #ffffff;
  --black: #000000;
  --red: #DB1E13;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: ${opensans.style.fontFamily}, sans-serif;}
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

h1, h2, h3, {
 font-family: ${roboto.style.fontFamily}, sans-serif;
 }


`;
