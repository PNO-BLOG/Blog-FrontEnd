import { TransparentHeaderStyles } from "./transparentHeader.styles";

const { Container, BtnText, LogoImage } = TransparentHeaderStyles;

function TransparentHeader() {
  return (
    <Container>
      <BtnText href="https://github.com/PNO-BLOG" target="_blank">
        Blog Code
      </BtnText>
      <BtnText>Categories</BtnText>
      <LogoImage />
      <BtnText>About Me</BtnText>
      <BtnText>Search</BtnText>
    </Container>
  );
}

export default TransparentHeader;
