import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #fff;
    color: #ff0000;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}
  background: #ff0000;
  color: #fff;
  border: 4px solid transparent;
  box-shadow: 0px 0px 07px 08px rgba(255 0 0 / 30%);

  &:hover {
    background: #ff0000;
    color: #fff;
    box-shadow: 0px 0px 07px 15px rgba(255 0 0 / 30%);
  }
`;
