import styled from "styled-components"

export const Delete = styled.button`
  width: 100%;
  border: 1px solid ${(props) => props.theme.black};
  font-family: "Poppins";
  text-transform: uppercase;
  text-align: center;
  padding: 5px 10px;
  background: transparent;
  color: ${(props) => props.theme.black};
  border-radius: 15px;
`;