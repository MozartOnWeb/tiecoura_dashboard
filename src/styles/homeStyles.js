// Import Styled Components
import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
  hr {
    width: 90vw;
    margin: 20px auto;
    opacity: 0.7;
  }
`;
export const HomeWrapper = styled.div`
  width: 90vw;
  height: 80vh;
  margin: 0px auto;
  position: relative;
`;

export const HomeHeadrer = styled.div`
  width: 90vw;
  margin: 40px auto;
`;

export const HomeTitle = styled.h2`
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  ${(props) =>
    props.thin &&
    css`
      font-size: 16px;
      margin-bottom: 20px;
      font-weight: 300;
    `}
`;

export const HomeSubTitle = styled.p`
  font-family: ${(props) => props.theme.bodyFont};
`;
