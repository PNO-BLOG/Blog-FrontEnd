import { HeaderStyles } from "./header.styles";

const { Container, LogoImage, BtnText } = HeaderStyles;

function Header() {
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

export default Header;
