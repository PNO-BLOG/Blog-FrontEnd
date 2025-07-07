import styled from "styled-components";
import logo_horizontal_white from "../../../assets/images/logo/logo-horizontal-white.png";
import { colorStyle } from "../../../assets/style/color";

const { lightWhite, defaultWhite } = colorStyle;

const Container = styled.div`
  padding-left: 11vw;
  padding-right: 11vw;
  position: absolute;
  width: 78vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.div`
  height: 5vh;
  width: 17vw;
  background-image: url(${logo_horizontal_white});
  background-repeat: no-repeat;
  background-size: cover;
`;

const BtnText = styled.a`
  padding: 1vh 1vw 1vh 1vw;
  display: flex;
  align-items: center;
  color: ${lightWhite};
  font-family: "ProtestRiot";
  font-size: 3.5vh;
  line-height: 3.5vh;
  text-align: center;
  text-decoration: none;
  border-radius: 1.5vh;
  &:hover {
    color: ${defaultWhite};
    cursor: pointer;
    transition: 1s;
  }
  &:not(:hover) {
    transition: 1s;
  }
`;

export const TransparentHeaderStyles = {
  Container,
  LogoImage,
  BtnText
};
