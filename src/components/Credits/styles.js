import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  img {
    border-radius: 20px;
    width: 150px;
  }

  p {
    color: #fff;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  color: #fff;
  font-size: 16px;
`;
