import styled from "styled-components";
import logo_horizontal_black from "../../../assets/images/logo/logo-horizontal-black.png";
import { colorStyle } from "../../../assets/style/color";

const { defaultWhite, defaultBlack, lightBlack } = colorStyle;

const Container = styled.div`
  padding-left: 11vw;
  padding-right: 11vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 78vw;
  height: 12vh;
  background-color: ${defaultWhite};
`;

const LogoImage = styled.div`
  height: 5vh;
  width: 17vw;
  background-image: url(${logo_horizontal_black});
  background-repeat: no-repeat;
  background-size: cover;
`;

const BtnText = styled.a`
  padding: 1vh 1vw 1vh 1vw;
  display: flex;
  align-items: center;
  color: ${lightBlack};
  font-family: "ProtestRiot";
  font-size: 3.5vh;
  line-height: 3.5vh;
  text-align: center;
  text-decoration: none;
  border-radius: 1.5vh;
  &:hover {
    color: ${defaultBlack};
    cursor: pointer;
    transition: 1s;
  }
  &:not(:hover) {
    transition: 1s;
  }
`;

export const HeaderStyles = {
  Container,
  LogoImage,
  BtnText
};
