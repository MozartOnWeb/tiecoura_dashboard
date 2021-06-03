import styled from 'styled-components';

export const DeleteButton = styled.button`
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    position: absolute;
    top: 87%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.red};
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
`;

