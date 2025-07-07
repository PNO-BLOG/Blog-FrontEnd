import styled from "styled-components";
import { colorStyle } from "../../../assets/style/color";

const { defaultBlack, defaultWhite } = colorStyle;

const Container = styled.div`
  margin-top: 14vh;
  margin-bottom: 0;
  padding-left: 7vw;
  padding-right: 7vw;
  width: 86vw;
  height: 50vh;
  background-color: ${defaultBlack};
`;

const MainText = styled.p`
  margin-top: 8vh;
  margin-bottom: 3vh;
  color: ${defaultWhite};
  font-family: "SUIT";
  font-size: 4vh;
  font-weight: 800;
`;

const DescriptionText = styled.p`
  margin-top: 0;
  margin-bottom: 1vh;
  color: ${defaultWhite};
  font-family: "SUIT";
  font-size: 2.5vh;
  font-weight: 700;
`;

export const FooterStyles = {
  Container,
  MainText,
  DescriptionText
};
