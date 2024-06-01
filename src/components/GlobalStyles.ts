import { createGlobalStyle } from "styled-components";
import { TTCommonsRegular, TTCommonsDemiBold } from "../config/fonts";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "TTCommons";
    font-weight: 400;
    src: url(${TTCommonsRegular}) format("woff2");
    font-display: fallback;
  }

  @font-face {
    font-family: "TTCommons";
    font-weight: 600;
    src: url(${TTCommonsDemiBold}) format("woff2");
    font-display: fallback;
  }

  :root {
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-text: ${(props) => props.theme.colors.text};
    --color-success: ${(props) => props.theme.colors.success};
    --color-failure: ${(props) => props.theme.colors.failure};
    --color-text-inverse: #FFF;
    --color-bg-gradient: linear-gradient(270deg, #364053 0%, #191E29 100%);

    --padding-section: 6rem;

    --shadow-card: 0px 7.32px 12.2px 0px rgba(0, 0, 0, 0.3);

    @media (max-width: ${(props) => props.theme.breakpoints.small}) {
      --padding-section: 3.6rem;
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    text-size-adjust: 100%;
    font-size: 10px;
  }

  body {
    margin: 0px;
    padding: 0;
    min-height: 100vh;
    position: relative;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;  
  }
`;
