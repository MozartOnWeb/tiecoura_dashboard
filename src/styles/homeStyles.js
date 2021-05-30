// Import Styled Components
import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
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
  text-align: right;
  color: ${(props) => props.theme.white};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  ${(props) =>
    props.thin &&
    css`
      text-align: left;
      margin-top: -10px;
      font-size: 14px;
      margin-bottom: -20px;
      font-weight: 300;
      opacity: 0.8;
    `}
`;

export const HomeSubTitle = styled.p`
  text-align: right;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.white};
  opacity: 0.6;
`;
