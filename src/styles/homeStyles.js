// Import Styled Components
import styled, { css } from "styled-components";

//Import Styled Breakpoint
import { down } from "styled-breakpoints";

export const HomeContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
  overflow-x: hidden;
`;
export const HomeWrapper = styled.div`
  width: 90vw;
  min-height: 80vh;
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
  ${down("sm")} {
    margin-right: 15px;
  }
  ${(props) =>
    props.thin &&
    css`
      text-align: left;
      margin-top: -10px;
      font-size: 14px;
      margin-bottom: -20px;
      font-weight: 300;
      opacity: 0.8;
      ${down("sm")} {
        margin-left: 15px;
      }
    `}
`;

export const HomeSubTitle = styled.p`
  text-align: right;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.white};
  opacity: 0.6;
  ${down("sm")} {
    margin-right: 15px;
  }
`;
