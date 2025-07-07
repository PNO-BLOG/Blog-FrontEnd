import { FooterStyles } from "./footer.styles";

const { Container, MainText, DescriptionText } = FooterStyles;

function Footer() {
  return (
    <Container>
      <MainText>Thank you for visiting</MainText>
      <DescriptionText>{"Made by ohsongju(PNO)"}</DescriptionText>
      <DescriptionText>{"contect = { email: “dhthdwn7920@gmail.com”, github: “songju7920” }"}</DescriptionText>
    </Container>
  );
}

export default Footer;
