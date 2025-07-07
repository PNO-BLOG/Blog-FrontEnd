import { createGlobalStyle } from "styled-components";
import ProtestRiot from "../assets/font/ProtestRiot-Regular.ttf";
import SUIT_Heavy from "../assets/font/SUIT-Heavy.ttf";
import SUIT_ExtraBold from "../assets/font/SUIT-ExtraBold.ttf";
import SUIT_Bold from "../assets/font/SUIT-Bold.ttf";
import SUIT_SemiBold from "../assets/font/SUIT-SemiBold.ttf";
import SUIT_Medium from "../assets/font/SUIT-Medium.ttf";
import SUIT_Regular from "../assets/font/SUIT-Regular.ttf";
import SUIT_Light from "../assets/font/SUIT-Light.ttf";
import SUIT_ExtraLight from "../assets/font/SUIT-ExtraLight.ttf";
import SUIT_Thin from "../assets/font/SUIT-Thin.ttf";

const GlobalStyles = createGlobalStyle`
  /* Protest Riot */
  @font-face {
    font-family: 'ProtestRiot';
    src: url(${ProtestRiot}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* SUIT Family */
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_Thin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_ExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_Light}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_Regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_Medium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_SemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_Bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_ExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${SUIT_Heavy}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;

export default GlobalStyles;
