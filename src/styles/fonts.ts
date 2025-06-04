// src/styles/fonts.ts
import { createGlobalStyle } from "styled-components";
import cyberdyneFont from "../assets/fonts/cyberdyne.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'cyberdyne';
    src: url(${cyberdyneFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
