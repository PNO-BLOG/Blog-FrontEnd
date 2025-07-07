import React from "react";
import { BodyContainerStyles } from "./bodyContainer.styles";

interface Props {
  children: React.ReactNode;
}

const { Container } = BodyContainerStyles;

function BodyContainer(props: Props) {
  return <Container>{props.children}</Container>;
}

export default BodyContainer;
