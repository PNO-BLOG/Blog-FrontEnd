import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./config/global.styles";
import styled from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// 텍스트 드래그를 막기 위한 컨테이너
const OuterContainer = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

root.render(
  <OuterContainer>
    <GlobalStyles />
    <App />
  </OuterContainer>
);
