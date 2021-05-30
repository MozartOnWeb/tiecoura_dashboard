import styled from "styled-components";
import { down } from "styled-breakpoints";

export const DescWrapper = styled.div`
  width: 300px;
  position: absolute;
  bottom: 5%;
  right: 8%;
  
  textarea {
    resize: none;
  }
  textarea {
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.red};
    background: rgba(255, 255, 255, 0.03);
    width: 100%;
    position: relative;
    outline: none;
  }
  button {
    font-size: 12px;
    margin-top: 10px;
  }
`;
