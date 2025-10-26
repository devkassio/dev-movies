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
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #ff0000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 20px;
    margin-right: 6px;
    margin-bottom: 6px;
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

  @media (max-width: 768px) {
    box-shadow: 0px 0px 5px 6px rgba(255 0 0 / 30%);

    &:hover {
      box-shadow: 0px 0px 5px 10px rgba(255 0 0 / 30%);
    }
  }

  @media (max-width: 480px) {
    box-shadow: 0px 0px 3px 4px rgba(255 0 0 / 30%);

    &:hover {
      box-shadow: 0px 0px 3px 8px rgba(255 0 0 / 30%);
    }
  }
`;
