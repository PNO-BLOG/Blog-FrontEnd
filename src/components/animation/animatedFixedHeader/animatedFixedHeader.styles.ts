import styled from "styled-components";

const Animator = styled.div<{ visible: boolean }>`
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100vw;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? "0" : "-2vh")});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

export const AnimatedFixedHeaderStyles = { Animator };
