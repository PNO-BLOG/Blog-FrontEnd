import Header from "../../common/header/Header";
import { AnimatedFixedHeaderStyles } from "./animatedFixedHeader.styles";

interface Props {
  visible: boolean;
}

const { Animator } = AnimatedFixedHeaderStyles;

function AnimatedFixedHeader(props: Props) {
  return (
    <Animator visible={props.visible}>
      <Header />
    </Animator>
  );
}

export default AnimatedFixedHeader;
