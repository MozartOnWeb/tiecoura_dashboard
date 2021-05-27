import styled from "styled-components";

export const PhotoForm = styled.div`
  position: absolute;
  bottom: 5%;
  width: 300px;


  input {
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.black};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.red};
    background: rgba(0, 0, 0, 0.05);
    width: 100%;
    position: relative;
    outline: none;
  }

  input[type="file"] {
    font-size: 14px;
  }
  button {
    margin-top: 10px;
    font-size: 12px;
  }
`;
