import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #c3c3c3;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  background-color: #000000;
  color: #c3c3c3;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 16px 8px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 12px 6px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 1.3;
  }
`;
